import Image from "next/image";

const Sponsor = () => {
  return (
    <section className={"my-20 md:my-40"}>
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all">Sponsor</p>
        </div>
        <span className="relative mt-2 md:mt-6">スポンサー</span>
      </h2>
      <div className="container grid grid-cols-3 md:grid-cols-5 gap-10 px-4 mt-10 mx-auto md:max-w-5xl pb-10">
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor01.jpg"}
            alt={"TKP"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor02.jpg"}
            alt={"wiz"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor03.jpg"}
            alt={"CRED"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor04.jpg"}
            alt={"KIRIN"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor05.jpg"}
            alt={"DYM"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor06.jpg"}
            alt={"TECOTEC"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor07.jpg"}
            alt={"17LIVE"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor08.jpg"}
            alt={"ミクチャ"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor09.jpg"}
            alt={"USTUS"}
            width={"150"}
            height={"150"}
          />
        </div>
        <div className="item">
          <Image
            className={"rounded-md"}
            src={"/busi/sponsor10.jpg"}
            alt={"USEN"}
            width={"150"}
            height={"150"}
          />
        </div>
      </div>
      <a href="" className="button text-xl font-bold">
        スポンサー様募集
      </a>
    </section>
  );
};

export default Sponsor;
