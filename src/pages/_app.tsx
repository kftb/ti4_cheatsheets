import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CoreLayout } from '../layout/CoreLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CoreLayout>
      <Component {...pageProps} />
    </CoreLayout>
  );
}

export default MyApp;
