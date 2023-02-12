import type { AppProps } from 'next/app';
import type Viewer from 'viewerjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import PlausibleProvider from 'next-plausible';
import 'viewerjs/dist/viewer.css';
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
    <PlausibleProvider
      selfHosted
      domain="sunnyhuang.net"
      customDomain="https://analytics.cyc.app"
    >
      <ThemeProvider attribute="class">
        <DrawerProvider>
          <PageProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PageProvider>
        </DrawerProvider>
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default App;
