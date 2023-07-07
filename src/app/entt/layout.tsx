import '../globals.css';
import { Inter } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { Shippori_Mincho } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({ subsets: ['latin'] });
const ShipporiMincho = Shippori_Mincho({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
});

const siteName = '夢フォトオーディション';
const description =
  '「夢フォトオーディション」は写真を通じて日本の文化・社会・風景などの魅力を国内外に発信していくアンバサダーを選出するコンテストです。業界をけん引するにふさわしい「技術と感性」を身につけた次世代エースを発掘すべくSNS審査・豪華審査員による審査などの選考によりグランプリを決定します。今回の題材は「日本全国の風景景色」です。';
const url = 'https://yume-pj.com';

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
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
    site: '@サイト用アカウントのTwitterID',
    creator: '@作者のTwitterID',
  },
  verification: {
    google: 'サーチコンソールの',
  },
  alternates: {
    canonical: url,
  },
};

export default function EnttLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>エンタメコンテスト</title>
      </head>
      <body className={'font-sans entt'}>{children}</body>
    </html>
  );
}
