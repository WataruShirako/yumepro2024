import Header from "@/components/busi/Header";
import Fv from "@/components/busi/ishikawa/Fv";
import Venue from "@/components/busi/ishikawa/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/ishikawa/Schedule";
import Sponsor from "@/components/busi/comingsoon/Sponsor";
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
        <section className="winnerBenefit">
          <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all montserrat ">
                WINNER <br className="sm:hidden" />
                BENEFIT
              </p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl ">
              優勝特典
            </p>
          </h2>
          <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
            <p className="py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] text-lg text-center">
              東京本線出場権
              <br />
              <br />
              メンターからの東京本戦まで事業計画・ピッチ資料アドバイス
            </p>
          </div>
          <WinnerBenefit />
        </section>

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
