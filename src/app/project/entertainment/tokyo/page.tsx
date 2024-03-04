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
        <div>
          <picture className=" w-full">
            <source media="(min-width: 768px)" srcSet="/star/tokyo/fv.jpg" />
            <source media="(min-width: 321px)" srcSet="/star/tokyo/fv.jpg" />
            <Image
              src="/star/tokyo/fv.jpg"
              alt="IAキャラクター"
              width={375}
              height={750}
              className="w-full"
            />
          </picture>
        </div>

        {/** スケジュール*/}
        <section id="" className="">
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
            className={"svg__content top"}
            viewBox="0 0 1366 100"
          >
            <path
              id="パス_285"
              data-name="パス 285"
              d="M0,120H1366V60s-154.1-40-324.849-40S683,60,683,60s-208.446,40-379.2,40S0,60,0,60Z"
              transform="translate(0 -20)"
              fill="#fff"
            />
          </svg>
        </div>
        <section id="flow" className={"bg-white"}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/yumephoto/icons/flow.svg"}
                alt=""
                width={20}
                height={20}
              />
              Flow
            </span>
            選考フロー
          </h2>
          <div className="container m-auto max-w-[92%] xl:max-w-5xl py-10">
            <Image
              src={"/star/tokyo/flow_pc2.png"}
              alt=""
              width={900}
              height={900}
              className="mx-auto hidden md:block"
            />
            <Image
              src={"/star/tokyo/flow_sp2.png"}
              alt=""
              width={900}
              height={900}
              className="mx-auto md:hidden max-w-[400px] w-[90%]"
            />
          </div>
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
          <div className="mx-auto max-w-7xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#CAA846] to-[#E0CA82] rounded-t-3xl text-white font-bold">
              ランキング 1位
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-5 md:p-10 font-bold">
              <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <Image
                    src={"/star/tokyo/prize_01.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  ニコニコ超会議
                  <br />
                  夢叶えるプロジェクト2024ステージ出演権
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_07.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  ニコニコ超会議
                  <br />
                  夢叶えるプロジェクト2024ファッションショー出演権
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_02.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  映画『夢叶えるプロジェクト(仮)』出演権
                  <br />
                  <p className="font-normal text-sm">
                    （内容が変更となる可能性があります）
                  </p>
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_03.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  TOKYO MX番組出演権 <br />
                  <p className="font-normal text-sm">（事前審査あり)</p>
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_04.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  3月30日関東予選 THE STAGE出演
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_05.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  高級スパサウナ招待券40万円分
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_06.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  銀座サイネージモデル出演
                </div>
              </div>
              <div className="py-10">その他メディア出演のチャンスあり</div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#979C9A] to-[#BDC3C9] rounded-t-3xl text-white font-bold">
              ランキング 2~3位
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-5 md:p-10 font-bold">
              <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <Image
                    src={"/star/tokyo/prize_01.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  ニコニコ超会議
                  <br />
                  夢叶えるプロジェクト2024ステージ出演権
                </div>

                <div>
                  <Image
                    src={"/star/tokyo/prize_03.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  TOKYO MX番組出演権 <br />
                  <p className="font-normal text-sm">（事前審査あり)</p>
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_04.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  3月30日関東予選 THE STAGE出演
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_05.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  高級スパサウナ招待券30万円分
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_06.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  銀座サイネージモデル出演
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#b87333] to-[#b8a593] rounded-t-3xl text-white font-bold">
              ランキング 4~10位
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-5 md:p-10 font-bold">
              <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <Image
                    src={"/star/tokyo/prize_03.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  TOKYO MX番組出演権 <br />
                  （事前審査あり)
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_04.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  3月30日関東予選 THE STAGE出演
                  <br />
                  <p className="font-normal text-sm">
                    当日パフォーマンスを行なっていただき、審査員賞を受賞した2名がニコニコ超会議への出演権を獲得
                  </p>
                </div>

                <div>
                  <Image
                    src={"/star/tokyo/prize_06.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  銀座サイネージモデル出演
                </div>
              </div>
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
                src={"/busi/tokyo/west.png"}
                width={900}
                height={320}
                alt="ウエストランド"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                ウエストランド
              </p>
              <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
                ウエストランドは、タイタンに所属する井口浩之と河本太からなる日本のお笑いコンビ。
                <br />
                M-1グランプリ2022王者。
                <br />
                2人とも岡山県津山市出身であり、2021年6月1日より、つやま産業支援センター特命大使。
                津山ふるさと大使。
                <br />
              </p>
            </div>
          </div>
        </section>

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
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 mx-auto">
              <Image
                src={"/star/tokyo/yukipoyo.jpg"}
                width={900}
                height={320}
                alt="ゆきぽよ"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                木村有希（ゆきぽよ）
              </p>
              <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
                モデル、タレント。1996年10月23日生まれ、神奈川県出身。O型。エイジアプロモーション所属。愛称は“ゆきぽよ”。2012年、雑誌『egg』の読者モデルとしてデビュー。17年、恋愛リアリティ番組『バチェラー・ジャパン』に出演。天真爛漫なキャラクターが人気を博し、出演後はテレビのバラエティー番組を中心に活躍している。
                <br />
              </p>
            </div>
          </div>
        </section>

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
