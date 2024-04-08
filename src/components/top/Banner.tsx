"use client";

import Image from "next/image";
import Comingsoon from "./Comingsoon";
import Instagram from "../entt/Instagram";
import Link from "next/link";

const auditions = [
  {
    name: "スター誕生オーディション",
    path: "/project/entertainment",
    src: "/top/banner/banner_star1.jpg",
  },
  {
    name: "学生ピッチ甲子園",
    path: "/business",
    src: "/top/banner/banner_business.jpg",
  },
  {
    name: "夢フォトオーディション",
    path: "/project/entertainment/photo",
    src: "/top/banner/yumephoto.png",
  },

  {
    name: "夢プロショートドラマオーディション",
    path: "/project/entertainment/shortdrama",
    src: "/top/banner/banner_drama4.jpg",
  },
  {
    name: "親善大使オーディション",
    path: "/project/entertainment/shinzentaishi",
    src: "/top/banner/banner_shinzentaishi.jpg",
  },
  {
    name: "ライバーオーディション",
    path: "/project/entertainment/liver",
    src: "/top/banner/banner_liver1.jpg",
  },
  {
    name: "ダンスオーディション",
    path: "/project/entertainment/dance",
    src: "/top/banner/banner_dance.jpg",
  },
  {
    name: "ボーカルオーディション",
    path: "/project/entertainment/vocal",
    src: "/top/banner/banner_vocal.jpg",
  },
  {
    name: "ミスミスタースパサウナ2024オーディション",
    path: "/project/entertainment/spasauna",
    src: "/top/banner/banner_spasauna.jpg",
  },
];

const Banner = () => {
  return (
    <>
      <section id="audition" className="pt-12 md:pt-24">
        <h2 className={"text-center"}>
          <span
            className={
              "text-[#C52CFD] font-bold flex items-center justify-center gap-2"
            }
          >
            <Image
              src={"/icons/audition.svg"}
              alt={""}
              width={17}
              height={20}
            />
            Audition
          </span>
          <p className={"font-bold text-2xl md:text-3xl mt-1"}>
            オーディション一覧
          </p>
        </h2>
        <div
          className={
            "container m-auto max-w-6xl px-[4%] mt-6 flex flex-wrap gap-3  justify-center"
          }
        >
          {auditions.map((audi: any, index: number) => {
            if (audi.path !== "") {
              return (
                <Link
                  href={audi.path}
                  className={"md:w-[calc(100%/3-2%)] hover:brightness-90"}
                  key={index}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Image
                    src={audi.src}
                    alt={audi.name}
                    width={350}
                    height={115}
                  />
                </Link>
              );
            } else {
              return (
                <div className={"md:w-[calc(100%/3-2%)]"} key={index}>
                  <Image
                    src={audi.src}
                    alt={audi.name}
                    width={350}
                    height={115}
                  />
                </div>
              );
            }
          })}
        </div>
      </section>
      {/* <Instagram /> */}
    </>
  );
};

export default Banner;
