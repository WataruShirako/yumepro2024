import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/fukuoka/Fv";
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
      content: `北九州芸術劇場`,
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
                src={"/busi/fukuoka/venue_logo.png"}
                width={278}
                height={278}
                alt=""
                className=""
              />
            </div>
            <div className="md:pl-10 pl-5 w-2/3">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                J:COM北九州芸術劇場
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                北九州芸術劇場は、福岡県北九州市小倉北区のリバーウォーク北九州内にある劇場。優良ホール100選に選ばれている。
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
              Ambassador and Chairman
            </span>
            アンバサダー兼司会
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 mx-auto">
              <Image
                src={"/busi/fukuoka/chairman.jpg"}
                width={900}
                height={320}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                高梨 優佳
              </p>
              <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
                2001年7月21日生まれ、福岡県出身。Z世代の女性を中心に支持を集める。
                <br />
                総フォロワー150万人超を誇り、TikTokでは多くの演技コンテンツが話題に!!
                <br />
                現在はテレビや雑誌へ活動の幅を広げ、JELLY専属モデルとしても活躍中。
              </p>
            </div>
          </div>
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
                src={"/busi/fukuoka/munehisa.jpg"}
                width={642}
                height={642}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                棟久 裕文
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社イーストウッド 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                1977年山口県生まれ。大学進学で福岡県北九州市へ移った後、2002年に北九州市内の居酒屋フードコートにて『やきとり哦流』をオープン。その後、『焼鳥酒膳
                鸞』、居酒屋業態『ごちや』などを次々と出店。
                2005年、多店舗化に伴い有限会社イーストウッドを設立し法人化。2009年、株式会社へ組織変更。現在、福岡県北九州市および福岡市に16店舗を展開。代表取締役として経営全般に携わる傍ら、社会貢献団体等でも活動をおこない、2017年度には一般社団法人北九州青年会議所第65代理事長を務めるなど、地域の町づくりにも積極的に関わっている。
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/busi/fukuoka/itto.jpg"}
                width={642}
                height={642}
                alt="一戸悠里"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                一戸悠里
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社honeyboy&co. 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                お酒のD2Cスタートアップ。 <br />
                鹿児島で蜂蜜酒専門の工場「HONEY
                CRAFT」を立ち上げ、オンラインで販売をしている。2023年5月カフェ運営を開始し、
                現在は蜂蜜の商品開発をメイン事業としている。
              </div>
            </div>
          </div>
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
          <div className="flex justify-center gap-5">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/fukuoka/kitakyusyu.jpg"}
                alt={"北九州市"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/fukuoka/yukuhashi.jpg"}
                alt={"行橋市"}
                width={"200"}
                height={"200"}
              />
            </div>
          </div>
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
