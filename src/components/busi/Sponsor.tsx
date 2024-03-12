import Image from "next/image";

const Sponsor = () => {
  return (
    <section id="sponsor" className={"py-10"}>
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all montserrat">Sponsor</p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
          スポンサー企業
        </p>
      </h2>
      <div className="container grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 px-5 mt-10 mx-auto md:max-w-4xl max-w-lg pb-10">
        <div className="item mx-auto">
          <Image
            className={"rounded-md "}
            src={"/top/sponsor/onelilive.jpg"}
            alt={"oneli_live"}
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
        <div className="item">
          <Image
            className={"rounded-md mx-auto"}
            src={"/busi/kagoshima/TYH.jpg"}
            alt={"TYH"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md mx-auto"}
            src={"/top/sponsor/onedining.jpg"}
            alt={"onedining"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md mx-auto"}
            src={"/busi/osaka/venue_logo.png"}
            alt={"近畿大学"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md mx-auto"}
            src={"/top/sponsor/amaterasu.jpg"}
            alt={"アマテラス"}
            width={"150"}
            height={"150"}
          />
        </div>
      </div>

      <div className="pb-10">
        <a
          href="/sponsor"
          className="button md:text-xl text-base font-bold relative"
        >
          スポンサー募集
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
      </div>
    </section>
  );
};

export default Sponsor;
