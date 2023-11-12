import Image from "next/image";

const RegionalTournament = () => {
  return (
    <>
      <h3 className="font-bold text-2xl text-center pt-10">ビジネス部門</h3>
      <div className="container grid grid-cols-2 md:grid-cols-3 min-[850px]:grid-cols-8 gap-5 px-4 mt-10 mx-auto min-[850px]:max-w-5xl max-w-md md:max-w-2xl pb-5 ">
        <a
          href="/business/tokyo"
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-2 min-[850px]:col-span-2"
        >
          東京大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/business/aichi"
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-4 min-[850px]:col-span-2"
        >
          愛知大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/business/ishikawa"
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-6 min-[850px]:col-span-2"
        >
          石川大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/business/osaka"
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-1 min-[850px]:col-span-2"
        >
          大阪大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
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
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/business/fukuoka"
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-5 min-[850px]:col-span-2"
        >
          福岡大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/business/okinawa"
          className="button2 md:text-xl text-base font-bold relative min-[850px]:col-start-7 min-[850px]:col-span-2"
        >
          沖縄大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
      </div>
      <h3 className="font-bold text-2xl text-center pt-10">エンタメ部門</h3>
      <div className="container grid grid-cols-2 md:grid-cols-3 min-[850px]:grid-cols-4 gap-5 px-4 mt-10 mx-auto min-[850px]:max-w-5xl max-w-md pb-5 md:max-w-2xl">
        <a
          href="/project/entertainment/hokkaido"
          className="button2 md:text-xl text-base font-bold relative"
        >
          北海道大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/project/entertainment/tokyo"
          className="button2 md:text-xl text-base font-bold relative"
        >
          東京大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/project/entertainment/aichi"
          className="button2 md:text-xl text-base font-bold relative"
        >
          愛知大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/project/entertainment/ishikawa"
          className="button2 md:text-xl text-base font-bold relative"
        >
          石川大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/project/entertainment/osaka"
          className="button2 md:text-xl text-base font-bold relative"
        >
          大阪大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/project/entertainment/hyogo"
          className="button2 md:text-xl text-base font-bold relative"
        >
          兵庫大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/project/entertainment/fukuoka"
          className="button2 md:text-xl text-base font-bold relative"
        >
          福岡大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
        <a
          href="/project/entertainment/okinawa"
          className="button2 md:text-xl text-base font-bold relative"
        >
          沖縄大会
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-2"}
          />
        </a>
      </div>
    </>
  );
};

export default RegionalTournament;
