import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/miyagi/Fv";
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
      content: `2024年3月24日(日)`,
    },
    {
      title: "会場",
      content: `イオンモール新利府`,
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
          <div className="container flex m-auto md:max-w-4xl pb-10 px-5 justify-center">
            <div className="w-1/3 md:w-max">
              <Image
                src={"/busi/miyagi/ieon.png"}
                width={278}
                height={278}
                alt=""
                className=""
              />
            </div>

            <div className="md:pl-10 pl-5  w-2/3 md:w-max">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                イオンモール新利府
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                <br />
                ・南館
                <br />
                〒981-0114
                <br />
                宮城県宮城郡利府町新中道3丁目1-1
                <br />
                <br />
                ・北館
                <br />
                〒981-0112
                <br />
                宮城県宮城郡利府町利府字新屋田前22
              </p>
            </div>
          </div>
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
          <div className="md:grid grid-cols-2 md:max-w-6xl mx-auto">
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/miyagi/fukudome_hideki.jpg"}
                  width={642}
                  height={642}
                  alt=""
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left ">
                <p className="mt-5 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  福留 秀基
                </p>
                <p className="font-bold text-[15px] text-center ">
                  <br className="hidden md:block" />
                  スパークル株式会社 代表取締役
                  <br className="hidden md:block" />
                  <br className="hidden md:block" />
                  <br className="hidden md:block" />
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  東北大学大学院通信工学専攻修了後、株式会社シグマクシスにてデジタル戦略コンサルタントとして飲料メーカー・金融業・専門商社・小売業などのクライアントへの新規事業開発・PMO
                  案件・ビジネスデューデリジェンス・データ解析に従事後、スパークルに参画、現在代表取締役。
                </div>
              </div>
            </div>
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/miyagi/tiba_daiki.jpg"}
                  width={642}
                  height={642}
                  alt="島川敏明"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left">
                <p className="mt-5 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  千葉 大貴
                </p>
                <p className="font-bold text-[15px] text-center ">
                  有限会社マイティー千葉重 代表取締役
                  <br />
                  株式会社アキウツーリズムファクトリー 代表取締役
                  <br />
                  一般社団法人東北絆テーブル 代表理事
                  <br />
                  株式会社Inter Local Partners 取締役 等
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  1976年仙台市生まれ。システム会社を２年で退社後、米国放浪を経て2002年に帰国。食品を中心としたECサイトを開設し、数々の賞を受賞する。2011年には大手企業と連携し、東日本大震災の復興支援を実施。一次産業の再生や経営者の育成など数々の地方創生プロジェクトを実施。2017年には仙台市秋保温泉でまちづくり会社を設立。古民家カフェの経営や観光地再生に取り組む。2022年からは農林水産省などの支援事業で審査委員、統括プロデューサーなどを務める。現在は全国で魅力的な商品開発や商業施設のプロデュースなど幅広く活躍している。
                </div>
              </div>
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
          <div className="my-10">
            <ComingSoon />
          </div>
          <a
            href="/sponsor"
            className="button md:text-xl text-base font-bold relative"
          >
            スポンサーさま募集
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
