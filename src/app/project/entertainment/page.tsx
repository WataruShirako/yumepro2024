import "../../globals.css";
import "../../entt.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Prize from "@/components/star/Prize";
import About from "@/components/star/About";
import Flow from "@/components/star/Flow";
import Committee from "@/components/star/Committee";
import Chairman from "@/components/star/Chairman";
import Comingsoon from "@/components/star/Comingsoon";
import Instagram from "@/components/entt/Instagram";
import Entry from "@/components/star/Entry";
import Ambassador from "@/components/star/Ambassador";
import Adviser from "@/components/star/Adviser";
import Department from "@/components/entt/Department";
import ToTop from "@/components/entt/Totop";
import Sns from "@/components/entt/Sns";
import News from "@/components/top/News";
import Cta from "@/components/top/Cta";
import Category from "@/components/top/Category";
import Link2023 from "@/components/top/Link2023";
import Sponsor from "@/components/star/Sponsor";

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
    sponsor: "/star/sponsor/sakura.jpg",
    src: "/entt/prizes/prize_sponsor_spa_100_1.jpg",
    alt: "text",
    SPsrc: "/entt/prizes/sp_prize_sponsor_spa_100_1.jpg",
  };

  //開催概要
  const about = {
    sched: `
    【受付終了】<br/>【北海道ブロック】<br/>北海道大会<br/><br/>
    【エントリー受付中】<br/>2023/12/24<br/>【沖縄ブロック】沖縄大会@沖縄アリーナ<br/><br/>
    【エントリー受付中】<br/>2023/1/13 <br/>【関西ブロック第1弾】神戸大会@ポートアオシス神戸<br/><br/>
    【エントリー受付中】<br/>2024/1/20<br/>【九州ブロック第2弾】鹿児島大会@鹿児島市中央公民館<br/><br/>
    【エントリー受付中】<br/>2024/2/3<br/>【九州ブロック第1弾】福岡大会@北九州芸術劇場<br/><br/>
    【エントリー受付中】<br/>2024/2/3<br/>【関西ブロック第2弾】京都大会@オンライン<br/><br/>
    【エントリー受付中】<br/>2024/3/16<br/>【北陸ブロック】石川大会@金沢市アートホール<br/><br/>
    【エントリー受付中】<br/>2024/3/30<br/> 【関東ブロック】東京予選@慶應義塾大学<br/><br/>

    【開催準備中】<br/>【関西ブロック第3弾】<br/>大阪大会<br/><br/>
    【開催準備中】<br/>【東海ブロック第1弾】<br/>愛知大会<br/><br/>
    【開催準備中】<br/>【東海ブロック第2弾】<br/>静岡大会<br/><br/>
    【開催準備中】<br/>【四国ブロック】<br/>高松大会<br/><br/>
    <br/>
    <br/>
    上記予定は変更になる場合がございます。<br/>
    `,
    status: `
      ・日本国内在住の夢を持ったすべての方
    `,

    award: "2024年4月28日（日）10:00~17:00",
  };

  // 審査委員
  const committee = [
    {
      id: 1,
      name: "岩倉しおり",
      pro: "写真家",
      text: "香川県在住の写真家。うつろう季節、光を大切におもにフィルムカメラにて撮影している。地元、香川県で撮影した写真を中心にSNSで作品を発表する他、写真展の開催、CDジャケットや書籍のカバー、広告写真などを手掛ける。2019年3月、初の写真集『さよならは青色』（KADOKAWA）を出版。",
      src: "/entt/committee/iwakura_shiori.jpg",
      hp: "https://iwakurashiori.wixsite.com/photo/",
      twitter: "@Shiori1012",
      insta: "iwakurashiori",
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
      <main id="yumestar" className={"entt"}>
        <section id="fv" className={"pt-0"}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={"/entt/star/fv_star_pc.webp"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/entt/star/fv_star_sp.webp"}
              alt="text"
              width={750}
              height={1370}
              priority
            />
          </div>
        </section>

        <Prize prize={prize} />

        <About about={about} />
        <Chairman chairman={chairman} />
        <Committee committee={committee} />
        {/* <Instagram /> */}

        <Adviser />
        {/* <Department enttContests={enttContests} enttStar={enttStar} /> */}
        <Ambassador />
        <Sponsor />
        {/**         <Entry />*/}
        {/**         <Flow />*/}
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

        <Sns />
        <Cta />
        <Category />
        <Link2023 />
        <News />
      </main>
      <ToTop />
      <Footer />
    </>
  );
};

export default Home;
