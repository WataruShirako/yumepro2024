import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Backup = ({ sponsors }: any) => {
  return (
    <>
      <section id="backup" className={""}>
        <h2 className="secTitle">
          <span className={"block"}>Backup</span>
          後援企業さま
        </h2>
        <div className="container grid grid-cols-2 gap-3 md:gap-5 px-5 mt-10 mx-auto md:max-w-4xl max-w-lg pb-10">
          <div className="item mx-auto">
            <Image
              className={"rounded-md"}
              src={"/busi/hyogo/sponsor01.webp"}
              alt={""}
              width={"150"}
              height={"150"}
            />
          </div>
          <div className="item mx-auto">
            <Image
              className={"rounded-md"}
              src={"/top/sponsor/kagoshimashi.png"}
              alt={"鹿児島市"}
              width={"150"}
              height={"150"}
            />
          </div>
        </div>
        <p className="text-center text-lg">and more...</p>
      </section>
    </>
  );
};

export default Backup;
