import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/shizuoka/Fv";
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
      content: `2024年4月7日(日)`,
    },
    {
      title: "会場",
      content: `浜松市総合産業展示館`,
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
                src={"/busi/shizuoka/venue_.jpg"}
                width={378}
                height={278}
                alt=""
                className=""
              />
            </div>

            <div className="md:pl-10 pl-5  w-2/3 md:w-max">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                浜松市総合産業展示館
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                <br />
                〒435-0007
                <br />
                静岡県浜松市中央区流通元町20-2
                <br />
              </p>
            </div>
          </div>
        </section>
        <WinnerBenefit />

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
            <div className="w-1/2">
              <Image
                src={"/busi/shizuoka/sakakibara.jpg"}
                width={642}
                height={642}
                alt="榊原清一"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                榊原清一
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社EMOLVA 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                東京理科大学大学院を卒業後、サイバーエージェントでインフルエンジニアとして勤務し、その後SNSマーケティング業界のパイオニアとして起業。創業10年で500社以上の企業にサービスを提供。自身も合計40万人以上のフォロワーを持ち、10年前からSNSマーケティングを行ってきた豊富なノウハウの持ち主。
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/shortdrama/ohashi.jpg"}
                width={642}
                height={642}
                alt="大橋孝史"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                大橋孝史
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                モバコン株式会社代表取締役 プロデューサー/監督
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                1974年7月27日生まれ。21歳の時に実写映画「ろくでなしBLUSE」プロデューサーデビューし、これまでに数々の映画・ドラマ・アニメ・音楽などエンタテインメント作品をプロデュース。近年は地方創生・インバウンドを目的とした、ふるさと映画祭を開催し、新しい日本のエンタテインメント業界を牽引している。
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
          <div className="container my-2 md:my-4  grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 justify-center max-w-3xl mx-auto p-5">
            <Image
              src={"/top/sponsor/amaterasu.jpg"}
              alt={"アマテラス"}
              width={"200"}
              height={"200"}
              className="rounded-2xl mx-auto"
            />
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

          <div className="flex justify-center py-10 gap-10">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/shizuoka/hamamatsu.png"}
                alt={"浜松市"}
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
