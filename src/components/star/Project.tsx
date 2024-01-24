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
        <div className="container m-auto max-w-[92%] lg:max-w-2xl">
          日本最大級エンタメオーディションを開催。
          <br />
          地方からスターを発掘するべく「夢プロスターオーディション」と
          アイドル・声優などあらゆる業界別エンタメオーディションを実施します。
          <br />
          予選は地方予選および配信や動画、書類などを使って実施し、最終審査・授賞式をニコニコ超会議で実施します。
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
