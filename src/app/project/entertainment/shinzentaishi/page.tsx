import "../../../globals.css";
import "../../../entt.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

import ToTop from "@/components/entt/Totop";

import Sns from "@/components/entt/Sns";

import Category from "@/components/top/Category";
import Link2023 from "@/components/top/Link2023";

const Home = () => {
  return (
    <>
      <Header />
      <main id="shinzentaishi" className={"entt"}>
        <section id="fv" className={"pt-0"}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={"/shinzentaishi/shinzentaishi_Fv.jpg"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/shinzentaishi/shinzentaishi_Fv.jpg"}
              alt="text"
              width={750}
              height={1370}
              priority
            />
          </div>
        </section>
        {/**イベント概要 */}
        <section id="" className="">
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              Project
            </span>
            開催目的
          </h2>
          <div className="container m-auto max-w-2xl p-5">
            関東、関西の2ブロックで夢プロ親善大使オーディションを開催します。
            <br />
            オーディションは、ミクチャアプリでの動画投稿、ライブ配信で行います。
            <br />
            親善大使に就任すると、行ってみたかったあの都市＆台湾にも行けるチャンス！たくさん魅力をシェアしよう!
          </div>
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
        {/** スケジュール*/}
        <section id="" className="bg-white">
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              About
            </span>
            開催概要
          </h2>

          <div className="container m-auto max-w-4xl"></div>
          <div className="container m-auto max-w-[92%] lg:max-w-2xl">
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between gap-3">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  エントリー
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                〜 1/30(火) 12:00
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
                  本選
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                2/1(木) 12:00 〜2/11(日) 24:00
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
                日本国内在住者のみ
                <br />
                未成年者はエントリーの際に保護者の同意が必要となります。
              </div>
            </div>
          </div>
          <a
            href="https://mixch.tv/p/p17q52oa"
            target="_blank"
            className={"btn btnEntt"}
          >
            詳しくはこちら
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
        <section id="prize" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              Prize
            </span>
            特典
          </h2>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white font-bold">
              総合特典
              <p className="text-sm font-normal">
                🏆関西 / 関東の1位のうち より多くポイントを獲得した方🏆
              </p>
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <br />
              <p className="font-bold mb-2">
                夢プロ親善大使に就任
                <br />
                台湾大会にご招待
              </p>
              交通費&宿泊費は夢プロが手配します。
              <br />
              台湾で動画を撮影してシェアしていただきます。
            </div>
          </div>{" "}
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#CAA846] to-[#E0CA82] rounded-t-3xl text-white font-bold">
              関西 / 関東 各ポイントランキング1位
              <p className="text-sm"></p>
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <br />
              <p className="font-bold mb-2">
                夢プロ親善大使に就任
                <br />
                地方大会のアシスタントMC
              </p>
              【関東】 3/30東京都 3/24宮城県
              <br /> 【関西】 2/28大阪府 2/17香川県
              <br />
              先に上記都市から1つ、参加したい都市を選べます。
              <br />
              <br />
              1泊2日分の交通費&宿泊費は夢プロが手配します。
              <br />
              各都市で動画を撮影してシェアしていただきます。
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#979C9A] to-[#BDC3C9] rounded-t-3xl text-white font-bold">
              関西 / 関東 各ポイントランキング2位
              <p className="text-sm"></p>
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <br />
              <p className="font-bold mb-2">
                夢プロ親善大使に就任
                <br />
                地方大会のアシスタントMC
              </p>
              【関東】 3/30東京都 3/24宮城県
              <br /> 【関西】 2/28大阪府 2/17香川県
              <br />
              1位が選ばなかった方の都市に参加できます。
              <br /> <br />
              1泊2日分の交通費&宿泊費は夢プロが手配します。
              <br />
              各都市で動画を撮影してシェアしていただきます。
            </div>
          </div>
        </section>

        <Sns />
        {/*<Cta />*/}
        <Category />
        <Link2023 />
      </main>
      <ToTop />
      <Footer />
    </>
  );
};

export default Home;
