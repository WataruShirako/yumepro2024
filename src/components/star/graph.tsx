export default async function handler(req: any, res: any) {
  const token =
    'EAADUdDEr490BAKZCZCCl8bZCK4eNhjZBaL3D8FbosBuS8GcrdZB88bgFJs5PIWZB1q5migvZB6e3lRJdxzZBQXBx2TfOfcdS6OZCTjnVMF0pOZBLhkRE0b30dNpI43bAN2tbUdcaDjsZA3Xhz6WEIGiaAsPvWimiuFBTAcTpsrUg8ZA1dvJWSu7V2WBc6KczggDmoZBjHYxJr4G9sRvdGYmwfkEl28l3RaMn9vxTwCW5aWct8ThQiXFc0GGDI'; // あなたのInstagramのアクセストークンに置き換えてください
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url&access_token=${token}`
  );
  const data = await response.json();

  if (response.ok) {
    res.status(200).json(data);
  } else {
    res.status(response.status).json({ message: 'Could not fetch the data.' });
  }
}
