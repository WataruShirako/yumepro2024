import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Sponsor = () => {
  return (
    <section id="sponsor" className="pt-12 md:pt-24">
      <h2 className={"text-center"}>
        <span
          className={
            "text-[#C52CFD] font-bold flex items-center justify-center gap-2"
          }
        >
          <Image
            src={"/icons/ambassodors.svg"}
            alt={""}
            width={17}
            height={20}
          />
          Sponsors
        </span>
        <p className={"font-bold text-2xl md:text-3xl mt-1"}>
          スポンサー企業一覧
        </p>
      </h2>

      <div className="container text-center m-auto">
        <p className="mt-6 md:mt-12 font-semibold">メインスポンサー</p>
        <div className="mt-2 px-5">
          <Image
            src={"/top/sponsor/sakura_logo.jpg"}
            alt="sakura"
            width={300}
            height={300}
            className="rounded-2xl m-auto md:w-80"
          />
        </div>
      </div>

      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">スポンサー企業</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-2.5 justify-center max-w-5xl mx-auto">
          <Image
            src={"/top/sponsor/asteeda.png"}
            alt="asteeda"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
          <Image
            src={"/top/sponsor/onelilive.jpg"}
            alt="oneli_live"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/tecotec.webp"}
            alt="tecotec"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/mixch.webp"}
            alt="mixch"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/showroom.png"}
            alt="showroom"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/utattemitacollection.jpg"}
            alt="utattemitacollection"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/busi/kagoshima/TYH.jpg"}
            alt="TYH"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/onedining.jpg"}
            alt="onedining"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
          <Image
            src={"/top/sponsor/zen_spa.png"}
            alt="zen_spa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />

          <Image
            src={"/top/sponsor/an_spa.png"}
            alt="an_spa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/sanatio_spa.png"}
            alt="sanatio_spa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/sora_spa.png"}
            alt="sola_spa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/spa_solani.png"}
            alt="spa_solani"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/landmark_spa.png"}
            alt="landmark_spa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/la_villa.png"}
            alt="la_villa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/hammam_spa.png"}
            alt="hammam_spa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/inroom_spa.png"}
            alt="inroom_spa"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={"/top/sponsor/fauchon.png"}
            alt="fauchon"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
        </div>
        <p className="mt-6 md:mt-12 font-semibold">後援</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-2.5 justify-center max-w-5xl mx-auto">
          <Image
            src={"/top/sponsor/kobe.png"}
            alt="神戸市"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
          <Image
            src={"/top/sponsor/kagoshimashi.png"}
            alt="鹿児島市"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
          <Image
            src={"/busi/kagawa/takamatsushi.jpg"}
            alt="高松市"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
          <Image
            src={"/busi/fukuoka/kitakyusyu.jpg"}
            alt="北九州市"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
          <Image
            src={"/busi/fukuoka/yukuhashi.jpg"}
            alt="行橋市"
            width={500}
            height={500}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
