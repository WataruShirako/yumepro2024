import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";

import ComingSoon from "@/components/common/ComingSoon";

const Home = () => {
  // 公開済みのコンテスト エンタメコンテスト
  const enttContests = [
    {
      id: 1,
      name: "夢フォトオーディション",
      path: "/",
    },
  ];
  // 公開済みのコンテスト スター誕生オーディション
  const enttStar = [
    {
      // id: 1,
      // name: '夢フォトオーディション',
      // Path: '/',
    },
  ];
  const contents = [
    {
      title: "開催日",
      content: `2024年1月20日(土)`,
    },
    {
      title: "会場",
      content: `鹿児島市民文化ホール`,
    },
  ];

  return (
    <>
      <Header />
      <main id="" className={"entt"}>
        <div>
          <picture className=" w-full">
            <source
              media="(min-width: 768px)"
              srcSet="/busi/kagoshima/top_pc.webp"
            />
            <source
              media="(min-width: 321px)"
              srcSet="/busi/kagoshima/top_sp.webp"
            />
            <Image
              src="/busi/kagoshima/top_sp.webp"
              alt="IAキャラクター"
              width={375}
              height={750}
              className="w-full"
            />
          </picture>
        </div>

        <section id="schedule" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image src={"/entt/schedule.svg"} alt="" width={15} height={20} />
              Schedule
            </span>
            開催日程
          </h2>
          <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
            {contents.map((item, index) => (
              <div
                key={index}
                className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-center justify-between"
              >
                <p className={"w-[100px] md:w-1/5"}>
                  <span className={"px-2 py-1 text-base"}>{item.title}</span>
                </p>
                <div className={"w-[75%] text-base"}>
                  <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="venue">
          <h2 className={`secTitle`}>
            <span className={`flex gap-2 justify-center Montserrat`}>
              <Image src={"/entt/venue.svg"} alt="" width={15} height={20} />
              Venue
            </span>
            開催地
          </h2>

          <div className="container flex m-auto md:max-w-4xl pb-10 px-5">
            <div className="w-1/3">
              <Image
                src={"/busi/kagoshima/venue_logo.png"}
                width={278}
                height={278}
                alt=""
                className=""
              />
            </div>

            <div className="md:pl-10 pl-5 w-2/3">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                鹿児島市民文化ホール
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                鹿児島市民文化ホール（川商ホール）は、鹿児島県鹿児島市与次郎二丁目にあるコンサートホールです。
              </p>
            </div>
          </div>

          {/*      <Image
        src={"/busi/hyogo/venue.png"}
        width={895}
        height={152}
        alt=""
        className="mx-auto px-5"
      />
  */}
        </section>
        <WinnerBenefit />
        <section id="ambassador" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Ambassador
            </span>
            アンバサダー
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 mx-auto">
              <Image
                src={"/busi/kagoshima/ambassador.jpg"}
                width={900}
                height={320}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                田口 音羽
              </p>
              <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
                2004年12月27日生まれ。鹿児島県出身。青山学院文学部3年生。
                <br />
                2022年ABEMAバラエティー番組「今日、好きになりました。小夏編」、2023年NHK
                BS1ドラマ「ケーキの切れない非行少年たち」、2023年映画「ミンナのウタ」などに出演。
                <br />
                趣味はゲーム、特技はTikTokのダンスを早く覚えること。
              </p>
            </div>
          </div>
        </section>
        <section id="" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Chairman
            </span>
            司会
          </h2>
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
        </section>
        {/** 
        <section id="committee" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Committee
            </span>
            審査委員会
          </h2>
          <p className="text-center md:text-5xl text-3xl font-black bg-clip-text bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] text-transparent">
            — COMING SOON —
          </p>
        </section>
*/}
        <section id="sponsor" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Sponsor
            </span>
            スポンサー
          </h2>
          <div className="container my-2 md:my-4  grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5 justify-center max-w-3xl mx-auto p-5">
            <div className="item">
              <Image
                src={"/busi/kagoshima/TYH.jpg"}
                alt="TYH"
                width={200}
                height={200}
                className={"rounded-md mx-auto"}
              />
            </div>
            <div className="item">
              <Image
                src={"/top/sponsor/amaterasu.jpg"}
                alt={"アマテラス"}
                width={200}
                height={200}
                className={"rounded-md mx-auto"}
              />
            </div>
          </div>

          <p className="text-center text-lg">and more...</p>

          <a
            href="/sponsor"
            className="button md:text-xl text-base font-bold relative"
          >
            スポンサー募集
            <Image
              src={"/top/arrow_white.svg"}
              alt={"▶︎"}
              width={8.45}
              height={12.45}
              className={"absolute top-auto bottom-auto right-4"}
            />
          </a>
        </section>

        <section id="backup" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Backup
            </span>
            後援
          </h2>
          <div className="flex justify-center">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/top/sponsor/kagoshimashi.png"}
                alt={"鹿児島市"}
                width={"200"}
                height={"200"}
              />
            </div>
          </div>
          <p className="text-center text-lg">and more...</p>
        </section>

        <section id="regional_tournament" className={"mt-20"}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/regional_tournament.svg"}
                alt=""
                width={15}
                height={20}
              />
              Regional tournament
            </span>
            地方大会
          </h2>
          <RegionalTournament />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
