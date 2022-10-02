import type { AppProps } from 'next/app';
import type Viewer from 'viewerjs';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import 'viewerjs/dist/viewer.css';
import { DrawerProvider, PageProvider } from '@/context';
import { Layout } from '@/components';
import * as gtag from '@/utils/gtag';
import '@/styles/index.scss';

let viewer: Viewer;

const initViewer = () => {
  const el = document.getElementById('prose');
  if (el) {
    import('viewerjs').then((mod) => {
      viewer = new mod.default(el, {
        button: false,
        loop: false,
        title: false,
        toolbar: false,
        transition: false,
      });
    });
  }
};

const updateViewer = () => {
  if (viewer) {
    viewer.update();
  } else {
    initViewer();
  }
};

if (typeof document !== 'undefined') {
  initViewer();
}

function App({ Component, pageProps }: AppProps) {
  const { events } = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
      updateViewer();
    };

    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('@/config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider attribute="class">
        <DrawerProvider>
          <PageProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PageProvider>
        </DrawerProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
