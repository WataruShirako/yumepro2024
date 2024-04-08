import "../../globals.css";
import "../../busi.css";
import "../../entt.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

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
import News from "@/components/star/News";
import Cta from "@/components/top/Cta";
import Category from "@/components/top/Category";
import Link2023 from "@/components/top/Link2023";
import Sponsor from "@/components/star/Sponsor";
import Project from "@/components/star/Project";
import Venue from "@/components/star/Venue";
import Backup from "@/components/star/Backup";

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

  //開催概要
  const about = {
    sched: `
    【受付終了】<br/>
    北海道大会・沖縄大会・神戸大会<br/><br/>

    【エントリー受付中】<br/>
    2024/ 1/20  鹿児島大会<br/>
    2024/ 2/ 3   福岡大会<br/>
    2024/2/17 高松大会<br/>
    2024/2/28 大阪大会<br/><br/>


    【開催準備中】<br/>
    2024/ 2/ 3   京都大会<br/>
    2024/ 3/16  金沢大会<br/>
    2024/ 3/30  東京予選<br/>
   
     日付未定   愛知大会<br/>
     日付未定   静岡大会<br/>

    <br/>
    上記予定は変更になる場合がございます。<br/>
    `,
    status: `
      日本国内在住の夢を持ったすべての方
    `,

    award: `2024年4月27日（土）10:00~18:00<br /><br />
      幕張メッセ in ニコニコ超会議2024<br />
      〒261-8550 千葉県千葉市美浜区中瀬2丁目1`,
  };

  // 審査委員
  const committee = [
    {
      id: 1,
      name: "横田 未来",
      pro: "",
      text: "2022年4月に発表された「10代に人気な女性インフルエンサー」ランキングで4位にランクイン。2023年、日本テレビZドラマ第4弾「沼る。港区女子高生」に出演、「今田耕司のネタバレMTG」出演、映画「貧困女子」主演するなど、女優/タレントとしても活躍中。SNS総フォロワー数が120 万人を超え、Z世代女の子に大人気!!",
      src: "/entt/yokota.jpg",
      hp: "",
      youtube: "",
      tiktok: "",
      twitter: "",
      insta: "",
    },
    {
      id: 2,
      name: "高梨 優佳",
      pro: "",
      text: "2001年7月21日生まれ、福岡県出身。Z世代の女性を中心に支持を集める。総フォロワー150万人超を誇り、TikTokでは多くの演技コンテンツが話題に!!現在はテレビや雑誌へ活動の幅を広げ、JELLY専属モデルとしても活躍中。",
      src: "/busi/fukuoka/chairman.jpg",
      hp: "",
      youtube: "",
      tiktok: "",
      twitter: "",
      insta: "",
    },
    {
      id: 3,
      name: "田口 音羽",
      pro: "",
      text: "2004年12月27日生まれ。鹿児島県出身。青山学院文学部3年生。2022年ABEMAバラエティー番組「今日、好きになりました。小夏編」、2023年NHKBS1ドラマ「ケーキの切れない非行少年たち」、2023年映画「ミンナのウタ」などに出演。趣味はゲーム、特技はTikTokのダンスを早く覚えること。",
      src: "/busi/kagoshima/ambassador.jpg",
      hp: "",
      youtube: "",
      tiktok: "",
      twitter: "",
      insta: "",
    },
    {
      id: 4,
      name: "荒川 邦子",
      pro: "",
      text: "フリージャーナリストを経て、日本で初のオーディション情報誌「月刊デ・ビュー」を企画、創刊し初代編集長となる。テレビのオーデション番組の審査員を務め、数々のスターを発掘。 編集長退任後、テレビ、ラジオの制作に携わる。自身のテレビ、ラジオ等出演多数、世界各国を回り、訪問した国は40か国を超える。海外を含む多くのイベントを企画し、上場企業のイベントやCM等のキャスティングも手掛ける。著書「上海きらきらコレクション」(トラベルジャーナル社刊)「これがオリエント急行だ」(フジテレビ出版) 他",
      src: "/entt/arakawa.jpg",
      hp: "",
      youtube: "",
      tiktok: "",
      twitter: "",
      insta: "",
    },
    {
      id: 5,
      name: "平岡 亜紀",
      pro: "",
      text: "映画監督・俳優。高校時代ニューヨークへ短期ダンス留学へ行った際にブロードウェイのミュージカルに感銘を受け、俳優としての活動を始める。2020年、八王子Short Film映画祭の企画コンぺにて脚本「知らない息子」が選出。同映画祭にてグランプリを受賞。 KADOKAWA、ドワンゴの連動企画により、撮影から編集、公開配信までの3日間がニコ生で密着生配信される。 2024年、令和元年台風19号で避難を呼びかけた消防団の話を元にした短編映画「決断 火の見櫓に登った男たち」の公開を控えている。",
      src: "/entt/hiraoka.jpg",
      hp: "",
      youtube: "",
      tiktok: "",
      twitter: "",
      insta: "",
    },
    {
      id: 6,
      name: "今別府 亮",
      pro: "",
      text: "大学生時代よりテレビ業界で働く。築いたネットワークを駆使し、株式会社フォーミュレーションI．T．S．を立ち上げる。テレビ業界CM業界、芸能界への人材派遣をはじめ 様々なサービスを展開。現在新規事業としてエンターテイメント業界における採用サービスに注力中。",
      src: "/entt/imabeppu.jpg",
      hp: "",
      youtube: "",
      tiktok: "",
      twitter: "",
      insta: "",
    },
  ];

  return (
    <>
      <Header />
      <main id="yumestar" className={"entt"}>
        <section id="fv" className={"pt-0"}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={"/star/fv_star_pc1.jpg"}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={"/star/fv_star_sp1.jpg"}
              alt="text"
              width={750}
              height={1370}
              priority
            />
          </div>
        </section>
        <Project />
        <Venue />

        <About about={about} />

        {/** 特典*/}
        <section id="prize" className={""}>
          <h2 className="secTitle">
            <span className={"flex gap-2 m-auto items-center justify-center "}>
              Prize
            </span>
            特典
          </h2>
          <div className="mx-auto max-w-7xl p-5 m-10">
            <div className="text-xl sm:text-2xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#CAA846] to-[#E0CA82] rounded-t-3xl text-white font-bold">
              グランプリ特典
            </div>
            <div className="bg-white rounded-b-3xl pb-5 md:pb-10 text-sm sm:text-base sm:leading-loose text-center p-5 md:p-10 font-bold">
              <div className=" grid md:grid-cols-2 gap-10">
                <div>
                  <Image
                    src={"/star/tokyo/prize_02.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  映画『夢叶えるプロジェクト(仮)』出演権
                  <br />
                  <p className="font-normal text-sm">
                    （内容が変更となる可能性があります）
                  </p>
                </div>

                <div>
                  <Image
                    src={"/star/tokyo/prize_05.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  高級スパサウナ招待券100万円分
                </div>
                <div>
                  <Image
                    src={"/star/tokyo/prize_06.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  銀座サイネージモデル出演
                </div>
                <div>
                  <Image
                    src={"/star/ray.jpg"}
                    alt=""
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  雑誌「Ray」での特集企画掲載
                </div>
              </div>
              <div className="py-10">
                その他スポンサー賞
                <br />
                メディア出演のチャンスあり
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
        {/*    <Chairman />*/}
        <Committee committee={committee} />
        {/* <Instagram /> */}

        {/*<Adviser />*/}
        {/* <Department enttContests={enttContests} enttStar={enttStar} /> */}
        {/* <Ambassador />*/}

        <Sponsor />
        <Backup />
        {/**         <Entry />*/}
        {/**         <Flow />*/}
        {/** 
        <section className="bg-white">
          <div className="container m-auto max-w-[92%] md:max-w-5xl ">
            <h2
              className={"bg-[#485757] px-1 w-full text-[#EFEFEF] text-center"}
            >
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
          </div>
        </section>
*/}
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
