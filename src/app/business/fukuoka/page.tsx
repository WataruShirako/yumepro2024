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
          <h2 className="sectionTitle text-center items-center">
            <div className="relative w-max montserrat">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-0 md:-top-8 md:-left-1 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all">
                CHAIRMAN
                <br />
                and
                <br />
                AMBASSADOR
              </p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              司会兼アンバサダー
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
        </section>
        <Sponsor />
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
