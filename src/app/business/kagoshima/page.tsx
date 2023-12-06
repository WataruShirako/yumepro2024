import Header from "@/components/busi/Header";
import Fv from "@/components/busi/kagoshima/Fv";
import Venue from "@/components/busi/kagoshima/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/kagoshima/Schedule";
import Sponsor from "@/components/busi/kagoshima/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";

const BusinessPage = () => {
  return (
    <div className="bg-[#151D22]">
      <Header />
      <main className="busi">
        <Fv />
        {/*-----Venue-----*/}
        <Venue />
        {/*-----Committee-----*/}
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
