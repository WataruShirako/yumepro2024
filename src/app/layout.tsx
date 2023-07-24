import './globals.css';

const siteName = '夢叶えるプロジェクト2024';
const description =
  '日本最大級エンタメビジネスコンテストを開催。あらゆる業界を全10部門に分け、ビジネス（ピッチ）コンテストに並行して、より多くの若者へ訴求するためとエンタメ（アンバサダー）コンテンストを実施します。';
const url = 'https://yume-pj.com';

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@yumepro2023',
    creator: '@yumepro2023',
  },
  verification: {
    google: 'サーチコンソールID',
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
