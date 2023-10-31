import Image from "next/image";

const RegionalTournament = () => {
  return (
    <section className={"my-20 md:my-40"}>
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 left-3 md:-top-8 md:left-3 w-16 h-16 md:w-32 md:h-32 lg:-left-16"
          />
          <p className="relative break-all montserrat">
            REGIONAL <br className="lg:hidden" />
            TOURNAMENT
          </p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
          地方大会
        </p>
      </h2>
      <h3 className="font-bold text-2xl text-center pt-10">ビジネス部門</h3>
      <div className="container grid grid-cols-2 md:grid-cols-3 min-[850px]:grid-cols-8 gap-5 px-4 mt-10 mx-auto min-[850px]:max-w-5xl max-w-md md:max-w-2xl pb-5 ">
        <a
          href=""
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-2 min-[850px]:col-span-2"
        >
          東京大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a
          href=""
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-4 min-[850px]:col-span-2"
        >
          愛知大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a
          href=""
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-6 min-[850px]:col-span-2"
        >
          石川大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a
          href=""
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-1 min-[850px]:col-span-2"
        >
          大阪大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a
          href="/business/hyogo"
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-3 min-[850px]:col-span-2"
        >
          兵庫大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a
          href=""
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-5 min-[850px]:col-span-2"
        >
          福岡大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a
          href=""
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-7 min-[850px]:col-span-2"
        >
          沖縄大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
      </div>
      <h3 className="font-bold text-2xl text-center pt-10">エンタメ部門</h3>
      <div className="container grid grid-cols-2 md:grid-cols-3 min-[850px]:grid-cols-4 gap-5 px-4 mt-10 mx-auto min-[850px]:max-w-5xl max-w-md pb-5 md:max-w-2xl">
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          北海道大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          東京大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          愛知大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          石川大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          大阪大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          兵庫大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          福岡大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
        <a href="" className="button2 md:text-xl text-base font-bold relative">
          沖縄大会
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

export default RegionalTournament;
