import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { Zoom } from 'medium-zoom';
import { ThemeProvider } from 'next-themes';
import { DrawerProvider, PageProvider } from '@/context';
import { Layout, Drawer } from '@/components';
import * as gtag from '@/utils/gtag';
import '@/styles/index.scss';

let zoom: Zoom;

const initZoom = () => {
  if (zoom) {
    zoom.detach();
    zoom.attach(document.querySelectorAll('.prose img'));
  }
};

if (typeof document !== 'undefined') {
  import('medium-zoom').then((mod) => {
    zoom = mod.default();
    initZoom();
  });
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
      initZoom();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
              <Drawer />
              <Component {...pageProps} />
            </Layout>
          </PageProvider>
        </DrawerProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
