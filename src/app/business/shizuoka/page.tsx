import Header from "@/components/busi/Header";
import Fv from "@/components/busi/shizuoka/Fv";
import Venue from "@/components/busi/comingsoon/Venue";
import Committee from "@/components/busi/comingsoon/Committee";
import Schedule from "@/components/busi/comingsoon/Schedule";
import Sponsor from "@/components/busi/comingsoon/Sponsor";
import WinnerBenefit from "@/components/common/WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import Footer from "@/components/busi/Footer";
import Image from "next/image";
import Chairman from "@/components/common/Chairman";
import Ambassador from "@/components/busi/comingsoon/Ambassador";
import Backup from "@/components/busi/comingsoon/Backup";
const contents = [
  {
    title: "開催日",
    content: `2024年4月7日(日)`,
  },
  {
    title: "会場",
    content: `浜松市総合産業展示館`,
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
          <div className="container flex m-auto md:max-w-4xl pb-10 px-5 justify-center">
            <div className="w-1/3 md:w-max">
              <Image
                src={"/busi/shizuoka/venue_.jpg"}
                width={378}
                height={278}
                alt=""
                className=""
              />
            </div>

            <div className="md:pl-10 pl-5  w-2/3 md:w-max">
              <p className="text-left font-bold mt-0 md:mt-5 text-xl">
                浜松市総合産業展示館
              </p>
              <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
                <br />
                〒435-0007
                <br />
                静岡県浜松市中央区流通元町20-2
                <br />
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
                src={"/busi/aichi/kataokachisa.jpg"}
                width={642}
                height={642}
                alt="ちさ社長（片岡千聡）"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                ちさ社長（片岡千聡）
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社マルト輸送センター代表取締役社長
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                唯一無二のアイデアでお客様にコミットしファン化させる事で本質的利益を生み出すコンサルティング物流倉庫業を経営。
                <br />
                音楽業界レジェンドの後藤次利氏、世界的ベーシスト日野jino賢二氏との音楽活動も並行し世の中と他の為に夢と希望を与え「諦めない」世界観を伝える活動も行う
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/busi/shizuoka/sakakibara.jpg"}
                width={642}
                height={642}
                alt="榊原清一"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                榊原清一
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社EMOLVA 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                東京理科大学大学院を卒業後、サイバーエージェントでインフルエンジニアとして勤務し、その後SNSマーケティング業界のパイオニアとして起業。創業10年で500社以上の企業にサービスを提供。自身も合計40万人以上のフォロワーを持ち、10年前からSNSマーケティングを行ってきた豊富なノウハウの持ち主。
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2">
              <Image
                src={"/busi/shizuoka/kawarasaki.jpg"}
                width={642}
                height={642}
                alt="河原崎 幸之介"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
                河原崎 幸之介
              </p>
              <p className="font-bold text-[15px] text-center md:text-left">
                株式会社LEAPH 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                静岡県静岡市生まれ。大学卒業後、都内人材会社、カリフォルニアのIT企業を経て、帰国後株式会社LEAPHを創業。
                クライアントや社会の問題をマーケティングソリューションを軸に解決するサービスを展開中。静岡の素敵な企業を紹介する静岡みんなの広報を運営。
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

          <div className="container my-2 md:my-4  grid grid-cols-1 gap-3 md:gap-5 justify-center max-w-3xl mx-auto p-5">
            <Image
              src={"/top/sponsor/amaterasu.jpg"}
              alt={"アマテラス"}
              width={"200"}
              height={"200"}
              className="rounded-2xl mx-auto"
            />
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
                src={"/busi/shizuoka/hamamatsu.png"}
                alt={"浜松市"}
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
