import Image from "next/image";

const Fv = () => {
  return (
    <div>
      <picture className=" w-full">
        <source media="(min-width: 768px)" srcSet="/busi/busi_top_pc1.jpg" />
        <source media="(min-width: 321px)" srcSet="/busi/busi_top_sp1.jpg" />
        <Image
          src="/busi/busi_top_sp1.jpg"
          alt="IAキャラクター"
          width={375}
          height={750}
          className="w-full"
        />
      </picture>
    </div>
  );
};

export default Fv;
