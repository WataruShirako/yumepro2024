import Image from "next/image";

const company = () => {
  return (
    <>
      <section id="company" className=" my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center">
          <div className="relative w-max montserrat">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all">
              Committee
              <br className="sm:hidden" />
              Chairman
            </p>
          </div>
          <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
            実行委員長
          </p>
        </h2>
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
          <div className="">
            <Image
              src={"/busi/company01.jpg"}
              width={642}
              height={642}
              alt=""
              className="w-60  md:w-[320px]  object-cover mx-auto"
            />
          </div>
          <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
            <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
              大平ひかる
            </p>
            <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
              2002年7月23日生まれ。東京都出身。青山学院文学部3年生。
              <br />
              MISS OF MISS CAMPUS QUEEN CONTEST 2024 GP
              <br />
              ミスミスター青山コンテスト2023 GP
              <br />
              女子高生ミスコン2020 GP
              <br />
              株式会社Queencard 代表取締役
              <br />
              全国学生ピッチ甲子園 実行委員長
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default company;
