import type { AppProps } from 'next/app';
import { useEffect, useLayoutEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import mediumZoom, { Zoom } from 'medium-zoom';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout';
import * as gtag from '@/utils/gtag';
import '@/styles/index.scss';

let zoom: Zoom;

if (typeof document !== 'undefined') {
  zoom = mediumZoom();
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (zoom) {
      zoom.detach();
      zoom.attach(document.querySelectorAll('.prose img'));
    }
  }, [router.asPath]);

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

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
