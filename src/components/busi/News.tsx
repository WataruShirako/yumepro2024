"use client";

import Image from "next/image";

const News = () => {
  const news = [
    {
      path: "/business/#sponsor",
      title: "2024.3.26",
      content: "スポンサーを更新しました。",
    },
    {
      path: "/business/#backup",
      title: "2024.3.26",
      content: "後援を更新しました。",
    },
  ];
  return (
    <section className="py-20">
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all montserrat">News</p>
        </div>
        <p className="relative mt-2 md:mt-6 pb-10 md:text-[32px] text-2xl">
          ニュース
        </p>
      </h2>

      <div className={"container m-auto max-w-5xl px-[4%] mb-10"}>
        {news.map((news, index) => (
          <div key={index} className={""}>
            <a
              href={`${news.path}`}
              className={
                "list flex flex-col md:flex-row justify-start text-sm py-5 border-solid border-[#D3D3D3] border-b"
              }
            >
              <p
                className={"date w-[15%] pb-2 md:pb-0 font-semibold text-base"}
              >
                {news.title}
              </p>
              <p className={"title md:w-[85%] text-base"}>{news.content}</p>
            </a>
          </div>
        ))}
      </div>
      {/* 
      <a
        href="/news"
        className="viewall text-center Montserrat mt-8 underline block"
      >
        View all
      </a>
      */}
    </section>
  );
};

export default News;
