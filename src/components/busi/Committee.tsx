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
                島川敏明
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
                青木康時
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
                片石貴展
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
                石倉壱彦
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
