const siteName =
  "全国学生スタートアップ甲子園 愛知大会| 夢叶えるプロジェクト2024";
const description =
  "全国学生スタートアップ甲子園では、ビジネスに特化し、最新の技術や話題のテーマから、今後次世代を牽引する起業家、事業家たちが３分間のピッチコンテストを行います。優勝者には、シリコンバレー旅行券などの豪華景品をプレゼント。";
const url = "https://yume-pj.com/business";
import "../../busi.css";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description: description,
    url: url,
    siteName: siteName,
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

export default function BusiLayout({
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
