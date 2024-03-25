import Image from "next/image";

const ennt_Chairman = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
        <div className="w-1/2 mx-auto">
          <Image
            src={"/busi/company01.jpg"}
            width={900}
            height={320}
            alt=""
            className="w-60  md:w-[320px]  object-cover mx-auto"
          />
        </div>
        <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
          <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
            大平ひかる
          </p>
          <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
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
          </p>
        </div>
      </div>
    </>
  );
};

export default ennt_Chairman;
