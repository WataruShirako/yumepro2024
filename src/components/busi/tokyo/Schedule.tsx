import Image from "next/image";

const contents = [
  {
    title: "開催日",
    content: `2024年3月30日(土)`,
  },
  {
    title: "会場",
    content: `BASE GRANBELL<br /><br />〒104-0061<br />東京都中央区銀座7丁目2番18号
    グランベルスクエアB2F,B3F`,
  },

  {
    title: "入場料金",
    content: `両部門（エンタメ部門・ビジネス部門）入場料金：5,000円<br />
    エンタメ部門入場料金：3,000円<br />
    ビジネス部門入場料金：3,000円<br />
    <br />
    ビジネス部門の「全国学生ピッチ甲子園」とエンタメ部門の「スター誕生オーディション」が同時開催されます`,
  },
  {
    title: "タイムスケジュール",
    content: `12:00〜13:00　開場 お客様入場<br />
    13:00〜13:20　オープニングアクト(配信ランキングTOP3)<br />
    13:20〜13:30　審査員の紹介<br />
    13:30〜15:00　ビジネスピッチ8名<br />
    15:00〜15:30　休憩&審査<br />
    15:30〜15:50　ビジネスピッチ結果発表<br />
    16:00〜17:10　エンタメ部門パフォーマンス7名<br />
    17:40〜18:00　エンタメ部門結果発表<br />
    18:15〜19:00　終了 お客様退場<br />`,
  },
  {
    title: "発表時間",
    content: `プレゼン5分、質疑応答3分`,
  },
];

const Schedule = () => {
  return (
    <section className="">
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

      <div className="container mx-auto px-5 md:px-0 md:max-w-2xl text-sm md:text-base">
        {contents.map((item, index) => (
          <div
            key={index}
            className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-center justify-between"
          >
            <p className={"w-[100px] md:w-1/4"}>
              <span className={" py-1 text-white"}>{item.title}</span>
            </p>
            <div className={"w-[75%]"}>
              <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://tiget.net/events/307517"
        target="_blank"
        className="button md:text-2xl text-base font-bold relative"
      >
        チケットを購入する
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
