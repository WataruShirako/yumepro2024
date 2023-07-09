import { Inter } from 'next/font/google';
import { ShipporiMincho } from '../../../utils/fonts';
import { cinzel } from '../../../utils/fonts';

const inter = Inter({ subsets: ['latin'] });

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
    site: '@yumepro2023',
    creator: '@yumepro2023',
  },
  verification: {
    google: 'サーチコンソールのやつ',
  },
  alternates: {
    canonical: url,
  },
};

export default function EnttLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`font-sans ${ShipporiMincho.className} ${cinzel.className}`}>
        {children}
      </body>
    </html>
  );
}
