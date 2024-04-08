import Image from "next/image";

const Sponsor = () => {
  return (
    <section className={"my-20 md:my-40"}>
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
      <div className="container my-2 md:my-4  grid grid-cols-2 gap-3 md:gap-5 justify-center max-w-3xl mx-auto p-5">
        <Image
          className={"rounded-md mx-auto"}
          src={"/busi/okinawa/sponsor01.webp"}
          alt={""}
          width={"200"}
          height={"200"}
        />

        <Image
          src={"/top/sponsor/amaterasu.jpg"}
          alt={"アマテラス"}
          width={"200"}
          height={"200"}
          className={"rounded-md mx-auto"}
        />
      </div>

      <p className="text-center text-lg">and more...</p>
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
    </section>
  );
};

export default Sponsor;
