import Image from "next/image";

const Backup = () => {
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
          <p className="relative break-all montserrat">Backup</p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
          後援企業さま
        </p>
      </h2>
      {/*<div className="container grid grid-cols-1 md:grid-cols-1 gap-10 px-4 mt-10 mx-auto md:max-w-5xl pb-10">*/}
      <div className="container grid grid-cols-2 gap-3 md:gap-5 px-5 mt-10 mx-auto md:max-w-4xl max-w-lg pb-10">
        <div className="item mx-auto">
          <Image
            className={"rounded-md"}
            src={"/busi/hyogo/sponsor01.webp"}
            alt={""}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item mx-auto">
          <Image
            className={"rounded-md"}
            src={"/top/sponsor/kagoshimashi.png"}
            alt={"鹿児島市"}
            width={"150"}
            height={"150"}
          />
        </div>
      </div>
      <p className="text-center text-lg">and more...</p>
    </section>
  );
};

export default Backup;
