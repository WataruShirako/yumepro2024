import Image from "next/image";

const Entry = () => {
  return (
    <section id="entry" className="pt-12 md:pt-24">
      <h2 className={"text-center"}>
        <span
          className={
            "text-[#C52CFD] font-bold flex items-center justify-center gap-2"
          }
        >
          <Image
            src={"/icons/ambassodors.svg"}
            alt={""}
            width={17}
            height={20}
          />
          Entry conditions
        </span>
        <p className={"font-bold text-2xl md:text-3xl mt-1"}>エントリー資格</p>
      </h2>
      <div className="container max-w-[92%] mx-auto md:max-w-6xl">
        <div className="sm:flex bg-white py-8 sm:px-5 lg:py-10 rounded-2xl my-8 lg:mt-10 md:mx-5">
          <div className="sm:w-1/2">
            <p className="text-center font-bold p-5">●エンタメ部門</p>
            <p className="p-5">
              日本国内在住の夢を持ったすべての方
              <br />
              ※各オーデションによって変動がございますので、詳しくは各オーディションページをご覧ください。
            </p>
          </div>
          <div className="sm:w-1/2">
            <p className="text-center font-bold p-5">●ビジネス部門</p>
            <p className="p-5">
              エントリー時点で学生であること
              <br />
              ※年齢不問
              <br />
              ※詳しくは「学生ピッチ甲子園」ページをご覧ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entry;
