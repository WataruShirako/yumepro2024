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
        <Ambassador />
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
          <div className="md:grid grid-cols-2 md:max-w-6xl mx-auto">
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
                  src={"/busi/tokyo/yamamoto.jpg"}
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
                  アリババマーケティング（現・グローバルパートナーズ）創業者。
                  20代にして光通信取締役、クレイフィッシュ（現・e-まちタウン）代表取締役就任し、ユニバーサルソリューションシステムズ（現・INEST、JASDAQ上場）社長、
                  光通信常務取締役などを務めた。その後アリババを知り、今後の日本経済や中小企業にとって非常に魅力的で有益なサービスであると確信。
                  ソフトバンクの孫正義、光通信の重田康光を何年も説得し、2009年、アリババマーケティングを発起人として設立し、社長に就任。
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

          <div className="flex justify-center py-10">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/top/sponsor/onelilive.jpg"}
                alt={""}
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
