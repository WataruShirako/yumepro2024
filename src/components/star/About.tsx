import { Key } from "react";
import { ShipporiMincho } from "../../utils/fonts";
import { cinzel } from "../../utils/fonts";
import Image from "next/image";

const About = ({ about }: any) => {
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

      <section id="about" className={"bg-white"}>
        <h2 className={`secTitle`}>
          <span className={`flex gap-2 justify-center Montserrat`}>
            <Image
              src={"/entt/yumephoto/icons/about.svg"}
              alt=""
              width={15}
              height={20}
            />
            About
          </span>
          開催概要
        </h2>
        <div className="container m-auto max-w-[92%] lg:max-w-2xl">
          <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
            <p
              className={
                "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
              }
            >
              <span
                className={"px-2 py-1 bg-[#888888] text-white inline-block"}
              >
                地方予選
              </span>
            </p>
            <div
              className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
            >
              <p dangerouslySetInnerHTML={{ __html: `${about.sched}` }} />
            </div>
          </div>
          <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
            <p
              className={
                "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
              }
            >
              <span
                className={"px-2 py-1 bg-[#888888] text-white inline-block"}
              >
                参加資格
              </span>
            </p>
            <div
              className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
            >
              <p dangerouslySetInnerHTML={{ __html: `${about.status}` }} />
            </div>
          </div>
          <div className="list flex py-5 md:py-8 border-solid border-y border-[#485757] items-center justify-between">
            <p
              className={
                "w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8"
              }
            >
              <span
                className={"px-2 py-1 bg-[#888888] text-white inline-block"}
              >
                最終審査・授賞式
              </span>
            </p>
            <div
              className={"w-[75%]  text-xs md:text-sm leading-5 md:leading-8"}
            >
              <p dangerouslySetInnerHTML={{ __html: `${about.award}` }} />
            </div>
          </div>
        </div>
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

export default About;
