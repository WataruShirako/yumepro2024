import Image from "next/image";
/*
const lists = [
  {
    id: 1,
    name: " 釣崎宏",
    descri: `株式会社テコテック`,
    descri2: " 代表取締役",
    src: "/busi/committee01.jpg",
  },
  {
    id: 2,
    name: "佐野健一",
    descri: `株式会社ビジョン`,
    descri2: " 代表取締役",
    src: "/busi/committee02.jpg",
  },
  {
    id: 3,
    name: "中嶋淳",
    descri: `アーキタイプ株式会社`,
    descri2: " 代表取締役",
    src: "/busi/committee03.jpg",
  },
  {
    id: 4,
    name: "近藤太香巳",
    descri: `株式会社ネクシーズグループ`,
    descri2: " 代表取締役",
    src: "/busi/committee04.jpg",
  },
];
*/
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
        <p className="text-center md:text-5xl text-3xl font-black bg-clip-text bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] text-transparent">
          — COMING SOON —
        </p>
        {/*
        <div className="container px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center mb-10 gap-5 m-auto md:max-w-4xl items-start">
          {lists.map((list, index) => (
            <div
              key={index}
              className="item flex flex-col items-center justify-center"
            >
              <Image src={list.src} alt={""} width={200} height={200} />
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
