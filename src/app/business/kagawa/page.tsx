import Header from "@/components/busi/Header";
import Fv from "@/components/busi/kagawa/Fv";
import Venue from "@/components/busi/kagawa/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/kagawa/Schedule";
import Sponsor from "@/components/busi/kagawa/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";
import Chairman from "@/components/common/Chairman";
import Backup from "@/components/busi/kagawa/Backup";
import ComingSoon from "@/components/common/ComingSoon";

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
              司会
            </p>
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <ComingSoon />
            {/** 
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
          */}
          </div>
        </section>
        <Committee />

        {/*-----chedule -----*/}
        <Schedule />

        {/*-----winnerBenefit----- */}

        <WinnerBenefit />

        {/*-----Sponsor -----*/}
        <Sponsor />
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
