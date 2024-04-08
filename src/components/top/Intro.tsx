import Image from "next/image";

const Intro = () => {
  return (
    <section className={"mt-12 md:mt-24 max-w-7xl mx-auto"}>
      <h2 className={"text-center"}>
        <span
          className={
            "text-[#C52CFD] font-bold flex items-center justify-center gap-2"
          }
        >
          <Image src={"/icons/whatweare.svg"} alt={""} width={16} height={20} />
          Yume project ?
        </span>
        <p className={"font-bold text-2xl md:text-3xl mt-1"}>
          夢叶えるプロジェクトとは？
        </p>
      </h2>
      <div
        className={
          "container max-w-[92%] mx-auto mt-8 md:flex gap-10 items-center mb-24"
        }
      >
        <Image
          src={"/top/whatweare_img.webp"}
          alt={"夢叶えるプロジェクトとは？"}
          width={800}
          height={800}
          className={"rounded-2xl overflow-hidden flex-1"}
        />
        <div className="flex-1">
          <h3 className={"text-xl font-semibold my-8"}>
            <p className="text-center mb-5">2024年のテーマは</p>

            <div className="text-2xl sm:text-3xl">
              <p className="text-center">「エンターテイメント」</p>
              <p className="text-center">×</p>
              <p className="text-center">「地方創生」</p>
            </div>
          </h3>
          <p className={"my-8"}>
            「夢叶えるプロジェクト」は、夢を持つ全ての方を夢を叶える機会を生み出し、様々なジャンルの
            オーディションやピッチコンテストを通じて、夢を持つ人々を支援する日本最大級のエンタメ・ビジネスオーディションイベントです。
          </p>
        </div>
      </div>
      <div className="container max-w-[92%] m-auto mt-8 md:flex gap-10 items-center flex-row-reverse mb-24">
        <Image
          src={"/top/niconico.svg"}
          alt={"夢叶えるプロジェクトとは？"}
          width={600}
          height={300}
          className={"rounded-2xl flex-1 mx-auto"}
        />
        <div className="">
          <h3 className={"text-2xl font-semibold my-8 "}>
            最終審査は、幕張メッセ in ニコニコ超会議2024
          </h3>
          <p className={"my-8"}>
            最終審査、授賞式は2024年4月27日、28日に幕張メッセで行います。
            <br />
            審査員は、各部門の代表となるスタートアップや若手起業家を選び、
            豪華賞品を提供します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
