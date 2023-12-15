import Image from "next/image";

const Fv = () => {
  return (
    <div>
      <picture className=" w-full">
        <source media="(min-width: 768px)" srcSet="/busi/kagawa/top_pc.jpg" />
        <source media="(min-width: 321px)" srcSet="/busi/kagawa/top_sp.jpg" />
        <Image
          src="/busi/kagawa/top_sp.jpg"
          alt=""
          width={375}
          height={750}
          className="w-full"
        />
      </picture>
    </div>
  );
};

export default Fv;
