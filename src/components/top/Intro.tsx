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
          Yume project 2024 ?
        </span>
        <p className={"font-bold text-2xl md:text-3xl mt-1"}>
          夢叶えるプロジェクト
          <br className={"md:hidden"} />
          2024とは？
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
          width={1000}
          height={1000}
          className={"rounded-2xl overflow-hidden flex-1"}
        />
        <div className="flex-1">
          <h3 className={"text-2xl font-semibold my-8"}>
            テーマ
            <br className={"sm:hidden"} />
            「エンタメ」x「地方創生」x「SDGs」
            <br />
            若者も大人も夢に
            <br className={"sm:hidden"} />
            チャレンジしやすい社会を
          </h3>
          <p className={"my-8"}>
            「夢叶えるプロジェクト」は、
            様々な部門のエンタメビジネスコンテストで、
            企画やピッチコンテストを通じて若者に訴求し、
            各業界の夢を持つ人々を支援します。 <br />
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
            最終審査は、ニコニコ超会議@幕張メッセ
          </h3>
          <p className={"my-8"}>
            最終審査、授賞式は2024年4月27日、28日に開催されるニコニコ超会議で行います。
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
