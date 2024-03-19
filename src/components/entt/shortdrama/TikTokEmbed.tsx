import React from "react";

interface TikTokEmbedProps {
  url: string;
}

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ url }) => {
  return (
    <div>
      <blockquote
        className="tiktok-embed"
        data-video-id={url.split("/").pop()}
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>{/* ここに必要な情報を追加 */}</section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};
export default TikTokEmbed;
