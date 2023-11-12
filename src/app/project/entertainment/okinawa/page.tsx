import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";

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
      content: `2023年12月23日(土)`,
    },
    {
      title: "会場",
      content: `沖縄アリーナ`,
    },
    {
      title: "授与式",
      content: `未定`,
    },
  ];

  return (
    <>
      <Header />
      <main id="" className={"entt"}>
        <section id="fv" className={"pt-0"}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={"/busi/okinawa/top_pc.webp"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/busi/okinawa/top_sp.webp"}
              alt="text"
              width={750}
              height={1370}
              priority
            />
          </div>
        </section>
        <section id="venue">
          <h2 className={`secTitle`}>
            <span className={`flex gap-2 justify-center Montserrat`}>
              <Image src={"/entt/venue.svg"} alt="" width={15} height={20} />
              Venue
            </span>
            開催概要
          </h2>
          <div className="container flex m-auto md:max-w-4xl pb-10 px-5">
            <div className="w-1/3 ">
              <Image
                src={"/busi/okinawa/venue_logo.webp"}
                width={278}
                height={278}
                alt=""
                className=""
              />
            </div>
            <div className="md:pl-10 pl-5 w-2/3">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                沖縄アリーナ
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                沖縄アリーナは、県内最大となる1万人規模のキャパシティを持つ多目的アリーナ。
                バスケットボールを中心としたスポーツの試合や、大型コンサートなどのイベントの会場として利用されています。メインアリーナのほかにも、カフェやショップまで備
                わっている魅力的な施設です。
              </p>
            </div>
          </div>
          <div className="px-5">
            <Image
              src={"/busi/okinawa/venue.webp"}
              width={895}
              height={152}
              alt=""
              className="mx-auto  rounded-3xl"
            />
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
              Ambassador
            </span>
            アンバサダー兼司会
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/entt/okinawa/ambassador.webp"}
                width={278}
                height={360}
                alt=""
                className="w-60md:w-[320px] object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                横田未来　
                <span className="md:text-[15px] text-[13px]">Mirai Yokoda</span>
              </p>
              <p className="max-w-md text-[13px] mx-auto md:text-left md:mx-0">
                2022年4月に発表された「10代に人気な女性インフルエンサー」ランキングで4位にランクイン。
                <br />
                2023年
                、日本テレビZドラマ第4弾「沼る。港区女子高生」に出演、「今田耕司のネタバレMTG」出演、映画「貧困女子」主演するなど、女優/タレントとしても活躍中。
                <br />
                <br />
                SNS総フォロワー数が120 万人を超え、Z世代女の子に大人気!!
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
          <p className="text-center md:text-5xl text-3xl font-black bg-clip-text bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] text-transparent">
            — COMING SOON —
          </p>
        </section>
        <section id="schedule" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
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
        <section id="winnerbenefit">
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/winnerbenefit.svg"}
                alt=""
                width={15}
                height={20}
              />
              Winner Benefit
            </span>
            優勝特典
          </h2>
          <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
            <p className="py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] text-lg text-center">
              東京本線出場権
              <br />
            </p>
          </div>
          <WinnerBenefit />
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
          <div className="flex justify-center py-10">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/entt/okinawa/sponsor01.webp"}
                alt={""}
                width={"150"}
                height={"150"}
              />
            </div>
          </div>
          <p className="text-center text-lg">and more...</p>
          <a href="" className="button md:text-xl text-base font-bold relative">
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
        <section id="regional_tournament" className={"mt-20 md:mt-40"}>
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
