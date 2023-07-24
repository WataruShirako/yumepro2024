const siteName = '夢フォトオーディション | 夢叶えるプロジェクト2024';
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
