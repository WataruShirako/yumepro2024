import Image from "next/image";

const Fv = () => {
  return (
    <div>
      <picture className=" w-full">
        <source media="(min-width: 768px)" srcSet="/busi/osaka/top_pc.webp" />
        <source media="(min-width: 321px)" srcSet="/busi/osaka/top_sp.webp" />
        <Image
          src="/busi/osaka/top_sp.webp"
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
