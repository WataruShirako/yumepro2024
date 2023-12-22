import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Prize = ({ prize }: any) => {
  return (
    <>
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
    </>
  );
};

export default Prize;
