import Image from "next/image";

const Project = ({ about }: any) => {
  return (
    <>
      <section id="project" className={"bg-white"}>
        <h2 className={`secTitle`}>
          <span className={`flex gap-2 justify-center Montserrat`}>
            <Image
              src={"/entt/yumephoto/icons/about.svg"}
              alt=""
              width={15}
              height={20}
            />
            Project
          </span>
          開催目的
        </h2>
        <div className="container m-auto max-w-[92%] sm:max-w-3xl text-center text-[14px] sm:text-[16px] sm:px-2">
          夢叶えるプロジェクトは、
          <br className="sm:hidden" />
          80億分の１の才能の輝き、 <br />
          というテーマのもと夢を持つ全ての人に
          <br className="sm:hidden" />
          夢を叶える為の機会を与え、 <br />
          応援、激励、そして支えるプロジェクトです。
          <br />
          <br />
          ジャンルは無し。
          <br />
          <br />
          あなたが一番自信のある才能を輝かせ、
          <br />
          『夢叶えるプロジェクト2024
          <br className="sm:hidden" /> スター誕生オーディション決勝{" "}
          <br className="sm:hidden" />
          in ニコニコ超会議2024』で
          <br />
          グランプリを勝ち取り、
          <br className="sm:hidden" />
          世界的スターへの第一歩を踏み出しましょう。
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

export default Project;
