import Header from "@/components/busi/Header";
import Fv from "@/components/busi/osaka/Fv";
import Venue from "@/components/busi/osaka/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/osaka/Schedule";
import Sponsor from "@/components/busi/comingsoon/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";
import Chairman from "@/components/common/Chairman";
import Ambassador from "@/components/busi/comingsoon/Ambassador";
import Backup from "@/components/busi/comingsoon/Backup";

const BusinessPage = () => {
  return (
    <div className="bg-[#151D22]">
      <Header />
      <main className="busi">
        <Fv />
        <Schedule />
        <Venue />
        <WinnerBenefit />

        <Chairman />
        <section id="committee" className=" my-20 md:my-40">
          <h2 className="sectionTitle text-center items-center Montserrat">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all montserrat ">Committee</p>
            </div>
            <p className="relative mt-2 md:mt-6 mb-20 md:text-[32px] text-2xl">
              審査委員会
            </p>
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/busi/osaka/takahashi.jpg"}
                width={642}
                height={642}
                alt="髙橋 淳"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                髙橋 淳
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社１＆Ｄホールディングス　代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                外食チェーン「ワンカルビ」「あぶりや」「きんのぶた」を中心に関西、九州、関東に１３０店舗、食肉小売「ダイリキ」を関西、中京、中四国に４９店舗、計１７９店舗をチェーン展開。株式会社ワン・ダイニング、ダイリキ株式会社両社の代表取締役社長を兼務。
              </div>
            </div>
          </div>
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
                src={"/busi/osaka/izumisawa.png"}
                width={642}
                height={642}
                alt="泉澤 恵一朗"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                泉澤 恵一朗
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社デザイナー 代表取締役
                <br />
                iU情報経営イノベーション専門職大学客員
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                27歳という若さで2022年、2023年、西日本ベンチャー100選出、MYCEOAWARD
                best100、WOMAN’s
                VALUEAWARD優秀賞受賞とキャリア領域で注目されている若手実業家。
                他にも新R25・日刊SPA！掲載、フジテレビ「めざまし8」、朝日放送「newsおかえり」、AbemaPrime水曜コメンテーター、NewsPicks「THEUP
                DATE」、年収チャンネル出演など、数々のメディアにも取り上げられている。
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
                高校卒業後、看護師を目指すために摂南大学看護学部に入学。大学2年時に経営者の道に目標を変更し、大阪経済大学経営学部に編入。在学中にインフルエンサーを複数名プロデュース。
                その後、インフルエンサープロデュースの経験を活かし、企業向けにマーケティング支援を行うBrandingCreation（ブランディングクリエイション）を立ち上げる。自身の総フォロワーも30万人を超える。
                また、マーケティングノウハウを活かし、自社でも多数のメディアでも取り上げられる韓国カフェiii（アイ）や全国のドンキホーテなどに置かれるはちみーちゅのプロデュース・経営も行っている。
              </div>
            </div>
          </div>
        </section>
        <section className={"my-20 md:my-40"}>
          <h2 className="sectionTitle text-center items-center Montserrat">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all montserrat">Sponsor</p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              スポンサー企業
            </p>
          </h2>

          <div className="container my-2 md:my-4  grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 justify-center max-w-3xl mx-auto p-5">
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/onedining.jpg"}
                alt={"ワンダイニング"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/busi/osaka/venue_logo.png"}
                alt={"近畿大学"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/amaterasu.jpg"}
                alt={"アマテラス"}
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
        <section className={"my-20"}>
          <h2 className="sectionTitle text-center items-center Montserrat">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all montserrat">Backup</p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              後援
            </p>
          </h2>
          {/*<div className="container grid grid-cols-1 md:grid-cols-1 gap-10 px-4 mt-10 mx-auto md:max-w-5xl pb-10">*/}
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
        {/*-----RegionalTournament -----*/}
        <section id="regional_tournament" className={"my-20 md:my-40"}>
          <h2 className="sectionTitle text-center items-center Montserrat">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 left-3 md:-top-8 md:left-3 w-16 h-16 md:w-32 md:h-32 lg:-left-16"
              />
              <p className="relative break-all montserrat">
                REGIONAL <br className="lg:hidden" />
                TOURNAMENT
              </p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              地方大会
            </p>
          </h2>
          <RegionalTournament />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessPage;
