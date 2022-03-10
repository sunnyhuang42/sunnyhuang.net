import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
// import Layout from '@/components/layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
