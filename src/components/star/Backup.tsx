import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Backup = ({ sponsors }: any) => {
  return (
    <>
      <section id="backup" className={""}>
        <h2 className="secTitle">
          <span className={"block"}>Backup</span>
          後援
        </h2>
        <div className="container grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 px-5 mt-10 mx-auto md:max-w-4xl max-w-lg pb-10">
          <div className="item mx-auto">
            <Image
              className={"rounded-md"}
              src={"/busi/hyogo/sponsor01.jpg"}
              alt={"神戸市"}
              width={"200"}
              height={"200"}
            />
          </div>
          <div className="item mx-auto">
            <Image
              className={"rounded-md"}
              src={"/top/sponsor/kagoshimashi.png"}
              alt={"鹿児島市"}
              width={"200"}
              height={"200"}
            />
          </div>
          <div className="item mx-auto">
            <Image
              src={"/busi/kagawa/takamatsushi.jpg"}
              alt="高松市"
              width={"200"}
              height={"200"}
              className={"rounded-md"}
            />
          </div>
          <div className="item mx-auto">
            <Image
              src={"/busi/fukuoka/kitakyusyu.jpg"}
              alt="北九州市"
              width={"200"}
              height={"200"}
              className={"rounded-md"}
            />
          </div>
          <div className="item mx-auto">
            <Image
              src={"/busi/fukuoka/yukuhashi.jpg"}
              alt="行橋市"
              width={"200"}
              height={"200"}
              className={"rounded-md"}
            />
          </div>
          <div className="item mx-auto">
            <Image
              src={"/busi/miyagi/rihutyo.png"}
              alt="利府町"
              width={"200"}
              height={"200"}
              className={"rounded-md"}
            />
          </div>
          <div className="item mx-auto">
            <Image
              src={"/busi/miyagi/tumiki.png"}
              alt="tumiki"
              width={"200"}
              height={"200"}
              className={"rounded-md"}
            />
          </div>
        </div>
        <p className="text-center text-lg">and more...</p>
      </section>
    </>
  );
};

export default Backup;
