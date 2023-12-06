import Image from "next/image";

const contents = [
  {
    title: "地方予選",
    content: `
    【受付終了】<br/>【北海道ブロック】<br/>北海道大会<br/><br/>
    【エントリー受付中】<br/>2023/12/24<br/>【沖縄ブロック】沖縄大会@沖縄アリーナ<br/><br/>
    【エントリー受付中】<br/>2023/1/13 <br/>【関西ブロック第1弾】神戸大会@ポートアオシス神戸<br/><br/>
    【エントリー受付中】<br/>2024/1/20<br/>【九州ブロック第2弾】鹿児島大会@鹿児島市中央公民館<br/><br/>
    【エントリー受付中】<br/>2024/2/3<br/>【九州ブロック第1弾】福岡大会@北九州芸術劇場<br/><br/>
    【エントリー受付中】<br/>2024/2/3<br/>【関西ブロック第2弾】京都大会@オンライン<br/><br/>
    【開催準備中】<br/>【関西ブロック第3弾】<br/>大阪大会<br/><br/>
    【開催準備中】<br/>【東海ブロック第1弾】<br/>愛知大会<br/><br/>
    【開催準備中】<br/>【東海ブロック第2弾】<br/>静岡大会<br/><br/>
    【開催準備中】<br/>【四国ブロック】<br/>高松大会<br/><br/>

    <br/>
    <br/>
    上記予定は変更になる場合がございます。<br/>
    開催場所は<a href="#venue">こちら</a>`,
  },
  {
    title: "東京本選",
    content: `2024年4月28日（日）10:00~17:00`,
  },
];

const Schedule = () => {
  return (
    <section className=" my-20 md:my-40">
      <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all montserrat">SCHEDULE</p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
          開催日程
        </p>
      </h2>

      <div className="container m-auto px-5 md:px-0 md:max-w-2xl">
        {contents.map((item, index) => (
          <div
            key={index}
            className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-start justify-between "
          >
            <p className={"w-[100px] md:w-1/6"}>
              <span className={"px-2 text-white inline-block text-base"}>
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
  );
};

export default Schedule;
