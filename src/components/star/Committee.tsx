import Image from "next/image";
import Comingsoon from "./Comingsoon";
const lists = [
  {
    id: 1,
    name: " 早川周作",
    descri: `琉球アスティーダスポーツクラブ株式会社`,
    descri2: "会長",
    src: "/busi/okinawa/committee01.webp",
  },
];
const Committee = ({ committee }: any) => {
  return (
    <>
      <section id="committee" className={"bg-white"}>
        <h2 className="secTitle">
          <span className={"flex gap-2 justify-center"}>
            <Image
              src={"/entt/yumephoto/icons/committee.svg"}
              alt=""
              width={15}
              height={20}
            />
            Committee
          </span>
          審査委員会
        </h2>
        <Comingsoon />
        {/* 
        <div className="container px-5 grid  justify-center mb-10 gap-5 m-auto md:max-w-4xl items-start">
          {lists.map((list, index) => (
            <div
              key={index}
              className="item flex flex-col items-center justify-center"
            >
              <Image src={list.src} alt={""} width={300} height={300} />
              <p className="my-2 text-center font-bold text-xl">{list.name}</p>
              <p className="text-center text-[13px]">{list.descri}</p>
              <p className="text-center text-[13px]">{list.descri2}</p>
            </div>
          ))}

          <div className="item"></div>
        </div>
          */}
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

export default Committee;
