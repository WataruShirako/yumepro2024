import Image from "next/image";

const Entry = () => {
  return (
    <>
      {/* 
      <div className={"svg__container"}>
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
            fill="#252525"
          />
        </svg>
        
      </div>
      */}
      <section id="entry" className={""}>
        <h2 className="secTitle text-white">
          <span className={"flex justify-center gap-2 items-center "}>
            <Image
              src={"/entt/yumephoto/icons/entry.svg"}
              alt=""
              width={15}
              height={20}
            />
            Entry
          </span>
          応募方法
        </h2>
      </section>
      {/* 
      <div className={"svg__container"}>
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
            fill="#252525"
          />
        </svg>
        
      </div>
      */}
    </>
  );
};

export default Entry;
