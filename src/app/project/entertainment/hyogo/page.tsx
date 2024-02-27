import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/hyogo/Fv";
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
      content: `2024年1月13日(土)`,
    },
    {
      title: "会場",
      content: `神戸ポートオアシス`,
    },
  ];

  return (
    <>
      <Header />
      <main id="" className={"entt"}>
        <Fv />
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
                src={"/busi/hyogo/venue_logo.png"}
                width={278}
                height={278}
                alt=""
                className=""
              />
            </div>
            <div className="md:pl-10 pl-5 w-2/3">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                神戸ポートオアシス
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                神戸ポートオアシスは、多目的ホール・会議室・食堂・喫茶等広く市民の皆様が集い、港を感じ、楽しんでいただけるスペースを提供します。
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
                2002年7月23日生まれ。東京都出身。青山学院文学部3年生。ミス青山2023グランプリ、女子高生ミスコン2020グランプリ受賞。
                <br />
                特技は歌って踊ることであり、小学生の頃から8年間のアイドル経験がある。
                <br />
                3Bjunior、マジェスティックセブン、アメフラっシ、A♡Zの元メンバー。
              </p>
            </div>
          </div>
        </section>
        <WinnerBenefit />

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
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 md:w-1/3">
              <Image
                src={"/busi/hyogo/committee01.webp"}
                width={278}
                height={360}
                alt=""
                className="w-60md:w-[320px] object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 md:w-2/3 text-left w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                中村ひろき
              </p>
              <p className="max-w-md text-[13px] mx-auto md:text-left md:mx-0 md:max-w-full">
                Studio ENTRE株式会社 プロデューサー
                <br />
                一般社団法人スタートアップスタジオ協会 理事
                <br />
                <br />
                1993年生まれ。早稲田大学社会科学部卒。
                <br />
                大学在学中からレーベル運営やバンド活動など、音楽についての幅広い活動を展開すると同時に、スタートアップにてプロダクト開発に関わる。
                <br />
                大学卒業後、DMM.comに入社し新規事業の担当として複数のエンタメプロダクト/サービスの立ち上げを行う。
                <br />
                その後、ブロックチェーンスタートアップにて事業開発を担当し、現在はエンターテインメント領域のスタートアップスタジオStudioENTREの事業プロデューサー。
                <br />
                得意領域はXR/AI/ブロックチェーンなどの先端技術を活用したプロダクト開発。
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 md:w-1/3">
              <Image
                src={"/busi/hyogo/committee02.webp"}
                width={278}
                height={360}
                alt=""
                className="w-60md:w-[320px] object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 md:w-2/3 text-left w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                宇宙 星太郎
              </p>
              <p className="max-w-md text-[13px] mx-auto md:text-left md:mx-0 md:max-w-full">
                株式会社うちゅう代表取締役 共同創業者 CCO兼iCEO
                <br />
                <br />
                ・一般社団法人教育ソリューション研究協議会 研究員
                <br />
                ・2020.21.22年度
                経済産業省「未来の教室」STEAMライブラリー事業　宇宙・デザイン思考・Vtuber教育コンテンツ統括責任者
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>
*/}

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
          <div className="flex justify-center py-2">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/hyogo/sponsor01.jpg"}
                alt={""}
                width={"150"}
                height={"150"}
              />
            </div>
          </div>
        </section>

        <section id="regional_tournament" className={"mt-10 "}>
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
