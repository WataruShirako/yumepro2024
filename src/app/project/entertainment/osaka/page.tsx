import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/osaka/Fv";
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
      content: `2024年3月11日(月)`,
    },
    {
      title: "会場",
      content: `KINCUBA Basecamp<br /><br />
      〒577-0818<br />
      大阪府東大阪市小若江3-6-9<br />`,
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
                src={"/busi/osaka/venue_logo.png"}
                width={278}
                height={278}
                alt=""
                className=""
              />
            </div>
            <div className="md:pl-10 pl-5 w-2/3">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                KINCUBA Basecamp
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                「起業」というチャレンジを山に例えたとき、目標到達を目指す拠点となる場所、それがKINCUBA
                Basecamp。このインキュベーション施設は、近畿大学東大阪キャンパスを象徴する西門の目の前に位置し、24時間利用可能、登記利用もでき、環境面からも起業を支援しています。同じ夢と志をもった仲間といつでも集うことができる共創空間で、近畿大学発ベンチャーの創出を後押しします。
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
                src={"/busi/osaka/sekou.jpg"}
                width={642}
                height={642}
                alt="世耕 石弘"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                世耕 石弘
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                近畿大学　経営戦略本部　本部長
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                奈良県出身。大学を卒業後、1992年近畿日本鉄道株式会社に入社。以降、ホテル事業、海外派遣、広報担当を経て、2007年に近畿大学に奉職。入試広報課長、入学センター事務長、広報部長、総務部長を歴任。2020年4月から広報室を配下に置く経営戦略本部長となり、現在に至る。
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/busi/osaka/maeda.png"}
                width={642}
                height={642}
                alt="前田 啓太"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                前田 啓太
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社BrandingCreation 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                ライブ配信事業、インフルエンサー事業を行う株式会社ライズアースの立ち上げに携わり、COOとして事業を牽引。大手雑誌や有名番組などマスメディアで活躍するインフルエンサーを複数名プロデュース。同社在籍中に株式会社DonutsへのM&Aを経験。その後、インフルエンサープロデュースの経験を活かし、企業向けにマーケティング支援を行うBrandingCreation（ブランディングクリエイション）を立ち上げる。自身の総フォロワーも30万人を超える。
                また、マーケティングノウハウを活かし、自社でも多数のメディアでも取り上げられる韓国カフェiii（アイ）や全国のドンキホーテなどに置かれるはちみーちゅのプロデュース・経営も行っている。
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

          <div className="flex justify-center py-2 gap-10">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/top/sponsor/onedining.jpg"}
                alt={"ワンダイニング"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/osaka/venue_logo.png"}
                alt={"近畿大学"}
                width={"200"}
                height={"200"}
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
                src={"/busi/osaka/higashiosaka.jpg"}
                alt="東大阪市"
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
