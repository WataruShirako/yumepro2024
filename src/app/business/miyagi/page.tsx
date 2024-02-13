import Header from "@/components/busi/Header";
import Fv from "@/components/busi/miyagi/Fv";
import Venue from "@/components/busi/comingsoon/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/comingsoon/Schedule";
import Sponsor from "@/components/busi/comingsoon/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";
import Chairman from "@/components/busi/comingsoon/Chairman";
import Ambassador from "@/components/busi/comingsoon/Ambassador";
const contents = [
  {
    title: "開催日",
    content: `2024年3月24日(日)`,
  },
  {
    title: "会場",
    content: `イオンモール新利府`,
  },
  {
    title: "発表時間",
    content: `プレゼン5分、質疑応答3分`,
  },
];
const lists = [
  {
    id: 1,
    name: " 早川周作",
    descri: `琉球アスティーダ`,
    descri2: "会長",
    src: "/busi/okinawa/committee01.webp",
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
          <div className="container flex m-auto md:max-w-4xl pb-10 px-5 justify-center">
            <div className="w-1/3 md:w-max">
              <Image
                src={"/busi/miyagi/ieon.png"}
                width={278}
                height={278}
                alt=""
                className=""
              />
            </div>

            <div className="md:pl-10 pl-5  w-2/3 md:w-max">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                イオンモール新利府
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                <br />
                ・南館
                <br />
                〒981-0114
                <br />
                宮城県宮城郡利府町新中道3丁目1-1
                <br />
                <br />
                ・北館
                <br />
                〒981-0112
                <br />
                宮城県宮城郡利府町利府字新屋田前22
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
        <section className="committee my-20 md:my-40">
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
                  src={"/busi/miyagi/fukudome_hideki.jpg"}
                  width={642}
                  height={642}
                  alt=""
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left ">
                <p className="mt-5 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  福留 秀基
                </p>
                <p className="font-bold text-[15px] text-center ">
                  <br className="hidden md:block" />
                  スパークル株式会社 代表取締役
                  <br className="hidden md:block" />
                  <br className="hidden md:block" />
                  <br className="hidden md:block" />
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  東北大学大学院通信工学専攻修了後、株式会社シグマクシスにてデジタル戦略コンサルタントとして飲料メーカー・金融業・専門商社・小売業などのクライアントへの新規事業開発・PMO
                  案件・ビジネスデューデリジェンス・データ解析に従事後、スパークルに参画、現在代表取締役。
                </div>
              </div>
            </div>
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/miyagi/tiba_daiki.jpg"}
                  width={642}
                  height={642}
                  alt="島川敏明"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left">
                <p className="mt-5 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  千葉 大貴
                </p>
                <p className="font-bold text-[15px] text-center ">
                  有限会社マイティー千葉重 代表取締役
                  <br />
                  株式会社アキウツーリズムファクトリー 代表取締役
                  <br />
                  一般社団法人東北絆テーブル 代表理事
                  <br />
                  株式会社Inter Local Partners 取締役 等
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  1976年仙台市生まれ。システム会社を２年で退社後、米国放浪を経て2002年に帰国。食品を中心としたECサイトを開設し、数々の賞を受賞する。2011年には大手企業と連携し、東日本大震災の復興支援を実施。一次産業の再生や経営者の育成など数々の地方創生プロジェクトを実施。2017年には仙台市秋保温泉でまちづくり会社を設立。古民家カフェの経営や観光地再生に取り組む。2022年からは農林水産省などの支援事業で審査委員、統括プロデューサーなどを務める。現在は全国で魅力的な商品開発や商業施設のプロデュースなど幅広く活躍している。
                </div>
              </div>
            </div>
          </div>
        </section>
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
