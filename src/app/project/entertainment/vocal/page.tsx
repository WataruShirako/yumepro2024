import "../../../globals.css";
import "../../../entt.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Prize from "@/components/entt/Prize";
import About from "@/components/entt/About";
import Flow from "@/components/entt/Flow";
import Committee from "@/components/entt/Committee";
import Chairman from "@/components/entt/Chairman";
import Comingsoon from "@/components/entt/Comingsoon";
import ToTop from "@/components/entt/Totop";
import Instagram from "@/components/entt/Instagram";
import News from "@/components/top/News";
import Sns from "@/components/entt/Sns";
import Entry from "@/components/entt/Entry";
import Ambassador from "@/components/entt/Ambassador";
import Adviser from "@/components/entt/Adviser";
import Department from "@/components/entt/Department";
import Cta from "@/components/top/Cta";
import Category from "@/components/top/Category";
import Link2023 from "@/components/top/Link2023";
import ComingSoon from "@/components/entt/Comingsoon";
import { Coming_Soon } from "next/font/google";
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

  // 賞金・スポンサー賞
  const prize = {
    title: "特典",
    sponsor: "",
    src: "",
    alt: "",
    SPsrc: "",
  };

  //開催概要
  const about = {
    sched: `
    2024年3月22日(金)〜3月25日(月)
    `,
    status1: `
    
    歌ってみたcollectionにて#夢プロ2024をつけた中から、夢プロ独自の審査基準をクリアした5名の方を選定後、ニコニコ超会議で最終審査
    `,

    status2: "2024年3月29日(金)に受賞者へ連絡",
    status3:
      "2024年4月27日 10:00~18:00<br /><br />幕張メッセ<br />〒261-8550 千葉県千葉市美浜区中瀬2丁目1",
  };

  // 審査委員
  const committee = [
    {
      id: 1,
      name: "堀 ノブアキ",
      pro: "新日本ボイストレーニング協会 会長/ホーリーボイストレーニング ・スタジオ代表/日本味噌ラーメン協会 代表理事/情報経営イノベーション専門職大学(iU) 客員教授",
      text: "紅白歌合戦出演者、著名人、有名声優、アイドル、アーティスト、2.5次元俳優女優～一般の趣味の方まで、話し方レッスン合わせて約3,000人へのレッスン実績。5年間、カラオケ「JOYSOUND」×「堀 ノブアキ」コラボレーション。テレビ出演、ボイストレーニングの健康グッズ監修。",
      src: "/vocal/hori.jpg",
      hp: "",
      youtube: "user-ze7jr5pv5b",
      tiktok: "",
      twitter: "holyvoice919",
      insta: "holyvoice.jp",
    },
  ];

  // 総合司会
  const chairman = {
    id: 1,
    name: "名前 名前",
    pro: "職業",
    text: "香川県在住の写真家。うつろう季節、光を大切におもにフィルムカメラにて撮影している。地元、香川県で撮影した写真を中心にSNSで作品を発表する他、写真展の開催、CDジャケットや書籍のカバー、広告写真などを手掛ける。2019年3月、初の写真集『さよならは青色』（KADOKAWA）を出版。",
    src: "/entt/committee/iwakura_shiori.jpg",
  };

  return (
    <>
      <Header />
      <main id="vocal" className={"entt"}>
        <section id="fv" className={"pt-0 bg-white"}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={"/vocal/vocal_fv.jpg"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/vocal/sp_vocal_fv.jpg"}
              alt="text"
              width={750}
              height={1370}
              priority
            />
          </div>
        </section>
        {/**イベント概要 */}
        <section id="" className="bg-white">
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              Project
            </span>
            開催目的
          </h2>
          <div className="container m-auto max-w-2xl p-5">
            夢プロボーカルオーディションを開催します。
            <br />
            歌ってみたcollectionにて#夢プロ2024をつけた中から、夢プロ独自の審査基準をクリアした5名の方を選定後、幕張メッセinニコニコ超会議で最終審査をします。
            <br />
            <br />
            <br />
            ボーカルオーディションについては「歌ってみた Collection 〜2024
            Spring〜」への投稿が前提となります。参加ルールは
            <a
              href="https://utattemita-collection.jp/project#special"
              target="_blank"
              className="text-[#1D9BF0] border-[#1D9BF0] border-b font-bold"
            >
              こちら
            </a>
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

        <section id="prize" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              <Image
                src={"/entt/yumephoto/icons/prize.svg"}
                alt=""
                width={15}
                height={20}
              />
              Prize
            </span>

            <p dangerouslySetInnerHTML={{ __html: `${prize.title}` }} />
            <div className="mt-10"></div>

            {/** 
            <div className={"mt-2 flex items-center justify-center gap-2"}>
              <p className={"text-xs"}>スポンサー企業</p>
              <Image
                src={prize.sponsor}
                alt={prize.alt}
                width={70}
                height={17}
              />
            </div>
            */}
          </h2>

          <div className="mx-auto max-w-7xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white font-bold">
              優勝特典
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-5 md:p-10 font-bold">
              <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <Image
                    src={"/star/tokyo/prize_05.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  高級スパサウナ招待券100万円分
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_06.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  銀座駅直結大型サイネージ1週間出稿権
                </div>
                <div>
                  <Image
                    src={"/dance/sakura.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  SAKURA歌舞伎貸切券(LIVE可能)
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#CAA846] to-[#E0CA82] rounded-t-3xl text-white font-bold">
              上位5名
              <p className="text-sm"></p>
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <div className="font-bold">
                <Image
                  src={"/star/tokyo/prize_01.jpg"}
                  alt=""
                  width={500}
                  height={500}
                  className="mx-auto"
                />
                <br />
                ステージオーディション最終審査出場権
                <br />
                夢叶えるプロジェクト in ニコニコ超会議2024
              </div>
              <br />
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#979C9A] to-[#BDC3C9] rounded-t-3xl text-white font-bold">
              参加賞
              <p className="text-sm"></p>
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-3">
              <br />
              <div className="font-bold">
                <Image
                  src={"/star/tokyo/prize_05.jpg"}
                  alt=""
                  width={500}
                  height={500}
                  className="mx-auto"
                />
                高級スパサウナ招待券5000円分
              </div>
              ※参加作品多数の場合、抽選となる場合がございます。
            </div>
          </div>

          <p className={"text-center text-xl my-6 md:my-12 Montserrat"}>
            and more ...
          </p>
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
        <section id="about" className={"bg-white"}>
          <h2 className={`secTitle`}>
            <span className={`flex gap-2 justify-center Montserrat`}>
              <Image
                src={"/entt/yumephoto/icons/about.svg"}
                alt=""
                width={15}
                height={20}
              />
              About
            </span>
            開催概要
          </h2>
          <div className="container m-auto max-w-[92%] lg:max-w-2xl">
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  開催期間
                </span>
              </p>
              <div
                className={
                  "w-[75%]  text-xs md:text-sm leading-5 md:leading-8 m-2"
                }
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.sched}` }} />
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  審査方法
                </span>
              </p>
              <div
                className={
                  "w-[75%]  text-xs md:text-sm leading-5 md:leading-8 m-2"
                }
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.status1}` }} />
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  受賞者へ連絡
                </span>
              </p>
              <div
                className={
                  "w-[75%]  text-xs md:text-sm leading-5 md:leading-8 m-2"
                }
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.status2}` }} />
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-y border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  本選・授賞式
                </span>
              </p>
              <div
                className={
                  "w-[75%]  text-xs md:text-sm leading-5 md:leading-8 m-2"
                }
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.status3}` }} />
              </div>
            </div>
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
        <section id="committee" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/yumephoto/icons/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Committee
            </span>
            審査委員
          </h2>

          <div className="container m-auto max-w-[92%] lg:max-w-5xl">
            {committee.map((committee: any, index: any) => (
              <div
                className="list flex flex-col md:flex-row justify-between items-start mt-12 first:mt-0"
                key={index}
              >
                <Image
                  className={
                    "prizeImg mx-auto md:ml-0 w-52 md:w-[30%] rounded-full"
                  }
                  src={committee.src}
                  alt={committee.name}
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <div
                  className={
                    "m-auto mt-4 md:mt-0 md:mr-0 md:w-[60%] max-w-full"
                  }
                >
                  <h4
                    className={
                      "text-2xl pb-4 md:pb-6 text-center md:text-left font-semibold"
                    }
                  >
                    {committee.name}
                  </h4>
                  <h5
                    className={"text-lg pb-4 md:pb-6 text-center md:text-left"}
                  >
                    {committee.pro}
                  </h5>
                  <p className={"text-sm leading-loose pb-4 md:pb-6"}>
                    {committee.text}
                  </p>
                  {committee.tiktok !== "" && (
                    <div
                      className={
                        "flex items-center justify-start gap-4 text-sm mb-2 md:mb-4"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 50 50"
                      >
                        <path
                          d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
                          fill="#485757"
                        ></path>
                      </svg>

                      <a
                        href={`https://www.tiktok.com/${committee.tiktok}/`}
                        className={"text-xs md:text-base hover:opacity-50"}
                      >
                        @{committee.tiktok}
                      </a>
                    </div>
                  )}
                  {committee.youtube !== "" && (
                    <div
                      className={
                        "flex items-center justify-start gap-4 text-sm mb-2 md:mb-4"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        id="Layer_1"
                        width="19.997"
                        height="19.997"
                        viewBox="5 5 40 40"
                      >
                        <path
                          fill="#485757"
                          d="M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"
                        />
                        <polygon fill="#FFFFFF" points="31,24 20,16 20,32 " />
                      </svg>

                      <a
                        href={`https://www.youtube.com/@${committee.youtube}/`}
                        className={"text-xs md:text-base hover:opacity-50"}
                      >
                        @{committee.youtube}
                      </a>
                    </div>
                  )}
                  {committee.twitter !== "" && (
                    <div
                      className={
                        "flex items-center justify-start gap-4 text-sm mb-2 md:mb-4"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.997"
                        height="16.258"
                        viewBox="0 0 19.997 16.258"
                      >
                        <path
                          id="icon_twitter"
                          d="M17.95,4.047c.012.176.012.353.012.531A11.6,11.6,0,0,1,6.289,16.258v0A11.61,11.61,0,0,1,0,14.414a8.343,8.343,0,0,0,.976.059,8.235,8.235,0,0,0,5.1-1.761A4.108,4.108,0,0,1,2.239,9.862a4.088,4.088,0,0,0,1.852-.071A4.1,4.1,0,0,1,.8,5.768V5.716a4.075,4.075,0,0,0,1.862.514A4.111,4.111,0,0,1,1.392.749,11.642,11.642,0,0,0,9.848,5.037a4.107,4.107,0,0,1,6.991-3.744,8.23,8.23,0,0,0,2.605-1,4.12,4.12,0,0,1-1.8,2.27A8.155,8.155,0,0,0,20,1.921,8.337,8.337,0,0,1,17.95,4.047Z"
                          fill="#485757"
                        />
                      </svg>
                      <a
                        href={`https://twitter.com/${committee.twitter}/`}
                        className={"text-xs md:text-base hover:opacity-50"}
                      >
                        @{committee.twitter}
                      </a>
                    </div>
                  )}
                  {committee.insta !== "" && (
                    <div
                      className={
                        "flex items-center justify-start gap-4 text-sm mb-2 md:mb-4"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.997"
                        height="19.997"
                        viewBox="0 0 19.997 19.997"
                      >
                        <g
                          id="グループ_726"
                          data-name="グループ 726"
                          transform="translate(-6388 -3044)"
                        >
                          <path
                            id="長方形_462"
                            data-name="長方形 462"
                            d="M4.555-1h8.888A5.561,5.561,0,0,1,19,4.555v8.888A5.561,5.561,0,0,1,13.442,19H4.555A5.561,5.561,0,0,1-1,13.442V4.555A5.561,5.561,0,0,1,4.555-1Zm8.888,17.775a3.337,3.337,0,0,0,3.333-3.333V4.555a3.337,3.337,0,0,0-3.333-3.333H4.555A3.337,3.337,0,0,0,1.222,4.555v8.888a3.337,3.337,0,0,0,3.333,3.333Z"
                            transform="translate(6389 3045)"
                            fill="#485757"
                          />
                          <path
                            id="楕円形_32"
                            data-name="楕円形 32"
                            d="M3.444-1A4.444,4.444,0,1,1-1,3.444,4.449,4.449,0,0,1,3.444-1Zm0,6.666A2.222,2.222,0,1,0,1.222,3.444,2.224,2.224,0,0,0,3.444,5.666Z"
                            transform="translate(6394.555 3050.555)"
                            fill="#485757"
                          />
                          <path
                            id="線_144"
                            data-name="線 144"
                            d="M.111,1.223A1.111,1.111,0,1,1,1.222.111h0A1.111,1.111,0,0,1,.111,1.223Z"
                            transform="translate(6402.887 3048.888)"
                            fill="#485757"
                          />
                        </g>
                      </svg>
                      <a
                        href={`https://instagram.com/${committee.insta}/`}
                        className={"text-xs md:text-base hover:opacity-50"}
                      >
                        @{committee.insta}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*<Entry />*/}
        {/**<Flow />*/}

        {/* <Instagram /> */}
        {/*<Chairman chairman={chairman} />*/}
        {/*<Adviser />*/}
        {/* <Department enttContests={enttContests} enttStar={enttStar} /> */}
        {/*<Ambassador />*/}
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
