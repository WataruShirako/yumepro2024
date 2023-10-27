import Image from "next/image";

const contents = [
  {
    title: "募集項目",
    content: `
    ① 女性起業家賞 ② U-18起業家賞 ③ SDGs起業家賞<br/>
    ④ 地方創生起業家賞 ⑤ 夢叶えるプロジェクトドリーム賞
    `,
  },
  {
    title: "応募方法",
    content: `
    ① 会社に関する基本情報や主要な事業などを応募ページにご記載ください。<br/>
    ② 応募案件のPRポイント、事業の目的・ビジョン、事業の新規性・革新性、起業又は事業立ち上げに至る背景・経緯、事業の現況と今後の見込みを各項目500文字以内に納めてご応募ください。
    `,
  },
];

const Award = () => {
  return (
    <>
      <section className="award my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all">Award</p>
          </div>
          <span className="relative mt-2 md:mt-6">夢プロビジネスアワード</span>
        </h2>
        <div className="container px-5 flex flex-col md:flex-row md:flex-row-reverse items-center justify-center mt-10 gap-5 mx-auto pb-20 md:max-w-6xl ">
          <div className="">
            <Image src={"/busi/award.webp"} alt="" width={500} height={500} />
          </div>
          <div className="text md:w-1/2">
            <p>
              夢プロスタートアップアワード2024開催決定！
              <br />
              各賞の募集項目は、「女性起業家賞」「U-18起業家賞」「SDGs起業家賞」「地方創生起業家賞」「夢叶えるプロジェクトドリーム賞」の5つ。
              <br />
              あなたの事業を有名な企業かのみなさまに披露する絶好のいい機会ですのでご応募お待ちしております。
            </p>
          </div>
        </div>

        <div className={"mt-5"}>
          <h2
            className={
              "text-3xl font-bold container px-5 max-w-2xl mx-auto pb-3"
            }
          >
            アワード応募概要
          </h2>
          <div className="container m-auto px-5 lg:max-w-2xl">
            {contents.map((item, index) => (
              <div
                key={index}
                className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-start justify-between "
              >
                <p className={"w-1/4 md:w-1/5 text-sm leading-5 md:leading-8"}>
                  <span
                    className={"px-2 py-1 text-white inline-block text-base"}
                  >
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
        </div>
      </section>
    </>
  );
};

export default Award;
