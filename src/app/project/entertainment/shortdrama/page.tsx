import "../../../globals.css";
import "../../../entt.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Prize from "@/components/entt/Prize";
import About from "@/components/entt/About";
import Flow from "@/components/entt/Flow";
import Committee from "@/components/entt/Committee";
import Chairman from "@/components/entt/Chairman";
import Comingsoon from "@/components/entt/Comingsoon";
import ToTop from "@/components/entt/Totop";
import Instagram from "@/components/entt/Instagram";
import News from "@/components/top/News";
import Sns from "@/components/entt/Sns";
import Entry from "@/components/entt/Entry";
import Ambassador from "@/components/entt/Ambassador";
import Adviser from "@/components/entt/Adviser";
import Department from "@/components/entt/Department";
import Cta from "@/components/top/Cta";
import Category from "@/components/top/Category";
import Link2023 from "@/components/top/Link2023";
import ComingSoon from "@/components/entt/Comingsoon";
import { Coming_Soon } from "next/font/google";
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

  // 賞金・スポンサー賞
  const prize = {
    title: "スポンサー賞",
    sponsor: "/entt/sponsor/min_sponsor/min_sakura.jpg",
    src: "/entt/prizes/prize_sponsor_spa_100_1.jpg",
    alt: "text",
    SPsrc: "/entt/prizes/sp_prize_sponsor_spa_100_1.jpg",
  };

  //開催概要
  const about = {
    sched: `
      2023年8月20日〜
    `,
    status1: `
      TikTokにて「#ドリームショートドラマ2024」を付けて投稿した中から5名が決勝進出。<br />
      
    `,

    status2: "①テーマに沿った作品か<br />②オリジナリティ<br />③技術面",
    status3:
      "2024年4月27日 10:00~18:00<br /><br />幕張メッセ<br />〒261-8550 千葉県千葉市美浜区中瀬2丁目1",
  };

  // 審査委員
  const committee = [
    {
      id: 1,
      name: "大橋孝史",
      pro: "モバコン株式会社代表取締役 プロデューサー/監督",
      text: "1974年7月27日生まれ。21歳の時に実写映画「ろくでなしBLUSE」プロデューサーデビューし、これまでに数々の映画・ドラマ・アニメ・音楽などエンタテインメント作品をプロデュース。近年は地方創生・インバウンドを目的とした、ふるさと映画祭を開催し、新しい日本のエンタテインメント業界を牽引している。",
      src: "/shortdrama/ohashi.jpg",
      hp: "",
      twitter: "",
      insta: "",
    },
    {
      id: 2,
      name: "齊藤進之介",
      pro: "映画感想TikTokクリエイター 映像作家 専門学校講師",
      text: "1988年、京都府生まれ。映画感想TikTokクリエイター。映像作家、専門学校講師。京都芸術大学映画学科卒業後、東映京都撮影所にて時代劇ドラマ『水戸黄門』助監督として業界入り。2014年に拠点を東京へ移し、映画『HiGH&LOW』シリーズ等の助監督を経て18年独立。19年夏よりTikTokで活動開始。映画レビュージャンルを開拓し人気を集める。現在は監督業を始め、ジョニー・デップらハリウッド俳優へのインタビューも行う。TikTok TOHO Film Festivalで三池崇史監督らと審査員を務める。22年、株式会社MEW Creatorsを設立。著書に『シネマライフハック 人生の悩みに５０の映画で答えてみた』。",
      src: "/shortdrama/saito.jpg",
      hp: "",
      twitter: "",
      insta: "",
    },
    {
      id: 3,
      name: "横田未来",
      pro: "インフルエンサー",
      text: "2022 年 4 月に発表された「10 代に人気な女性インフルエンサー」ランキングで 4 位に ランクイン。2023 年 、日本テレビ Z ドラマ第 4 弾「沼る。港区女子高生」に出演、「今田耕 司のネタバレ MTG」出演、映画「貧困女子」主演するなど、女優/タレントとしても活躍中。SNS 総フォロワー数が 120 万人を超え、Z 世代女の子に大人気!!",
      src: "/shortdrama/yokota.jpg",
      hp: "",
      twitter: "",
      insta: "",
    },
  ];

  // 総合司会
  const chairman = {
    id: 1,
    name: "名前 名前",
    pro: "職業",
    text: "香川県在住の写真家。うつろう季節、光を大切におもにフィルムカメラにて撮影している。地元、香川県で撮影した写真を中心にSNSで作品を発表する他、写真展の開催、CDジャケットや書籍のカバー、広告写真などを手掛ける。2019年3月、初の写真集『さよならは青色』（KADOKAWA）を出版。",
    src: "/entt/committee/iwakura_shiori.jpg",
  };

  return (
    <>
      <Header />
      <main id="shortdrama" className={"entt"}>
        <section id="fv" className={"pt-0"}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={"/shortdrama/fv_pc.jpg"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/shortdrama/fv_sp.jpg"}
              alt="text"
              width={750}
              height={1370}
              priority
            />
          </div>
        </section>
        <section id="intro">
          <div className="container flex m-auto items-center justify-between flex-wrap flex-col lg:flex-row gap-4 max-w-6xl">
            <div className="flex-1 px-[4%]">
              <h3>
                <p className={"font-bold text-center"}>
                  夢プロショートドラマオーディション2024テーマ
                </p>
                <Image
                  className="mx-auto py-5"
                  src={"/shortdrama/yume.png"}
                  alt="夢"
                  width={250}
                  height={250}
                  priority
                />
              </h3>

              <p className={"mt-4 md:mt-8"}>
                「夢プロショートドラマオーディション」はショート動画を通じて、世界に羽ばたく才能を秘めたクリエイターを発掘するオーディションです。
                <br />
                業界をけん引するにふさわしい「技術と感性」を身につけた次世代エースを発掘すべくSNS審査・豪華審査員による審査などの選考によりグランプリを決定します。
              </p>
            </div>

            <div className="flex-1 justify-self-center conteiner max-x-[92%]">
              <div className="imgWrap introImgWrap max-w-[92%] m-auto">
                <Image
                  className="img introImg"
                  src={"/shortdrama/intro.jpg"}
                  alt="text"
                  width={450}
                  height={357}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <div className="svg__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"svg__content top"}
            viewBox="0 0 1366 100"
          >
            <path
              id="パス_285"
              data-name="パス 285"
              d="M0,120H1366V60s-154.1-40-324.849-40S683,60,683,60s-208.446,40-379.2,40S0,60,0,60Z"
              transform="translate(0 -20)"
              fill="#fff"
            />
          </svg>
        </div>
        <section id="prize" className={"bg-white"}>
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              <Image
                src={"/entt/yumephoto/icons/prize.svg"}
                alt=""
                width={15}
                height={20}
              />
              Prize
            </span>

            <p dangerouslySetInnerHTML={{ __html: `${prize.title}` }} />
            {/** 
            <div className={"mt-2 flex items-center justify-center gap-2"}>
              <p className={"text-xs"}>スポンサー企業</p>
              <Image
                src={prize.sponsor}
                alt={prize.alt}
                width={70}
                height={17}
              />
            </div>
            */}
          </h2>
          <ComingSoon />
          {/** 
          <div className="text-xl text-center font-bold">
            ・2024年公開！映画「夢叶えるプロジェクト（仮称）」出演
            <br />
            <br />
            ・高級スパ・サウナ招待券100万円
            <br />
            <br />
            ・銀座駅コンコース内サイネージ掲載
            <br />
            <br />
            ・その他スポンサー賞
            <br />
          </div>
          
        <div className="container m-auto max-w-[92%] lg:max-w-4xl">
          <Image
            className={"img prizeImg hidden md:block"}
            src={prize.src}
            alt={prize.alt}
            width={850}
            height={262}
            priority
          />
          <Image
            className={"img prizeImg md:hidden"}
            src={prize.SPsrc}
            alt={prize.alt}
            width={670}
            height={524}
            priority
          />
        </div>
        
        <p className={"text-center text-2xl my-6 md:my-12 Montserrat"}>
          and more ...
        </p>
        */}
        </section>
        <div className="svg__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"svg__content under"}
            viewBox="0 0 1366 100"
          >
            <path
              className={"w-full"}
              id="パス_286"
              data-name="パス 286"
              d="M1366,0H0V60s154.1,40,324.849,40S683,60,683,60s208.446-40,379.2-40S1366,60,1366,60Z"
              fill="#fff"
            />
          </svg>
        </div>

        <section id="about" className={""}>
          <h2 className={`secTitle`}>
            <span className={`flex gap-2 justify-center Montserrat`}>
              <Image
                src={"/entt/yumephoto/icons/about.svg"}
                alt=""
                width={15}
                height={20}
              />
              About
            </span>
            開催概要
          </h2>
          <div className="container m-auto max-w-[92%] lg:max-w-2xl">
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  開催期間
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.sched}` }} />
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  応募方法
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.status1}` }} />
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  審査基準
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.status2}` }} />
              </div>
            </div>
            <div className="list flex py-5 md:py-8 border-solid border-y border-[#485757] items-center justify-between">
              <p
                className={
                  "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
                }
              >
                <span
                  className={"px-2 py-1 bg-[#888888] text-white inline-block"}
                >
                  授賞式
                </span>
              </p>
              <div
                className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
              >
                <p dangerouslySetInnerHTML={{ __html: `${about.status3}` }} />
              </div>
            </div>
          </div>
        </section>

        <section id="committee" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 justify-center"}>
              <Image
                src={"/entt/yumephoto/icons/committee.svg"}
                alt=""
                width={15}
                height={20}
              />
              Committee
            </span>
            審査委員
          </h2>

          <div className="container m-auto max-w-[92%] lg:max-w-5xl">
            {committee.map((committee: any, index: any) => (
              <div
                className="list flex flex-col md:flex-row justify-between items-start mt-12 first:mt-0"
                key={index}
              >
                <Image
                  className={
                    "prizeImg mx-auto md:ml-0 w-52 md:w-[30%] rounded-full"
                  }
                  src={committee.src}
                  alt={committee.name}
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <div
                  className={
                    "m-auto mt-4 md:mt-0 md:mr-0 md:w-[60%] max-w-full"
                  }
                >
                  <h4
                    className={
                      "text-2xl pb-4 md:pb-6 text-center md:text-left font-semibold"
                    }
                  >
                    {committee.name}
                  </h4>
                  <h5
                    className={"text-lg pb-4 md:pb-6 text-center md:text-left"}
                  >
                    {committee.pro}
                  </h5>
                  <p className={"text-sm leading-loose pb-4 md:pb-6"}>
                    {committee.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*<Entry />*/}
        {/**<Flow />*/}
        {/** 
        <section className="container m-auto max-w-[92%] md:max-w-5xl">
          <h2 className={"bg-[#485757] px-1 w-full text-[#EFEFEF] text-center"}>
            個人情報の取り扱い
          </h2>
          <p className={"mt-4 text-sm"}>
            本企画の主催は、株式会社クレドインターナショナルが行い、運営業務は株式会社クレドインターナショナルが行います。
            <br />
            本コンテストで取得した個人情報は厳重に管理され、コンテストに関するご連絡、賞品の発送、応募作品の管理、受賞作品の展示などコンテストの実施・運営・宣伝広報活動およびこれらに付随する目的並びに特定の個人を識別できない統計資料を作成する目的、このほか主催者のPR活動で応募作品を使用する際に応募時のInstagramアカウント名を合わせて表示する目的、並びに個人情報保護法等の法令において認められた範囲でのみ利用し、それ以外の目的では利用いたしません。データ（Exif情報など）は統計的に処理され、個人が特定できないように加工して分析し、協力企業など第三者に公開される可能性がありますことをご了承ください。
            <br />
            本コンテストで取得した個人情報は、コンテストの結果の発表や作品を紹介する場合、コンテストの実施・運営・宣伝広報活動のために業務委託先に業務を委託する場合、そのほか、法令に定められた場合を除き、応募者の同意なく、個人情報を第三者に開示することはありません。
            <br />
            本コンテストで取得した個人情報は、以下の範囲で利用します。
            <br />
            利用するデータ
            <br />
            氏名、住所、電話番号、電子メールアドレス等、応募時にご登録いただいた情報
            <br />
            利用者
            <br />
            株式会社クレドインターナショナル 利用の目的
            <br />
            コンテストに関するご連絡、賞品の発送、応募作品の管理、受賞作品の展示などコンテストの実施・運営・宣伝広報活動およびこれらに付随する目的並びに特定の個人を識別できない統計資料を作成する目的、このほか主催者のPR活動で応募作品を使用する際に応募時のInstagramアカウント名を合わせて表示する目的
            <br />
            個人情報管理責任者 株式会社クレドインターナショナル
            <br />
            ※賞品の発送は、株式会社クレドインターナショナルが行います。
            <br />
            運営業務委託先
            <br />
            株式会社クレドインターナショナル
            <br />
            ※賞品の発送・配送は、株式会社クレドインターナショナルおよび株式会社クレドインターナショナルが委託する企業が行います。
          </p>
          <h2
            className={
              "bg-[#485757] px-1 w-full text-[#EFEFEF] text-center mt-8"
            }
          >
            注意事項
          </h2>
          <p className={"mt-4 text-sm "}>
            応募者は、応募の際に指定された項目につき、正確な情報を入力するものとします。入力いただいた情報のミスによる落選、その他いかなる損害についても一切責任を負えませんのでご了承ください。
            <br />
            応募作品は未発表のものに限りませんが、トラブル防止のため他のコンテストなどに応募中または応募予定、あるいは過去に受賞して画像が確認できる作品の場合は、他のフォトコンテストなどの応募規約もご確認いただきますようお願いいたします。なお、応募者本人が制作された市販目的のない出版物や本人のSNS、ブログなどに掲載した作品、審査のない写真展に出品した作品は応募いただけます。
            <br />
            ご応募いただいた後であっても、応募作品の著作権は原則として応募者に帰属します。
            <br />
            応募の取り消しはできません。
            <br />
            応募作品のバックアップは、応募者本人の責任で行ってください。
            <br />
            作品のお持込や郵送でのご応募は受け付けることができません。また送付作品の返送手続きもいたしません。
            <br />
            本コンテストでは、重複受賞（本コンテスト内で1名の方の応募作品が2作品以上受賞対象となること）はありません。
            <br />
            本コンテスト内での重複受賞が判明した場合は、受賞候補段階、もしくは受賞確定後であったとしても、受賞を取り消しとさせていただくことをあらかじめご了承ください。
            <br />
            受賞者は、受賞作品を株式会社クレドインターナショナルのPR用などに使用する目的で株式会社クレドインターナショナルが許可した第三者を含むものとし、以下同じとします）が、無償かつ無期限に使用、掲載、転載、公衆送信等することを承諾するものとします。応募作品については、撮影者に事前に許諾確認の上、上記同様使用することがございます。応募者は、株式会社クレドインターナショナルに対し、著作者人格権に基づく権利の主張を一切行わないものとします。
            <br />
            前項の株式会社クレドインターナショナルによる使用において、応募者の承諾を得ることなく応募作品のトリミング・画像効果並びに音楽および音響効果を加えるなどの編集・改変を行うことがあることを承諾するものとします。
            <br />
            応募作品に使用される著作物、肖像については、応募者本人が著作権・肖像権等一切の権利を有するもの、または権利者から事前に使用承諾を得たものとします。被写体に人物が含まれている場合は、事前にその方の承諾を得るなど、肖像権の侵害等が生じないように応募者本人の責任においてご確認ください。被写体が未成年の場合は、その保護者の許可も得たものに限ります。
            <br />
            また、神社・仏閣、商業施設などが写り込んでいる場合も、撮影・応募許諾を得たうえでご応募ください。被写体に看板・ネオンサイン・ブランドロゴ等が含まれる場合や公序良俗に反すると判断される作品のご応募はご遠慮ください。住所情報が写り込んでいる作品のご応募もご遠慮ください。
            <br />
            前項の応募作品の規定において、受賞確定後に、作品を見た第三者から著作権・肖像権の侵害・プライバシーの侵害等の申告があった際には、協議の上、受賞を取り消しとさせていただく場合があります。
            <br />
            第三者の著作物を撮影し、それを素材にして加工や合成をしますと、著作権等知的財産権の侵害にあたる場合がありますので、事前に権利者の許諾を得てください。
            <br />
            応募作品に関して万一法律上の問題が生じた場合、応募者の責任および負担において、その一切を解決するものとし、株式会社クレドインターナショナルは何ら責任を負いません。
            <br />
            応募要項その他公序良俗に違反する、他の応募者に対する誹謗中傷、不利益を与える行為や、応募者が反社会的勢力（またはそれに準ずるもの）に該当するなど、その他主催者が不適切と判断した場合、コンテストの受賞を取り消すことがあります。
            <br />
            応募要項は日本法を準拠法とし、応募要項に関する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所として解決するものとします。
            <br />
            本コンテストの選定基準や選考結果に関するお問い合わせは受け付けておりませんので、あらかじめご了承ください。
            <br />
            受賞の権利を譲渡・換金することはできません。
            <br />
            賞品以外の費用はすべて応募者のご負担となります。
            <br />
            事務局は、必要と判断した場合には、本規約を変更できるほか、本コンテストの適正な運用を確保するために必要なあらゆる対応をとることができるものとします。
            <br />
            本コンテストに応募するにあたり、応募者は事務局の運営方法にしたがうものとし、その運営方法について一切異議を申し立てないものとします。
            <br />
            本コンテストは、株式会社クレドインターナショナルが主催・運営を行っております。Meta社およびInstagramは本コンテストの後援、承認、運営を一切行っておらず、Meta社およびInstagramとは一切関係がありません。また本コンテストへの参加、および賞品に関して、Meta社およびInstagramは一切の関与をせず、応募者はそのことに同意したものとみなされます。
            <br />
            Facebook /
            Instagramおよび本コンテストの中断、または中止によって生じるいかなる損害についても、株式会社クレドインターナショナルが責任を負うものではありません。本コンテストの内容は、予告なく変更する場合があります。
            <br />
            本コンテストの関係者、および関係グループ企業・団体に勤務する方は応募できません。
          </p>
        </section>
        */}
        {/* <Instagram /> */}
        {/*<Chairman chairman={chairman} />*/}
        {/*<Adviser />*/}
        {/* <Department enttContests={enttContests} enttStar={enttStar} /> */}
        {/*<Ambassador />*/}
        <Sns />
        {/*<Cta />*/}
        <Category />
        <Link2023 />
      </main>
      <ToTop />
      <Footer />
    </>
  );
};

export default Home;
