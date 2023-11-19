import Image from "next/image";

const lists = [
  {
    id: 1,
    name: "中村ひろき",
    descri: `Studio ENTRE株式会社`,
    descri2: "プロデューサー",
    src: "/busi/hyogo/committee01.webp",
  },
  {
    id: 2,
    name: "宇宙 星太郎",
    descri: `株式会社うちゅう`,
    descri2: " 代表取締役",
    src: "/busi/hyogo/committee02.webp",
  },
];

const Committee = () => {
  return (
    <>
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
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
          <div className="w-1/2">
            <Image
              src={"/busi/hyogo/committee01.webp"}
              width={278}
              height={360}
              alt=""
              className="w-60md:w-[320px] object-cover mx-auto"
            />
          </div>
          <div className="itemText px-5 md:w-1/2 text-left w-4/5 w-full">
            <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
              中村ひろき
            </p>
            <p className="max-w-md text-[13px] mx-auto md:text-left md:mx-0">
              Studio ENTRE株式会社 プロデューサー
              <br />
              一般社団法人スタートアップスタジオ協会 理事
              <br />
              <br />
              1993年生まれ。早稲田大学社会科学部卒。
              <br />
              大学在学中からレーベル運営やバンド活動など、音楽についての幅広い活動を展開すると同時に、スタートアップにてプロダクト開発に関わる。
              <br />
              大学卒業後、DMM.comに入社し新規事業の担当として複数のエンタメプロダクト/サービスの立ち上げを行う。
              <br />
              その後、ブロックチェーンスタートアップにて事業開発を担当し、現在はエンターテインメント領域のスタートアップスタジオStudioENTREの事業プロデューサー。
              <br />
              得意領域はXR/AI/ブロックチェーンなどの先端技術を活用したプロダクト開発。
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
          <div className="w-1/2">
            <Image
              src={"/busi/hyogo/committee02.webp"}
              width={278}
              height={360}
              alt=""
              className="w-60md:w-[320px] object-cover mx-auto"
            />
          </div>
          <div className="itemText px-5 md:w-1/2 text-left w-4/5 w-full">
            <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
              宇宙 星太郎
            </p>
            <p className="max-w-md text-[13px] mx-auto md:text-left md:mx-0">
              株式会社うちゅう代表取締役 共同創業者 CCO兼iCEO
              <br />
              <br />
              ・一般社団法人教育ソリューション研究協議会 研究員
              <br />
              ・2020.21.22年度
              経済産業省「未来の教室」STEAMライブラリー事業　宇宙・デザイン思考・Vtuber教育コンテンツ統括責任者
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Committee;
