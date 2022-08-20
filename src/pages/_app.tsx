import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CoreLayout } from '../layout/CoreLayout';
import Script from '../../node_modules/next/script';
import Head from '../../node_modules/next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <Head>
        <title>TI4 Cheatsheets</title>
      </Head>
      <CoreLayout>
        <Component {...pageProps} />
      </CoreLayout>
    </>
  );
}

export default MyApp;
