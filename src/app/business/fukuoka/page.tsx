import Header from "@/components/busi/Header";
import Fv from "@/components/busi/fukuoka/Fv";
import Venue from "@/components/busi/fukuoka/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/fukuoka/Schedule";
import Sponsor from "@/components/busi/comingsoon/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";
import Chairman from "@/components/common/Chairman";

const BusinessPage = () => {
  return (
    <div className="bg-[#151D22]">
      <Header />
      <main className="busi">
        <Fv />
        {/*-----Venue-----*/}
        <Venue />
        {/*-----Committee-----*/}
        <section className=" my-20 md:my-40">
          <h2 className="sectionTitle text-center items-center">
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
              総合司会
            </p>
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
        <Committee />

        {/*-----chedule -----*/}
        <Schedule />

        {/*-----winnerBenefit----- */}

        <WinnerBenefit />

        {/*-----Sponsor -----*/}
        <Sponsor />

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
