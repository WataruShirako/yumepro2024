import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Sponsor = ({ sponsors }: any) => {
  return (
    <>
      <section id="sponsor" className={""}>
        <h2 className="secTitle">
          <span className={"block"}>Sponsor</span>
          スポンサー企業さま
        </h2>
        <div className="container flex flex-wrap justify-center gap-3 md:gap-4 m-auto max-w-[1100px]">
          <div className="container grid grid-cols-3 gap-3 md:gap-5 px-5 mt-10 mx-auto md:max-w-4xl max-w-lg pb-10">
            <div className="item mx-auto">
              <Image
                className={"rounded-md "}
                src={"/top/sponsor/oneli_navi.webp"}
                alt={"oneli_navi"}
                width={"150"}
                height={"150"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/tecotec.webp"}
                alt={"tecotec"}
                width={"150"}
                height={"150"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/asteeda.png"}
                alt={"asteeda"}
                width={"150"}
                height={"150"}
              />
            </div>
          </div>
        </div>

        <a href="/sponsor" className={"btn btnEntt"}>
          スポンサーさま募集中
          <Image
            className={"absolute right-[20px] top-1/2 -translate-y-1/2"}
            src={"/entt/entt_btn_arrow.svg"}
            alt={"▶︎"}
            width={26}
            height={26}
          />
        </a>
      </section>
    </>
  );
};

export default Sponsor;
