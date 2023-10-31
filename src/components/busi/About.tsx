import Image from "next/image";

const contents = [
  {
    title: "開催日",
    content: `2024年4月28日(日)`,
  },
  {
    title: "開催場所",
    content: `幕張メッセ`,
  },
  {
    title: "賞品",
    content: `
    1000万(企業資金)
    `,
  },
  {
    title: "応募資格",
    content: `
    国内在学中の学生
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
          className={
            "md:text-[32px] text-2xl font-bold container px-5  md:px-0 md:max-w-2xl mx-auto pb-3 text-center"
          }
        >
          開催概要
        </h2>
        <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
          {contents.map((item, index) => (
            <div
              key={index}
              className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] justify-between items-start"
            >
              <p
                className={"w-[100px] md:w-1/6 text-sm leading-5 md:leading-8"}
              >
                <span className={"px-2 text-white inline-block text-base"}>
                  {item.title}
                </span>
              </p>
              <div className={"w-[75%] text-base leading-5 md:leading-8"}>
                <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
              </div>
            </div>
          ))}
        </div>
        <a href="" className="button md:text-2xl text-base font-bold relative">
          応募する
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
      </section>
    </div>
  );
};

export default About;
