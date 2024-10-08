import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/aichi/Fv";
import ComingSoon from "@/components/common/ComingSoon";
import Comingsoon from "@/components/entt/Comingsoon";

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
      content: `2024年3月31日(日)`,
    },
    {
      title: "会場",
      content: `SLOW ART CENTER NAGOYA<br /><br />
      〒460-0003 <br />愛知県名古屋市中区錦３丁目１６０２`,
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
          <div className="container sm:flex m-auto md:max-w-4xl pb-10 px-5 justify-center">
            <div className="sm:w-1/3">
              <Image
                src={"/busi/aichi/venue1.jpg"}
                width={278}
                height={278}
                alt=""
                className="mx-auto"
              />
            </div>

            <div className="sm:pl-10   sm:w-2/3 ">
              <p className="text-left font-bold mt-2 md:mt-5 text-xl">
                SLOW ART CENTER NAGOYA
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                <br />
                「SLOW ART CENTER
                NAGOYA」は、名古屋市旧教育館跡地に2024年3月開業する暫定活用施設です。
                文化的価値の高い栄地区で、スローアート活動を通じ、人と人、人と環境の新たな関係性を作り、「個人×地域×地球のWell-being」を生み出す市民コミュニティの形成拠点を目的としています。
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
                2002年7月23日生まれ。東京都出身。青山学院文学部3年生。
                <br />
                <br />
                MISS OF MISS CAMPUS QUEEN CONTEST 2024 GP
                <br />
                ミスミスター青山コンテスト2023 GP
                <br />
                女子高生ミスコン2020 GP
                <br />
                株式会社Queencard 代表取締役
                <br />
                全国学生ピッチ甲子園 実行委員長
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
                src={"/star/aichi/kodama.jpg"}
                width={642}
                height={642}
                alt="兒玉 遥"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                兒玉 遥
              </p>

              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                1996年生まれ。福岡県出身。
                2011年HKT48の第1期生オーディションに合格し、同グループのメンバーとして活動を開始。
                2019年にグループを卒業し、女優としての活動を本格化。
                現在は、ドラマや映画、舞台のほかYouTubeなどジャンルを問わず様々な分野で活躍中。
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/star/aichi/akishino.jpg"}
                width={642}
                height={642}
                alt="秋篠くるみ"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                秋篠 くるみ
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社ミルク　代表取締役
                <br /> 株式会社ブランコ　代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                吉本初のアイドルユニットとして芸能界デビュー。
                タレント経験を活かしてプロフィールに特化した写真スタジオ「スタジオミルク」を開業。
                現在は個人・中小企業のビジュアルブランディングとして、魅せ方と事業戦略を軸に、集客・PR・求人のサポートを行なっている。
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/busi/aichi/nakashima.jpg"}
                width={642}
                height={642}
                alt="中島惇生"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                中島惇生
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社REVIVE代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                名古屋市にて築75年の古民家を改装した「KIWAMI
                SAUNA」を経営。コンセプトはととのうを超えた「きわまる」。
                代表中島が世界中400以上のサウナを訪問した経験から、気持ちよさを科学的に追求。
                酸素濃度が高く呼吸のしやすいサウナや、最深部2mの水風呂などが特徴。
                サウナの聖地と言われ、競合ひしめく名古屋において開業から1年で4万人を動員。
                Instagramのフォロワーは12,000以上あるサウナの中で7番目。
                また、来客者の半数以上が20代と従来のサウナと一線を画す。
                ストレス社会と呼ばれる昨今サウナのニーズは拡大しており、全国展開を企図し拡大中。
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
          <div className="container my-2 md:my-4  grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 justify-center max-w-3xl mx-auto p-5">
            <Image
              src={"/busi/aichi/miruku.jpg"}
              alt="miruku"
              width={"200"}
              height={"200"}
              className="rounded-2xl mx-auto"
            />
            <Image
              src={"/top/sponsor/amaterasu.jpg"}
              alt={"アマテラス"}
              width={"200"}
              height={"200"}
              className="rounded-2xl mx-auto"
            />
            <Image
              src={"/top/sponsor/sakura_logo.jpg"}
              alt="sakura"
              width={"200"}
              height={"200"}
              className="rounded-2xl mx-auto"
            />
            <Image
              src={"/top/sponsor/an_spa.png"}
              alt="an_spa"
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
