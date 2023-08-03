'use client';

import useInstagramEmbed from '@/app/hooks/useInstagramEmbed';

const Instagram = () => {
  useInstagramEmbed();
  return (
    <section id="instagram">
      <h2 className={`secTitle font-font-cinzel`}>
        <span className={`block`}>post</span>
        #夢フォト2024
      </h2>
      {/* <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CvcYBiPvKBU/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        dangerouslySetInnerHTML={{
          __html: `
      `,
        }}
      /> */}
    </section>
  );
};

export default Instagram;
