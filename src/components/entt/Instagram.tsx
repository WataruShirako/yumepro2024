'use client';

import { unstable_serialize } from 'swr'; // ✅ Available in server components
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'; // ✅ Available in server components

import useSWR, { Fetcher } from 'swr';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

function Instagram() {
  const token =
    'EAAZAKaoh2nDEBAKXgw2XD3paLC8fZAIWnqZCsJaYjry2w3M7rbs13Et87RX4ZB8JmkyDSwO1KTo3SmK3uuwiUAs8BnXugaIVoNhbVUpEiEaPhi64tGWNtsXhNuwXe1aebhLtH0jZBRFC2GGbbDFZCvZACGOIalycxnpBzcZAhVFPmtObVcWciTMB';
  const { data, error } = useSWR(
    // `https://graph.facebook.com/v17.0/101854819647114/media?access_token=${token}`,
    fetcher
  );

  if (error)
    return (
      <section id="instagram">
        <h2 className={`secTitle font-font-cinzel`}>
          <span className={`block`}>post</span>
          #夢フォトオーディション
        </h2>
        <p className={'text-center'}>データが読み込めませんでした</p>
      </section>
    );

  if (!data)
    return (
      <section id="instagram">
        <h2 className={`secTitle font-font-cinzel`}>
          <span className={`block`}>post</span>
          #夢フォトオーディション
        </h2>
        <p className={'text-center'}>ロード中...</p>
      </section>
    );

  console.log(data);

  return (
    <section id="instagram">
      <h2 className={`secTitle font-font-cinzel`}>
        <span className={`block`}>post</span>
        #夢フォトオーディション
      </h2>
      {/* {data.data.map((post: any) => (
        <div key={post.id}>
          <h2>{post.caption}</h2>
          <img src={post.media_url} alt={post.caption} />
        </div>
      ))} */}
    </section>
  );
}

export default Instagram;
