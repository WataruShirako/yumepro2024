import Image from "next/image";

const lists = [
  {
    id: 1,
    name: " 早川周作",
    descri: `琉球アスティーダスポーツクラブ株式会社`,
    descri2: "会長",
    src: "/busi/okinawa/committee01.webp",
  },
];

const Committee = () => {
  return (
    <>
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
        <div className="md:grid grid-cols-2 md:max-w-6xl mx-auto">
          {/* 
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/okinawa/committee01.webp"}
                width={642}
                height={642}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                早川周作
              </p>
              <p className="font-bold text-[15px] text-center ">
                琉球アスティーダスポーツクラブ株式会社 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                沖縄から卓球のプロリーグであるＴリーグに参戦する「琉球アスティーダ」やトライアスロンチーム、飲食店を運営する琉球アスティーダスポーツクラブ株式会社を設立し、代表取締役に就任。
                2021年3月、プロスポーツチームとして日本初となる上場を果たす。
              </div>
            </div>
          </div>
          */}
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/shimakawa_toshiaki.jpg"}
                width={642}
                height={642}
                alt="島川敏明"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                島川 敏明
              </p>
              <p className="font-bold text-[15px] text-center ">
                IVS株式会社 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                次世代の起業家が集うスタートアップカンファレンスカンファレンス「IVS」の運営や日本最大のライブ配信アプリを提供する株式会社17Media
                Japan（現17LIVE）の立ち上げを行う。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/aoki_koji.jpg"}
                width={642}
                height={642}
                alt="青木康時"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                青木 康時
              </p>
              <p className="font-bold text-[15px] text-center ">
                株式会社サムライパートナーズ 取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                これまで4社を起業しIPOやM&Aを経験した後、ヒカル・宮迫博之などのプロモーションを行うサムライパートナーズに参画。1000万再生を超える起業家育成リアリティショー「Nontitle」などの制作にも携わるYouTubeプロモーター兼連続起業家。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/takaishi_takanori.webp"}
                width={642}
                height={642}
                alt="片石貴展"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                片石 貴展
              </p>
              <p className="font-bold text-[15px] text-center ">
                株式会社yutori 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                『9090』『Younger
                Song』など複数のD2Cブランドや、バーチャルインフルエンサー事務所『VIM』などを手掛ける。
                2020年7月ZOZOグループへジョイン。2023年12月東京証券取引所グロース市場へ新規上場。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/koukou.webp"}
                width={642}
                height={642}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                黄皓
              </p>
              <p className="font-bold text-[15px] text-center ">
                ミラーフィット株式会社 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                全国で20店舗以上展開するパーソナルジムの経営者を務める。
                スマートミラーデバイス「MIRROR
                FIT.」を通して、オンラインフィットネス事業を展開。著書『異なる勇気』『超完璧な伝え方{" "}
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/ishikura_kazuhiko.jpg"}
                width={642}
                height={642}
                alt=""
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                石倉 壱彦
              </p>
              <p className="font-bold text-[15px] text-center ">
                株式会社Akatsuki Ventures 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                KPMGあずさ監査法人を経て、株式会社アカツキにて株式上場準備に従事。2022年4月に株式会社Akatsuki
                Venturesを立ち上げる。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/funabiki.jpg"}
                width={642}
                height={642}
                alt="舟引美咲"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                舟引 美咲
              </p>
              <p className="font-bold text-[15px] text-center ">
                東京大学大学院 Graduate fellow
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                慶応義塾大学法学部政治学科卒業後、テレビ局のアナウンサーやニュースキャスターの経験を積んだ後、University
                Of The Arts London（UAL）に留学。
                その際、福島復興支援のチャリティープロジェクトを英国貴族院議員らの協力を経て、アジア人初となる英国国会議事堂にてイベント開催した経験を経て、帰国後はLuxury業界で主にブランド・マーケティングやCSRに従事。現在は東京大学大学院にてLuxuryとCSRの研究を行っている。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/shibata.jpg"}
                width={642}
                height={642}
                alt="柴田秀樹"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                柴田 秀樹
              </p>
              <p className="font-bold text-[15px] text-center ">
                株式会社HSPB 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                りそな銀行、SBIグループプライベートバンキング本部長兼企画室長を経て、2021年より株式会社HSPBの代表としての活動を本格始動。徳川宗家、全国寺社観光協会など数多くの団体、企業の取締役、理事、顧問、アドバイザー等として活動。主に経営コンサル、ファイナンス、インベストメントの他、事業強化・ネットワーク支援、事業再生などにも取り組む。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/minami.jpg"}
                width={642}
                height={642}
                alt="南 章行"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                南 章行
              </p>
              <p className="font-bold text-[15px] text-center ">
                株式会社ココナラ 取締役
                <br />
                株式会社ココナラスキルパートナーズ 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                慶応義塾大学を卒業後、住友銀行を経て、企業買収ファンドのアドバンテッジパートナーズに入社し、5件の投資案件を担当。2009年に英国オックスフォード大学MBAを修了後、複数のNPO法人の立ち上げに参加。2012年1月、自ら代表として株式会社ウェルセルフ（現株式会社ココナラ）を設立、スキルのマーケットプレイス「ココナラ」を運営。現在同社取締役。2022年よりベンチャー投資子会社である株式会社ココナラスキルパートナーズの代表取締役に就任。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/kojima_.jpg"}
                width={642}
                height={642}
                alt="小嶋 彗史"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                小嶋 彗史
              </p>
              <p className="font-bold text-[15px] text-center ">
                株式会社Unpacked 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                中高生の進路学習の可能性に気づき、立教大学在学中にUnpackedを創業。
                「みらいの不安をみらい世代と共に解決する」をコンセプトに、探究型学習と事業開発を掛け合わせたビジネスモデルを日系企業かグローバル企業まで延べ１００社以上に展開。
                「自立共生」をミッションに、今後はハイクラスU18市場を確立し、意志を持ったキャリア選択ができるインフラをアジア圏を中心に展開予定。
              </div>
            </div>
          </div>
          <div className=" items-center justify-center  mt-10 gap-5  mx-auto">
            <div className="">
              <Image
                src={"/busi/kitamori.jpg"}
                width={642}
                height={642}
                alt="北森 聖士"
                className="w-60  md:w-[320px]  object-cover mx-auto"
              />
            </div>
            <div className="itemText px-5 text-left ">
              <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center  YuGothic">
                北森 聖士
              </p>
              <p className="font-bold text-[15px] text-center ">
                株式会社Unpacked 代表取締役
              </p>
              <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
                <br />
                関西学院大学在学中に株式会社ライズアースを創業し、在学中に株式会社Donutsへ売却。売却後3年半、インフルエンサー事業に従事。現在は生成AIを軸に生成AI×税務の『税務GPT』、生成AI×労務の『労務GPT』等を展開する株式会社VOLTMIND代表。
              </div>
            </div>
          </div>
        </div>
        {/** 
        <div className="container px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center mb-10 gap-5 m-auto md:max-w-4xl items-start">
          {lists.map((list, index) => (
            <div
              key={index}
              className="item flex flex-col items-center justify-center"
            >
              <Image src={list.src} alt={""} width={300} height={300} />
              <p className="my-2 text-center font-bold text-xl">{list.name}</p>
              <p className="text-center text-[13px]">{list.descri}</p>
              <p className="text-center text-[13px]">{list.descri2}</p>
            </div>
          ))}

          <div className="item"></div>
        </div>
        */}
      </section>
    </>
  );
};

export default Committee;
