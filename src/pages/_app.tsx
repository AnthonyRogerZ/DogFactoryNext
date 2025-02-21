import type { AppProps } from 'next/app';
import Script from 'next/script';

const GA_TRACKING_ID = "G-WXE1QZPF64"; // Remplace avec ton ID Google Analytics

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}');
                    `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
