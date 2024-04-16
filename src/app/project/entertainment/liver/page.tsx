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
              src={"/liver/liver1.jpg"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/liver/sp_liver1.png"}
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
            夢プロライバーオーディションを開催します。
            <br />
            この部門は、最新のSNSともいえるライバーの頂点を決定する大規模部門です。
            <br />
            予選、本選はミクチャアプリでの動画投稿、ライブ配信で行います。
            <br />
            ファイナリストはニコニコ超会議への出演が確定！実際にステージ上での配信を行い、ファンの皆さんや多くの観客とともにどきどきの瞬間を味わいます。
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
                  予選 Aブロック
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                エントリー：〜 2/10(土) 23:59
                <br />
                1st：2/11(日) 12:00 〜 2/22(木) 24:00
                <br />
                2nd：2/24(土) 12:00 〜3/03(日) 24:00
                <br />
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
                  予選 Bブロック
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                エントリー：2/15(木) 12:00 〜 3/01(金) 23:59
                <br />
                1st：3/02(土) 12:00 〜 3/13(水) 24:00
                <br />
                2nd：3/16(土) 12:00 〜3/24(日) 24:00
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
                1st：3/31(日) 12:00 〜4/07(日) 24:00
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
                  FINAL＆表彰式
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                4/27(土) 幕張メッセ in ニコニコ超会議
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
                18歳〜36歳の男女が対象となります。
                <br />
                未成年者はエントリーの際に保護者の同意が必要となります。
                <br />
                必ず、4/27(土)に開催されるニコニコ超会議(都内での実施)への参加が必要となります。参加できない場合はFINAL・受賞は辞退とみなしますのであらかじめご了承ください。
              </div>
            </div>
          </div>
          <a
            href="https://mixch.tv/p/vz77ifgu"
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
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#485757] to-[#485757] rounded-t-3xl text-white font-bold">
              エントリー特典
              <p className="text-sm font-normal">エントリー完了者 全員対象</p>
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center">
              <br />
              <div className="font-bold">
                <Image
                  src={"/star/tokyo/prize_05.jpg"}
                  alt=""
                  width={500}
                  height={500}
                  className="mx-auto"
                />
                高級スパサウナ招待券
              </div>
              <br />
              ▼受け取りはこちらから▼
              <br />
              <a
                href="https://page.line.me/?accountId=yumepro"
                target="_blank"
                className={""}
              >
                <Image
                  className={"mx-auto"}
                  src={"/liver/line.png"}
                  alt={"▶︎"}
                  width={200}
                  height={200}
                />
              </a>
              「スター誕生オーディション」と「あなたのミクチャID」を
              送ってください
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#979C9A] to-[#BDC3C9] rounded-t-3xl text-white font-bold">
              本選1st 特典
              <p className="text-sm font-normal">
                本選から3名がファイナリストに!!
              </p>
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center">
              <Image
                src={"/star/tokyo/prize_01.jpg"}
                alt=""
                width={500}
                height={500}
                className="mx-auto"
              />
              <p className="font-bold">
                夢叶えるプロジェクト2024ステージ出演権
              </p>
              <p className="font-bold">in ニコニコ超会議2024</p>
              <br />
              ステージ上でFINAL最終決戦を実施
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#CAA846] to-[#E0CA82] rounded-t-3xl text-white font-bold">
              FINAL最終決戦 グランプリ特典
              <p className="text-sm"></p>
            </div>

            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-5 md:p-10 font-bold">
              <div className=" grid md:grid-cols-2 gap-10">
                <div>
                  <Image
                    src={"/liver/prize_money1.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  賞金100万円
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
              </div>
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
