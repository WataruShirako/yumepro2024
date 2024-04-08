import Header from "@/components/busi/Header";
import Fv from "@/components/busi/tokyo/Fv";
import Venue from "@/components/busi/tokyo/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/tokyo/Schedule";
import Sponsor from "@/components/busi/comingsoon/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";
import Chairman from "@/components/busi/comingsoon/Chairman";
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

        <section className=" my-20 md:my-40">
          <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
            <div className="relative w-max montserrat">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all">CHAIRMAN</p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              司会
            </p>
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 mx-auto">
              <Image
                src={"/busi/tokyo/west.png"}
                width={900}
                height={320}
                alt="ウエストランド"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                ウエストランド
              </p>
              <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
                ウエストランドは、タイタンに所属する井口浩之と河本太からなる日本のお笑いコンビ。
                <br />
                M-1グランプリ2022王者。
                <br />
                2人とも岡山県津山市出身であり、2021年6月1日より、つやま産業支援センター特命大使。
                津山ふるさと大使。
                <br />
              </p>
            </div>
          </div>
        </section>
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
          <div className="md:grid grid-cols-2 md:max-w-6xl mx-auto">
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/tokyo/minowa.png"}
                  width={642}
                  height={642}
                  alt="箕輪 厚介"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left ">
                <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  箕輪 厚介
                </p>

                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  日本の編集者、実業家、YouTuber。 血液型はB型。
                  幻冬舎で編集者として勤務。 株式会社エクソダス取締役。
                  CAMPFIREチェアマン。合同会社波の上商店代表。
                  アーティスト「箕輪☆狂介」の出版プロデューサー。
                  オンラインサロン「箕輪編集室」を主宰し、「堀江貴文イノベーション大学校」で特任教授を務める。
                </div>
              </div>
            </div>
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/adviser.jpg"}
                  width={642}
                  height={642}
                  alt="丸尾浩一"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left ">
                <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  丸尾浩一
                </p>
                <p className="font-bold text-[15px] text-center ">
                  株式会社Major7th　代表取締役
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  大和証券株式会社に38年在籍し、専務取締役などの役員を12年間歴任。
                  主幹事として株式会社メルカリやラクスル株式会社等、数々の大型スタートアップIPOを実現した他、経営破綻した日本航空株式会社の再上場や、楽天グループ株式会社、KDDI
                  株式会社等、上場企業の資金調達にも携わる。
                  現在、起業家支援サービスを提供する株式会社Major7thの代表取締役を務めながら、上場会社を含む複数社の社外役員等を兼務。
                </div>
              </div>
            </div>
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/funabiki.jpg"}
                  width={642}
                  height={642}
                  alt="舟引美咲"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left ">
                <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  舟引美咲
                </p>
                <p className="font-bold text-[15px] text-center ">
                  東京大学大学院 Graduate fellow
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  慶応義塾大学法学部政治学科卒業後、テレビ局のアナウンサーやニュースキャスターの経験を積んだ後、University
                  Of The Arts London（UAL）に留学。
                  その際、福島復興支援のチャリティープロジェクトを英国貴族院議員らの協力を経て、アジア人初となる英国国会議事堂にてイベント開催した経験を経て、帰国後はLuxury業界で主にブランド・マーケティングやCSRに従事。現在は東京大学大学院にてLuxuryとCSRの研究を行っている。
                </div>
              </div>
            </div>
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/tokyo/yamamoto1.jpg"}
                  width={642}
                  height={642}
                  alt="山本 康二"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left ">
                <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  山本 康二
                </p>
                <p className="font-bold text-[15px] text-center ">
                  グローバルパートナーズ株式会社 代表取締役
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  28歳で東証一部上場企業光通信の取締役になり、1万人の組織、累計1兆円の売上高を構築。上場企業の社長を複数社歴任後、光通信の常務取締役を務めた。
                  ソフトバンクの孫正義、光通信の重田康光、アリババのジャックマーに出資され
                  2009年、アリババマーケティングを発起人として設立し、社長に就任。その後同社をMBOしグローバルパートナーズとする。
                </div>
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

          <div className="flex justify-center py-10 gap-5">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/top/sponsor/onelilive.jpg"}
                alt={"ワンリーライブ"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md"}
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
        <Backup />

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
