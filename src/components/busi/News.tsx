"use client";

import Image from "next/image";

const News = () => {
  return (
    <section>
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all">News</p>
        </div>
        <span className="relative mt-2 md:mt-6 pb-10">ニュース</span>
      </h2>
      <div className={"container m-auto max-w-5xl px-[4%] mb-10"}>
        <a
          rel="noreferrer noopener"
          className={
            "list flex flex-col md:flex-row justify-start text-sm py-5 border-solid border-[#D3D3D3] border-b"
          }
          href={"https://yume-pj.com/pdf/1229_news.pdf"}
          target="_blank"
        >
          <p className={"date w-[15%] pb-2 md:pb-0 font-semibold"}>
            2022.12.29
          </p>
          <p className={"title md:w-[85%]"}>
            ミクチャユーザーによる営業妨害行為への株式会社クレドインターナショナルおよび株式会社DONUTSの対応について
          </p>
        </a>
      </div>
    </section>
  );
};

export default News;
