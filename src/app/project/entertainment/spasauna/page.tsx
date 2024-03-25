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

  //開催概要
  const about = {
    status1: `
    2024/3/25(月)18:00 〜 3/31(日)21:59
      
    `,

    status2: `・特定のプロダクションに所属している方は必ず許諾を得てご応募ください。<br />
      ・身長150cm以上の方のみ応募いただけます。<br />
      ・性別に関係なく応募いただけます。<br />
      ・ソロアカウントの方のみ応募いただけます。<br />
      ・1つのイベントにつき、1アカウントのみ参加可能です。<br />
      ・バーチャルライバーの応募は不可とします。<br />
      ・2024年5月中に都内で実施予定のラジオ生放送に参加できる方のみ応募いただけます。<br />
      ・2024年4月〜6月の中で1日、都内で実施予定のサイネージ掲載用の撮影に参加できる方のみ応募いただけます。<br />
      ・2024/4/27(土)に幕張メッセで実施する『夢叶えるプロジェクト2024 in ニコニコ超会議』での授与式に参加できる方のみ応募いただけます。<br />
      ・2024年5月中もしくは6月中に都内で実施する映画撮影に参加できる方のみ応募いただけます。<br />
      ・未成年の方は必ず保護者の同意を得てご応募ください。<br /> `,
    status3:
      "2024年4月27日 10:00~18:00<br /><br />幕張メッセ<br />〒261-8550 千葉県千葉市美浜区中瀬2丁目1",
  };

  // 審査委員
  const committee = [
    {
      id: 1,
      name: "大橋孝史",
      pro: "モバコン株式会社代表取締役 プロデューサー/監督",
      text: "1974年7月27日生まれ。21歳の時に実写映画「ろくでなしBLUSE」プロデューサーデビューし、これまでに数々の映画・ドラマ・アニメ・音楽などエンタテインメント作品をプロデュース。近年は地方創生・インバウンドを目的とした、ふるさと映画祭を開催し、新しい日本のエンタテインメント業界を牽引している。",
      src: "/shortdrama/ohashi.jpg",
      hp: "",
      twitter: "",
      insta: "",
    },
    {
      id: 2,
      name: "齊藤進之介",
      pro: "映画感想TikTokクリエイター 映像作家 専門学校講師",
      text: "1988年、京都府生まれ。映画感想TikTokクリエイター。映像作家、専門学校講師。京都芸術大学映画学科卒業後、東映京都撮影所にて時代劇ドラマ『水戸黄門』助監督として業界入り。2014年に拠点を東京へ移し、映画『HiGH&LOW』シリーズ等の助監督を経て18年独立。19年夏よりTikTokで活動開始。映画レビュージャンルを開拓し人気を集める。現在は監督業を始め、ジョニー・デップらハリウッド俳優へのインタビューも行う。TikTok TOHO Film Festivalで三池崇史監督らと審査員を務める。22年、株式会社MEW Creatorsを設立。著書に『シネマライフハック 人生の悩みに５０の映画で答えてみた』。",
      src: "/shortdrama/saito.jpg",
      hp: "",
      twitter: "",
      insta: "",
    },
    {
      id: 3,
      name: "横田未来",
      pro: "インフルエンサー",
      text: "2022 年 4 月に発表された「10 代に人気な女性インフルエンサー」ランキングで 4 位に ランクイン。2023 年 、日本テレビ Z ドラマ第 4 弾「沼る。港区女子高生」に出演、「今田耕 司のネタバレ MTG」出演、映画「貧困女子」主演するなど、女優/タレントとしても活躍中。SNS 総フォロワー数が 120 万人を超え、Z 世代女の子に大人気!!",
      src: "/shortdrama/yokota.jpg",
      hp: "",
      twitter: "",
      insta: "",
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
      <main id="spasauna" className={"entt"}>
        <section id="fv" className={"pt-0"}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={"/spasauna/fv_pc2.jpg"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/spasauna/fv_sp.jpg"}
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
          <div className="container m-auto max-w-3xl p-5 text-center">
            「ミスミスタースパサウナオーディション2024」は、日本のスパ・サウナ文化の魅力を、国内外に発信していくアンバサダーを選出するミス＆ミスターコンテストです。
            <br />
            日本のスパ・サウナ界をけん引するにふさわしい「美意識と品格」を身につけた次世代エースを発掘すべくSHOWROOMにてイベントを開催！
            <br />
            <a
              href="https://www.showroom-live.com/event/miss_mr_spasauna_2024final"
              target="_blank"
              className="text-[#1D9BF0] border-[#1D9BF0] border-b font-bold"
            >
              詳しくはこちら
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
                  授与式出演
                  <br />
                  夢叶えるプロジェクト in ニコニコ超会議
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
                </div>
                <div>
                  <Image
                    src={"/dance/radio.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  FMラジオ出演権 <br />
                </div>

                <div>
                  <Image
                    src={"/star/tokyo/prize_05.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  高級スパサウナ招待券50万円分
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
              </div>
              <div className="py-10">その他メディア出演のチャンスあり</div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#979C9A] to-[#BDC3C9] rounded-t-3xl text-white font-bold">
              30万ポイント達成者全員
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-5 md:p-10 font-bold">
              <div className=" grid md:grid-cols-1 gap-10">
                <div>
                  <Image
                    src={"/spasauna/avatar2.png"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  オリジナルアバター制作権
                </div>
              </div>
            </div>
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
                  イベント開催
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
                  応募条件
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
                  授賞式
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

          <div className="flex justify-center gap-5">
            <div className="item">
              <Image
                src={"/top/sponsor/showroom.png"}
                alt="showroom"
                width={"200"}
                height={"200"}
                className={"rounded-md mx-auto"}
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
