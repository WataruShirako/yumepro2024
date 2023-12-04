import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Chairman = ({ chairman }: any) => {
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
          <span className={"flex justify-center gap-2"}>
            <Image
              src={"/entt/yumephoto/icons/chairman.svg"}
              alt=""
              width={17}
              height={20}
            />
            Chairman
          </span>
          総合司会
        </h2>
        <Comingsoon />
        {/* <div className="container m-auto max-w-[92%] lg:max-w-4xl">
        <div className="list flex flex-col md:flex-row justify-between">
          <Image
            className={'img prizeImg flex-[45%] hidden md:block'}
            src={chairman.src}
            alt={chairman.name}
            width={400}
            height={300}
            loading="lazy"
          />
          <div className={'flex-[45%]'}>
            <h4>{chairman.name}</h4>
            <h5>{chairman.pro}</h5>
            <p>{chairman.text}</p>
          </div>
        </div>
      </div> */}
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

export default Chairman;
