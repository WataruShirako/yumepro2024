import "./globals.css";

const siteName = "夢叶えるプロジェクト2024";
const description =
  "日本最大級エンタメビジネスコンテストを開催。あらゆる業界を全10部門に分け、ビジネス（ピッチ）コンテストに並行して、より多くの若者へ訴求するためとエンタメ（アンバサダー）コンテンストを実施します。";
const url = "https://yume-pj.com";

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: {
    default: description,
  },
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@yumepro2023",
    creator: "@yumepro2023",
  },
  verification: {
    google: "サーチコンソールID",
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/*  Meta Pixel Code -->*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '206007815881095');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=206007815881095&ev=PageView&noscript=1"
            />`,
          }}
        />
        {/*-------------------->*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
