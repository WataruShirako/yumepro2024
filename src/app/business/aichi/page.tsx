import Header from "@/components/busi/Header";
import Fv from "@/components/busi/aichi/Fv";
import Venue from "@/components/busi/comingsoon/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/comingsoon/Schedule";
import Sponsor from "@/components/busi/comingsoon/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";
import Chairman from "@/components/common/Chairman";
import Backup from "@/components/busi/comingsoon/Backup";
import Ambassador from "@/components/busi/comingsoon/Ambassador";
import ComingSoon from "@/components/common/ComingSoon";
const contents = [
  {
    title: "開催日",
    content: `2024年3月31日(日)`,
  },
  {
    title: "会場",
    content: `SLOW ART CENTER NAGOYA<br /><br />
    〒460-0003 <br />愛知県名古屋市中区錦３丁目１６０２`,
  },
  {
    title: "発表時間",
    content: `プレゼン5分、質疑応答3分`,
  },
];
const BusinessPage = () => {
  return (
    <div className="bg-[#151D22]">
      <Header />
      <main className="busi">
        <Fv />
        <section className="schedule">
          <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all montserrat">SCHEDULE</p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              開催日程
            </p>
          </h2>

          <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
            {contents.map((item, index) => (
              <div
                key={index}
                className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-center justify-between"
              >
                <p className={"w-[100px] md:w-1/5"}>
                  <span className={"px-2 py-1 text-white text-base"}>
                    {item.title}
                  </span>
                </p>
                <div className={"w-[75%] text-base"}>
                  <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="venue">
          <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
            <div className="relative w-max">
              <Image
                src={"/busi/business_title_circle.svg"}
                width={128}
                height={128}
                alt=""
                className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
              />
              <p className="relative break-all montserrat">Venue</p>
            </div>
            <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
              開催地
            </p>
          </h2>
          <div className="container sm:flex m-auto md:max-w-4xl pb-10 px-5 justify-center">
            <div className="sm:w-1/3">
              <Image
                src={"/busi/aichi/venue1.jpg"}
                width={278}
                height={278}
                alt=""
                className="mx-auto"
              />
            </div>

            <div className="sm:pl-10   sm:w-2/3 ">
              <p className="text-left font-bold mt-2 md:mt-5 text-xl">
                SLOW ART CENTER NAGOYA
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                <br />
                「SLOW ART CENTER
                NAGOYA」は、名古屋市旧教育館跡地に2024年3月開業する暫定活用施設です。
                文化的価値の高い栄地区で、スローアート活動を通じ、人と人、人と環境の新たな関係性を作り、「個人×地域×地球のWell-being」を生み出す市民コミュニティの形成拠点を目的としています。
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
        <Ambassador />
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
