import Image from "next/image";

const contents = [
  {
    title: "開催日",
    content: `2024年4月28日(日)<br class="sm:hidden" />10:00~17:00`,
  },
  {
    title: "開催場所",
    content: `幕張メッセ<br />
    <br />
    〒261-8550<br />
    千葉県千葉市美浜区中瀬2丁目1`,
  },
  {
    title: "審査方法",
    content: `
    対面ピッチ審査
    `,
  },
  {
    title: "審査基準",
    content: `
    ①5年後にIPOを目指せるビジネスモデルか否か<br />
    <br />
    ②その他以下の観点<br />
    ・収益性<br />
    ・市場性<br />
    ・持続性<br />
    ・起業家としての素質<br />
 
    `,
  },
  {
    title: "賞品",
    content: `
    起業資金として1000万<br />
    夢叶えるプロジェクト運営事務局及び提携企業からの起業支援
    `,
  },
  {
    title: "応募資格",
    content: `
    エントリーフォーム送信時点で学生であること（専門学校含む）<br />
    ※学生であれば年齢に制限はございません
    `,
  },
  {
    title: "目的",
    content: `
    「地方からスターを」というコンセプトのもと、日本から世界を代表するスタートアップを輩出するべく、学生が起業しやすい環境の創出
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
          本選概要
        </h2>
        <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
          {contents.map((item, index) => (
            <div
              key={index}
              className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] justify-between items-start"
            >
              <p className={"w-[100px] md:w-1/6"}>
                <span className={"px-2 text-white text-base"}>
                  {item.title}
                </span>
              </p>
              <div className={"w-[75%] text-base"}>
                <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://forms.gle/f6uJ6DoBpp9c2W2X9"
          target="_blank"
          className="button md:text-2xl text-base font-bold relative"
        >
          エントリー
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
