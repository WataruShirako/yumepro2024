import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/kyoto/Fv";
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
      content: `2024年2月3日(土)`,
    },
    {
      title: "会場",
      content: `オンライン開催`,
    },
  ];

  return (
    <>
      <Header />
      <main id="" className={"entt"}>
        <Fv />
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
            アンバサダー兼司会
          </h2>
          <ComingSoon />
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
          <p className="text-center md:text-5xl text-3xl font-black bg-clip-text bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] text-transparent">
            — COMING SOON —
          </p>
        </section>
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

        <WinnerBenefit />

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
