const siteName =
  "夢プロスター誕生オーディション2024　沖縄大会 | 夢叶えるプロジェクト2024";
const description = "夢プロスター誕生オーディション2024　沖縄大会";
const url = "https://yume-pj.com";

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
    google: "サーチコンソールのやつ",
  },
  alternates: {
    canonical: url,
  },
};

export default function EnttLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
