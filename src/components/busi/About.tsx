import Image from "next/image";

const contents = [
  {
    title: "開催日",
    content: `2023年3月27日(月)17:00〜21:00`,
  },
  {
    title: "開催場所",
    content: `某有名ホテル`,
  },
  {
    title: "賞品",
    content: `
    賞金1000万円
    <br />
    シリコンバレー渡航・宿泊費用
    `,
  },
  {
    title: "応募資格",
    content: `
    起業3年以内の起業家、起業志望者
    `,
  },
  {
    title: "目的",
    content: `
    スタートアップ支援、起業家マインドの育成
    <br />
    誰もがチャレンジできる社会の実現
    `,
  },
  {
    title: "発表時間",
    content: `
    プレゼン10分(パワーポイント使用可)
    <br />
    質疑応答なし
    `,
  },
  {
    title: "テーマ",
    content: `
    各カテゴリーから1テーマ選出<br/>
    テーマに対しての、夢・想いをプレゼンで発表<br/>
    <br/>
    バーチャル起業<br/>
    Web3.0/メタバース/AR/VR/インフルエンサー/AI/ディープテック/研究開発/アプリ/ゲーム/ガジェット/eスポーツ<br/>
    <br/>
    おもてなし起業<br/>
    不動産/宿泊/観光/交通/SaaS/システム/DX/飲食<br/>
    <br/>
    サービス起業<br/>
    サステナビリティ/ソーシャルグッド/地方創生/ウェルネスビューティー/サービス<br/>
    <br/>
    アパレル起業<br/>
    D2C/サブスク/EC(コスメ・ファッション)<br/>
    <br/>
    芸能エンタメ起業<br/>
    芸能エンターテインメント(歌・ダンス・スポーツ・コミック・芸術・小説)
    `,
  },
];

const About = () => {
  return (
    <div>
      <section id="sponsor" className={"my-20 md:my-40"}>
        <h2
          className={"text-3xl font-bold container px-5 max-w-2xl mx-auto pb-3"}
        >
          開催概要
        </h2>
        <div className="container mx-auto px-5 lg:max-w-2xl">
          {contents.map((item, index) => (
            <div
              key={index}
              className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] justify-between items-start"
            >
              <p className={"w-1/4 md:w-1/5 text-sm leading-5 md:leading-8"}>
                <span className={"px-2 py-1 text-white inline-block text-base"}>
                  {item.title}
                </span>
              </p>
              <div className={"w-[75%] text-base leading-5 md:leading-8"}>
                <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
              </div>
            </div>
          ))}
        </div>
        <a href="" className="button text-2xl font-bold">
          応募する
        </a>
      </section>
    </div>
  );
};

export default About;
