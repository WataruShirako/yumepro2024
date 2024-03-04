import Image from "next/image";

const Timetable = () => {
  return (
    <>
      <section id="timetable" className=" my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative montserrat">Timetable</p>
          </div>
          <p className="relative mt-3 md:mt-6 mb-20 md:text-[32px] text-2xl">
            タイムテーブル
          </p>
        </h2>
        <p className="container text-left mx-auto px-5 md:px-0 md:max-w-lg pb-20 text-[15px] leading-[1.3rem]">
          10：00～10：20　　開会式・和田衆議院議員による挨拶 <br />
          10：20～11：05　　パネルディスカッション① <br />
          11：05～11：10　　休憩・インターバル <br />
          11：10～11：55　　パネルディスカッション② <br />
          11：55～12：00　　休憩・インターバル <br />
          12：00～12：45　　パネルディスカッション③ <br />
          12：45～12：50　　休憩・インターバル <br />
          12：50～13：35　　パネルディスカッション④ <br />
          13：35～13：40　　休憩・インターバル <br />
          13：40～14：25　　パネルディスカッション⑤ <br />
          14：25～14：30　　休憩・インターバル <br />
          14：30～14：45　　全国学生ピッチ甲子園開会式 <br />
          14：45～16：05　　学生ピッチ甲子園
          <br />
          16：05～16：20　　審査員講評・総評 <br />
          16：20～16：30　　審査結果発表・表彰 <br />
          16：30～16：40　　記念撮影（各部門毎及び全体、計4カット） <br />
          16：40～16：50　　丸尾さん総評 <br />
          16：50～17：00　　閉会 <br />
          <br />
        </p>
      </section>
    </>
  );
};

export default Timetable;
