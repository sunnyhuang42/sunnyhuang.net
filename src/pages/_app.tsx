import type { AppProps } from 'next/app';
import type Viewer from 'viewerjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import 'viewerjs/dist/viewer.css';
import { isProduction } from '@/config';
import { DrawerProvider, PageProvider } from '@/context';
import { Layout } from '@/components';
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
      updateViewer();
    };

    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events]);

  return (
    <>
      <ThemeProvider attribute="class">
        <DrawerProvider>
          <PageProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PageProvider>
        </DrawerProvider>
      </ThemeProvider>
      {isProduction && (
        <>
          <GoogleTagManager gtmId="G-C0FKTHR0H5" />
          <Script id="clarity">
            {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "m4yn1e7rb9");`}
          </Script>
        </>
      )}
    </>
  );
}

export default App;
