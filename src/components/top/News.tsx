import Image from "next/image";
import Comingsoon from "./Comingsoon";
import Instagram from "../entt/Instagram";

const News = () => {
  const news = [
    {
      path: "/",
      title: "2022.12.29",
      content:
        "ミクチャユーザーによる営業妨害行為への株式会社クレドインターナショナルおよび株式会社DONUTSの対応について",
    },
  ];
  return (
    <>
      <section id="news" className="pt-12 md:pt-24">
        <h2 className={"text-center"}>
          <span
            className={
              "text-[#C52CFD] font-bold flex items-center justify-center gap-2"
            }
          >
            <Image src={"/icons/news.svg"} alt={""} width={17} height={20} />
            News
          </span>
          <p className={"font-bold text-2xl md:text-3xl mt-1"}>ニュース</p>
        </h2>

        <div className={"container m-auto max-w-6xl px-[4%] mt-6"}>
          {news.map((news, index) => (
            <div key={index} className={""}>
              <a
                href={`${news.path}`}
                className={
                  "list flex flex-col md:flex-row justify-start text-sm py-5 border-solid border-[#D3D3D3] border-b"
                }
              >
                <p
                  className={
                    "date w-[15%] pb-2 md:pb-0 font-semibold text-base"
                  }
                >
                  {news.title}
                </p>
                <p className={"title md:w-[85%] text-base"}>{news.content}</p>
              </a>
            </div>
          ))}
        </div>
        <a
          href="/news"
          className="viewall text-center Montserrat mt-8 underline block"
        >
          View all
        </a>
      </section>
      {/* <Instagram /> */}
    </>
  );
};

export default News;
