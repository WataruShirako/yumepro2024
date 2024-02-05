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
import Backup from "@/components/busi/kagoshima/Backup";
import Chairman from "@/components/common/Chairman";
import Ambassador from "@/components/busi/comingsoon/Ambassador";

const BusinessPage = () => {
  return (
    <div className="bg-[#151D22]">
      <Header />
      <main className="busi">
        <Fv />
        <Schedule />
        <Venue />
        <WinnerBenefit />
        <section id="ambassador">
          <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all montserrat">Ambassador</p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              アンバサダー
            </p>
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 mx-auto">
              <Image
                src={"/busi/kagoshima/ambassador.jpg"}
                width={900}
                height={320}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                田口 音羽
              </p>
              <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
                2004年12月27日生まれ。鹿児島県出身。青山学院文学部3年生。
                <br />
                2022年ABEMAバラエティー番組「今日、好きになりました。小夏編」、2023年NHK
                BS1ドラマ「ケーキの切れない非行少年たち」、2023年映画「ミンナのウタ」などに出演。
                <br />
                趣味はゲーム、特技はTikTokのダンスを早く覚えること。
              </p>
            </div>
          </div>
        </section>
        <Chairman />
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
