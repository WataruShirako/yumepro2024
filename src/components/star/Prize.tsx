import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Prize = ({ prize }: any) => {
  return (
    <>
      {/* 
      <div className={'svg__container'}>
        <svg xmlns="http://www.w3.org/2000/svg" className={'svg__content'} viewBox="0 0 1366 100">
          <path
            id="パス_285"
            data-name="パス 285"
            d="M0,120H1366V60s-154.1-40-324.849-40S683,60,683,60s-208.446,40-379.2,40S0,60,0,60Z"
            transform="translate(0 -20)"
            fill="#fff"
          />
        </svg>
      </div>
      */}
      <section id="sponsor" className={"bg-white"}>
        <h2 className="secTitle">
          <span className={"flex gap-2 m-auto items-center justify-center "}>
            <Image
              src={"/entt/yumephoto/icons/prize.svg"}
              alt=""
              width={15}
              height={20}
            />
            Prize
          </span>
          <p dangerouslySetInnerHTML={{ __html: `${prize.title}` }} />
          <div className={"mt-2 flex items-center justify-center gap-2"}>
            <p className={"text-xs"}>スポンサー企業</p>
            <Image src={prize.sponsor} alt={prize.alt} width={70} height={17} />
          </div>
        </h2>
        <Comingsoon />
        {/** 
        <div className="container m-auto max-w-[92%] lg:max-w-4xl">
          <Image
            className={"img prizeImg hidden md:block"}
            src={prize.src}
            alt={prize.alt}
            width={850}
            height={262}
            priority
          />
          <Image
            className={"img prizeImg md:hidden"}
            src={prize.SPsrc}
            alt={prize.alt}
            width={670}
            height={524}
            priority
          />
        </div>
        */}
        <p className={"text-center text-2xl my-6 md:my-12 Montserrat"}>
          and more ...
        </p>
      </section>
      <div className={"svg__container"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"svg__content"}
          viewBox="0 0 1366 100"
        >
          <path
            className={"w-full"}
            id="パス_286"
            data-name="パス 286"
            d="M1366,0H0V60s154.1,40,324.849,40S683,60,683,60s208.446-40,379.2-40S1366,60,1366,60Z"
            fill="#fff"
          />
        </svg>
      </div>
    </>
  );
};

export default Prize;
