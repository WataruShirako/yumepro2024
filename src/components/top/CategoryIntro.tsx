"use client";

import Image from "next/image";
import Link from "next/link";

const CategoryIntro = ({ enttContests, star, busi }: any) => {
  return (
    <section className={"introduce py-12 md:py-24"}>
      <div className="container px-5 pb-10 md:py-20 max-w-full bg-white">
        <div className="relative h-24 flex items-center max-w-6xl md:mx-auto">
          <Image
            className="absolute top-auto bottom-auto md:-left-20 md:w-36 md:opacity-30"
            src={"/top/entt_symbol.svg"}
            alt={""}
            width={90}
            height={90}
          />
          <Image
            className={"ml-8 md:ml-0 relative md:w-64"}
            src={"/top/category_entt_title.svg"}
            alt={"エンタメ部門"}
            width={200}
            height={48}
          />
        </div>

        <div className="md:flex justify-start items-start md:gap-12 max-w-6xl mx-auto md:mt-12">
          <div className="container flex-1">
            <h6>スター誕生オーディション</h6>
            {star.map((star: any, index: number) => (
              <Link
                key={index}
                href={"/project/entertainment/photo"}
                className={
                  "list bg-[#CBD6D0] p-4 mt-2 flex justify-between items-center hover:bg-[#dbe8e1]"
                }
              >
                <span>{star.name}</span>
                {star.name !== "coming soon ..." && (
                  <Image
                    src={"/entt/arrowGreen.svg"}
                    alt={"▶︎"}
                    width={26}
                    height={26}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="container flex-1 mt-6 md:mt-0">
            <h6>部門別オーディション</h6>
            {enttContests.map((EnttContest: any, index: number) => (
              <Link
                key={index}
                href={"/project/entertainment/photo"}
                className={
                  "list bg-[#CBD6D0] p-4 mt-2 flex justify-between items-center hover:bg-[#dbe8e1] "
                }
                onClick={() => window.scrollTo(0, 0)}
              >
                <span>{EnttContest.name}</span>
                {EnttContest.name !== "coming soon ..." && (
                  <Image
                    src={"/entt/arrowGreen.svg"}
                    alt={"▶︎"}
                    width={26}
                    height={26}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*ビジネス*/}
      <div className="container px-5 py-10 md:py-20 bg-[#151D22] max-w-full relative overflow-hidden">
        <div className="relative h-24 flex items-center max-w-6xl md:mx-auto relative z-50">
          <Image
            className="absolute top-auto bottom-auto md:-left-20 md:w-36"
            src={"/top/busi_symbol.svg"}
            alt={""}
            width={90}
            height={90}
          />
          <Image
            className={"ml-8 md:ml-0 relative w-64"}
            src={"/top/category_busi_title.svg"}
            alt={"ビジネス部門"}
            width={200}
            height={48}
          />
        </div>
        <div className="md:flex justify-start items-start md:gap-12 max-w-6xl mx-auto md:mt-12 relative z-50">
          <div className="container flex-1 mt-6 md:mt-12">
            {/*            <h6></h6>*/}
            {busi.map((busi: any, index: number) => (
              <Link
                key={index}
                href={"/business"}
                className={
                  "list bg-[#CBD6D0] p-4 mt-2 flex justify-between items-center hover:bg-[#dbe8e1] "
                }
                onClick={() => window.scrollTo(0, 0)}
              >
                <span>{busi.name}</span>
                {busi.name !== "coming soon ..." && (
                  <Image
                    src={"/entt/arrowGreen.svg"}
                    alt={"▶︎"}
                    width={26}
                    height={26}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="container mt-6 md:mt-0 flex-1"></div>
        </div>

        <Image
          src={"/top/categoryIntro_busi_img.webp"}
          alt=""
          width={606}
          height={362}
          className="absolute right-0 top-0 object-contain z-auto"
        />
      </div>
    </section>
  );
};

export default CategoryIntro;
