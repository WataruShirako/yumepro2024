import Image from "next/image";

const Sns = () => {
  return (
    <div className="mt-12 md:mt-24">
      <div className={"svg__container"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 50"
          className={"svg__content top"}
        >
          <path
            id="wave_3_"
            data-name="wave (3)"
            d="M0,64l7.813,2.09C15.625,68.1,31.25,72.4,46.875,74.41A141.529,141.529,0,0,0,93.75,73.375C109.375,70.25,125,64,140.625,65.035c15.625,1.113,31.25,9.316,46.875,12.5,15.625,3.066,31.25,1.113,46.875,5.215S265.625,97.4,281.25,94.215c15.625-3.066,31.25-19.863,46.875-26.055,15.625-6.309,31.25-2.012,39.063,0L375,70.25V114H0Z"
            transform="translate(0 -64)"
            fill="#fff"
          />
        </svg>
      </div>
      <section id="ambassador" className={"bg-white"}>
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-6">
          夢叶えるプロジェクト
          <br className={"lg:hidden"} />
          公式チャンネル
        </h2>
        <p className={"text-center"}>フォロー、友達登録で最新情報をGETしよう</p>
        <div className={"container m-auto mt-12"}>
          <div className={"list flex gap-4  md:gap-20 justify-center"}>
            <a
              href={
                "https://liff.line.me/1657596848-xOJZNbmM/landing?follow=%40306ccdiy&lp=ey1QMR&liff_id=1657596848-xOJZNbmM"
              }
              target="_blank"
            >
              <Image
                className={"rounded-[18px] shadow-md hover:shadow-none"}
                src={"/icon_line.svg"}
                alt={"line"}
                width={80}
                height={80}
              />
            </a>
            <a
              href={"https://instagram.com/yumekanaeru_project"}
              target={"_blank"}
            >
              <Image
                className={"rounded-[18px] shadow-md hover:shadow-none"}
                src={"/icon_instagram.svg"}
                alt={"instagram"}
                width={80}
                height={80}
              />
            </a>
            <a
              href={"https://www.youtube.com/@yumekanaeru.project"}
              target="_blank"
            >
              <Image
                className={
                  "rounded-[18px] shadow-md hover:shadow-none transition-all"
                }
                src={"/icon__youtube.png"}
                alt={"youtube"}
                width={80}
                height={80}
              />
            </a>
            <a href={"https://twitter.com/yumepro2023"} target="_blank">
              <Image
                className={
                  "rounded-[18px] shadow-md hover:shadow-none transition-all"
                }
                src={"/icon_twitter.svg"}
                alt={"twitter"}
                width={80}
                height={80}
              />
            </a>
            <a
              href={"https://www.tiktok.com/@yumekanaeru_project"}
              target={"_blank"}
            >
              <Image
                className={"rounded-[18px] shadow-md hover:shadow-none"}
                src={"/icon_tiktok.svg"}
                alt={"tiktok"}
                width={80}
                height={80}
              />
            </a>
          </div>
        </div>
      </section>
      <div className={"svg__container"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 50"
          className={"svg__content under"}
        >
          <path
            id="wave_3_"
            data-name="wave (3)"
            d="M375,114l-7.813-2.09c-7.812-2.012-23.437-6.309-39.062-8.32a141.529,141.529,0,0,0-46.875,1.035c-15.625,3.125-31.25,9.375-46.875,8.34-15.625-1.113-31.25-9.316-46.875-12.5-15.625-3.066-31.25-1.113-46.875-5.215S109.375,80.6,93.75,83.785C78.125,86.852,62.5,103.648,46.875,109.84c-15.625,6.309-31.25,2.012-39.063,0L0,107.75V64H375Z"
            transform="translate(0 -64)"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sns;
