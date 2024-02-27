import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/tokyo/Fv";
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
      content: `2024年3月30日 (土)`,
    },
    {
      title: "会場",
      content: `ワンリーライブ`,
    },
  ];

  return (
    <>
      <Header />
      <main id="" className={"entt"}>
        <Fv />

        {/** スケジュール*/}
        <section id="" className="bg-white">
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              About
            </span>
            開催概要
          </h2>

          <div className="container m-auto max-w-[92%] lg:max-w-2xl">
            <div className="py-5">
              一次選考は、{" "}
              <a
                href="https://onelinavi.com/live/event-page/"
                target="_blank"
                className="text-[#1D9BF0] border-[#1D9BF0] border-b font-bold"
              >
                ワンリーライブ
              </a>
              で行います。
              <br />
              本イベントは、イベント期間中のライブコイン獲得数によるランキングバトルとなります。
              配信中にギフトが送られるとライブコインを獲得することができます。
              <br />
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between gap-3">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  募集期間
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                2024年3月14日（木）22:00まで
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between gap-3">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  イベント期間
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                2024年3月15日（金）0:00 〜 3月19日（火） 21:59:59
                <br />
                ワンリーライブ
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between gap-3">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  関東予選
                  <br />
                  THE STAGE
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                2024年3月30日 (土)
                <br />
                <br />
                BASE GRANBELL
                <br />
                〒104-0061 東京都中央区銀座7丁目2番18号
                グランベルスクエアB2F,B3F
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-y border-[#485757] items-center justify-between gap-3">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  応募資格
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                ・スターになりたい男女
                <br />
                （年齢/性別は問いません。未成年者は保護者の同意が必要です。）
                <br />
                ・本イベントで上位10名に入賞された場合、2024/03/30(土)の最終審査にお越しになれる方。
                <br />
                ・本イベントで上位3名に入賞された場合、2024/04/27(土)のニコニコ超会議2024にお越しになれる方。
                <br />
                ・本イベントで上位1名に入賞された場合、映画の撮影（5,6月予定）にお越しになれる方。
                <br />
                ・メディア出演の可能な方
                <br />
                <br />
                ※応募条件を満たさない場合は失格となり、会参加者の順位が繰り上がりになりますのでご注意ください。
                <br />
              </div>
            </div>
          </div>
          <a
            href="https://onelinavi.com/live/event-page/"
            target="_blank"
            className={"btn btnEntt"}
          >
            エントリー・詳細こちら
            <Image
              className={"absolute right-[20px] top-1/2 -translate-y-1/2"}
              src={"/entt/entt_btn_arrow.svg"}
              alt={"▶︎"}
              width={26}
              height={26}
            />
          </a>
        </section>
        <div className="svg__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"svg__content under"}
            viewBox="0 0 1366 100"
          >
            <path
              className={"w-full"}
              id="パス_286"
              data-name="パス 286"
              d="M1366,0H0V60s154.1,40,324.849,40S683,60,683,60s208.446-40,379.2-40S1366,60,1366,60Z"
              fill="#fff"
            />
          </svg>
        </div>
        {/** 特典*/}
        <section id="prize" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              Prize
            </span>
            特典
          </h2>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#CAA846] to-[#E0CA82] rounded-t-3xl text-white font-bold">
              ランキング 1位
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <br />
              <p className="font-bold mb-2">
                ・ニコニコ超会議 夢叶えるプロジェクト2024ステージ出演権
                <br />
                ・映画『夢叶えるプロジェクト(仮)』出演権（内容が変更となる可能性があります）
                <br />
                ・TOKYO MX番組出演権（事前審査あり)
                <br />
                ・3月30日関東予選THE STAGE出演
                <br />
                ・高級スパサウナ招待券40万円分
                <br />
                ・銀座サイネージモデル出演
                <br />
                ・その他メディア出演のチャンスあり
                <br />
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#979C9A] to-[#BDC3C9] rounded-t-3xl text-white font-bold">
              ランキング 2~3位
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <br />
              <p className="font-bold mb-2">
                ・ニコニコ超会議 夢叶えるプロジェクト2024ステージ出演権
                <br />
                ・TOKYO MX番組出演権（事前審査あり)
                <br />
                ・3月30日関東予選THE STAGE出演
                <br />
                ・高級スパサウナ招待券30万円分
                <br />
                ・銀座サイネージモデル出演
                <br />
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#b87333] to-[#b8a593] rounded-t-3xl text-white font-bold">
              ランキング 4~10位
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <br />
              <p className="font-bold mb-2">
                ・TOKYO MX番組出演権（事前審査あり)
                <br />
                ・3月30日関東予選THE STAGEへ通過
                <br />
                当日パフォーマンスを行なっていただき、審査員賞を受賞した2名がニコニコ超会議への出演権を獲得。
                <br />
                ・銀座サイネージモデル出演
                <br />
              </p>
            </div>
          </div>
        </section>

        <section id="ambassador" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              AMBASSADOR
            </span>
            アンバサダー
          </h2>
          <ComingSoon />
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
          <ComingSoon />
          {/** 
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
                2002年7月23日生まれ。東京都出身。青山学院文学部3年生。ミス青山2023グランプリ、女子高生ミスコン2020グランプリ受賞。
                <br />
                特技は歌って踊ることであり、小学生の頃から8年間のアイドル経験がある。
                <br />
                3Bjunior、マジェスティックセブン、アメフラっシ、A♡Zの元メンバー。
              </p>
            </div>
          </div>
          */}
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
          <div className="flex justify-center py-2">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/top/sponsor/onelilive.jpg"}
                alt={""}
                width={"200"}
                height={"200"}
              />
            </div>
          </div>
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
          <ComingSoon />
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
