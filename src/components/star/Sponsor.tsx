import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Sponsor = ({ sponsors }: any) => {
  return (
    <>
      <section id="sponsor" className={""}>
        <h2 className="secTitle">
          <span className={"block"}>Sponsor</span>
          スポンサー企業
        </h2>
        <div className="container flex flex-wrap justify-center gap-3 md:gap-4 m-auto max-w-[1100px]">
          <div className="container grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 px-5 mt-10 mx-auto md:max-w-4xl max-w-lg pb-10">
            <div className="item mx-auto">
              <Image
                className={"rounded-md "}
                src={"/top/sponsor/onelilive.jpg"}
                alt={"oneli_live"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/tecotec.webp"}
                alt={"tecotec"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/asteeda.png"}
                alt={"asteeda"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                src={"/top/sponsor/mixch.webp"}
                alt="mixch"
                width={"200"}
                height={"200"}
                className={"rounded-md mx-auto"}
              />
            </div>
            <div className="item">
              <Image
                src={"/top/sponsor/showroom.png"}
                alt="showroom"
                width={"200"}
                height={"200"}
                className={"rounded-md mx-auto"}
              />
            </div>
            <div className="item">
              <Image
                src={"/top/sponsor/utattemitacollection.jpg"}
                alt="utattemitacollection"
                width={"200"}
                height={"200"}
                className={"rounded-md mx-auto"}
              />
            </div>
            <div className="item">
              <Image
                src={"/top/sponsor/onedining.jpg"}
                alt="onedining"
                width={"200"}
                height={"200"}
                className={"rounded-md mx-auto"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/busi/osaka/venue_logo.png"}
                alt={"近畿大学"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/top/sponsor/amaterasu.jpg"}
                alt={"アマテラス"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md"}
                src={"/top/sponsor/Queencard.png"}
                alt={"Queencard"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/nestle.png"}
                alt={"nestle"}
                width={"200"}
                height={"200"}
              />
            </div>
            <div className="item">
              <Image
                className={"rounded-md mx-auto"}
                src={"/top/sponsor/kirin.png"}
                alt={"kirin"}
                width={"200"}
                height={"200"}
              />
            </div>
          </div>
        </div>

        <a href="/sponsor" className={"btn btnEntt"}>
          スポンサー募集中
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
