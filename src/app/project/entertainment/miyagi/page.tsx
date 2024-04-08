import "../../../globals.css";
import "../../../entt.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WinnerBenefit from "@/components/common/ennt_WinnerBenefit";
import RegionalTournament from "@/components/common/RegionalTournament";
import ToTop from "@/components/entt/Totop";
import Fv from "@/components/busi/miyagi/Fv";
import ComingSoon from "@/components/common/ComingSoon";

const Home = () => {
  // 公開済みのコンテスト エンタメコンテスト
  const enttContests = [
    {
      id: 1,
      name: "夢フォトオーディション",
      path: "/",
    },
  ];
  // 公開済みのコンテスト スター誕生オーディション
  const enttStar = [
    {
      // id: 1,
      // name: '夢フォトオーディション',
      // Path: '/',
    },
  ];
  const contents = [
    {
      title: "応募締切",
      content: `2024年3月1日(金) `,
    },
    {
      title: "書類審査",
      content: `2024年3月2日(土)~3月9日(土) `,
    },
    {
      title: "予選出場者決定",
      content: `2024年3月10日(日)`,
    },
    {
      title: "予選開催日",
      content: `2024年3月24日(日) `,
    },
    {
      title: "会場",
      content: `イオンモール新利府 南館 1階 ライブスクエア`,
    },

    {
      title: "審査方法",
      content: `対面審査（5分間を基準とするパフォーマンス）`,
    },
  ];

  return (
    <>
      <Header />
      <main id="" className={"entt"}>
        <Fv />
        <section id="schedule" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image src={"/entt/schedule.svg"} alt="" width={15} height={20} />
              Schedule
            </span>
            開催日程
          </h2>
          <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
            {contents.map((item, index) => (
              <div
                key={index}
                className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-center justify-between"
              >
                <p className={"w-[100px] md:w-1/5"}>
                  <span className={"px-2 py-1 text-base"}>{item.title}</span>
                </p>
                <div className={"w-[75%] text-base"}>
                  <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="schedule" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image src={"/entt/schedule.svg"} alt="" width={15} height={20} />
              Timeline
            </span>
            予選当日の流れ
          </h2>
          <div className="container mx-auto px-5 md:px-0 md:max-w-md">
            12：30～13：00　開場・登壇者受付
            <br />
            13：00～13：05　開会
            <br />
            13：05～13：10　挨拶　利府町長
            <br />
            13：10～13：20　全体概要＆ルール説明・審査員の紹介
            <br />
            13：20～14：10　利府チャレンジアワード
            <br />
            14：10～15：00　学生ピッチ甲子園
            <br />
            15：00～15：10　休憩・スター誕生オーディション準備
            <br />
            15：10～16：00　スター誕生オーディション
            <br />
            16：00～16：15　審査員講評・総評
            <br />
            16：15～16：30　審査結果発表・表彰
            <br />
            16：30～16：50　記念撮影
            <br />
            16：50～16：55　町長総評
            <br />
            16：55～17：00　閉会
            <br />
          </div>
        </section>
        <section id="venue">
          <h2 className={`secTitle`}>
            <span className={`flex gap-2 justify-center Montserrat`}>
              <Image src={"/entt/venue.svg"} alt="" width={15} height={20} />
              Venue
            </span>
            開催地
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
                ・南館 1階 ライブスクエア
                <br />
                〒981-0114
                <br />
                宮城県宮城郡利府町新中道3丁目1-1
              </p>
            </div>
          </div>
        </section>
        <WinnerBenefit />
        <section id="ambassador" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              AMBASSADOR
            </span>
            アンバサダー
          </h2>
          <ComingSoon />
        </section>
        <section id="" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Chairman
            </span>
            司会
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
            <div className="w-1/2 mx-auto">
              <Image
                src={"/busi/miyagi/asano_takehumi.jpg"}
                width={900}
                height={320}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
                アサノタケフミ
              </p>
              <p className="text-[15px] mx-auto md:text-left md:mx-0 pb-10">
                2023年6月に利府町観光大使に就任。
                <br />
                アーティストや劇団公演への楽曲提供、TVCMソング、PRソング、ラジオジングル制作作品歌唱など幅広く活動。
                <br />
                2007年からラジオ局・ベイウェーブにて　平日お昼の顔として番組を担当。年間300日程度生放送担当。
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
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
                2002年7月23日生まれ。東京都出身。青山学院文学部3年生。
                <br />
                <br />
                MISS OF MISS CAMPUS QUEEN CONTEST 2024 GP
                <br />
                ミスミスター青山コンテスト2023 GP
                <br />
                女子高生ミスコン2020 GP
                <br />
                株式会社Queencard 代表取締役
                <br />
                全国学生ピッチ甲子園 実行委員長
              </p>
            </div>
          </div>
        </section>

        <section id="committee" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Committee
            </span>
            審査委員会
          </h2>
          <div className="md:grid grid-cols-2 md:max-w-6xl mx-auto">
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/miyagi/tiba_daiki.jpg"}
                  width={642}
                  height={642}
                  alt="千葉 大貴"
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
                  1976年仙台市生まれ。
                  システム会社を２年で退社後、米国放浪を経て2002年に帰国。
                  食品を中心としたECサイトを開設し、数々の賞を受賞する。
                  2011年には大手企業と連携し、東日本大震災の復興支援を実施。
                  一次産業の再生や経営者の育成など数々の地方創生プロジェクトを実施。
                  2017年には仙台市秋保温泉でまちづくり会社を設立。
                  古民家カフェの経営や観光地再生に取り組む。2022年からは農林水産省などの支援事業で審査委員、統括プロデューサーなどを務める。
                  現在は全国で魅力的な商品開発や商業施設のプロデュースなど幅広く活躍している。
                </div>
              </div>
            </div>
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/miyagi/monou.jpg"}
                  width={642}
                  height={642}
                  alt="桃生 和成"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left">
                <p className="mt-5 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  桃生 和成
                </p>
                <p className="font-bold text-[15px] text-center ">
                  一般社団法人Granny Rideto代表理事
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  1982年仙台市生まれ、いわき市育ち。
                  宮城大学大学院事業構想学科空間デザイン領域博士前期課程修了。
                  2008年、NPO法人せんだい・みやぎNPOセンター入職。多賀城市市民活動サポートセンター長を務めたのち、2016年退職。
                  同年、一般社団法人Granny Ridetoを立ち上げ。
                  利府町まち・ひと・しごと創造ステーションtsumikiディレクター（2016年～）、シェア型複合施設THE6ディレクター（2016年～）、
                  東北文化学園大学非常勤講師（2018年～）。
                  『復興から学ぶ市民参加型のまちづくりー中間支援とネットワーキングー』（創成社・2018年）共著ほか。
                  東北の日常をおもしろく、をテーマにしたつれづれ団の団長や衣食住ユニットすまいとしても活動。
                </div>
              </div>
            </div>
            <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
              <div className="">
                <Image
                  src={"/busi/miyagi/fukudome_hideki.jpg"}
                  width={642}
                  height={642}
                  alt="福留 秀基"
                  className="w-60  md:w-[320px]  object-cover mx-auto"
                />
              </div>
              <div className="itemText px-5 text-left ">
                <p className="mt-5 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                  福留 秀基
                </p>
                <p className="font-bold text-[15px] text-center ">
                  スパークル株式会社 代表取締役
                </p>
                <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                  <br />
                  東北大学大学院通信工学専攻修了後、株式会社シグマクシスにてデジタル戦略コンサルタントとして飲料メーカー・金融業・専門商社・小売業などのクライアントへの新規事業開発・PMO
                  案件・ビジネスデューデリジェンス・データ解析に従事後、スパークルに参画、現在代表取締役。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sponsor" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Sponsor
            </span>
            スポンサー
          </h2>
          <div className="container my-2 md:my-4  grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 justify-center max-w-3xl mx-auto p-5">
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
        <section id="backup" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Backup
            </span>
            後援
          </h2>
          <div className="flex justify-center py-2 gap-5 p-5">
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/miyagi/rihutyo.png"}
                alt={""}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/miyagi/tumiki.png"}
                alt={""}
                width={"200"}
                height={"200"}
              />
            </div>
          </div>
        </section>
        <section id="regional_tournament" className={"mt-10"}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/regional_tournament.svg"}
                alt=""
                width={15}
                height={20}
              />
              Regional tournament
            </span>
            地方大会
          </h2>
          <RegionalTournament />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
