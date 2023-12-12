import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Sponsor = ({ sponsors }: any) => {
  return (
    <>
      <div className="svg__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"svg__content top"}
          viewBox="0 0 1366 100"
        >
          <path
            id="パス_285"
            data-name="パス 285"
            d="M0,120H1366V60s-154.1-40-324.849-40S683,60,683,60s-208.446,40-379.2,40S0,60,0,60Z"
            transform="translate(0 -20)"
            fill="#fff"
          />
        </svg>
      </div>
      <section id="sponsor" className={"bg-white"}>
        <h2 className="secTitle">
          <span className={"block"}>Sponsor</span>
          スポンサー企業一覧
        </h2>
        <div className="container flex flex-wrap justify-center gap-3 md:gap-4 m-auto max-w-[1100px]">
          {/** 
        {sponsors.map((image: any) => (
          <div key={image.id} className="sponsorList rounded-2xl overflow-hidden ">
            <Image
              className={'img sponsorImg'}
              src={image.src}
              alt={image.alt}
              width={150}
              height={150}
            />
          </div>
        ))}
        */}
        </div>
        <Comingsoon />
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
      <div className="svg__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"svg__content under"}
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

export default Sponsor;
