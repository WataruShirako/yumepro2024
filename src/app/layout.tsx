import './globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { ShipporiMincho } from '../utils/fonts';
import { cinzel } from '../utils/fonts';

const inter = Inter({ subsets: ['latin'] });

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
          href="https://fonts.googleapis.com/css2?family=Cinzel&family=Shippori+Mincho&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`entt`}>{children}</body>
    </html>
  );
}
