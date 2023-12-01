import Image from "next/image";

const Fv = () => {
  return (
    <div>
      <picture className=" w-full">
        <source
          media="(min-width: 768px)"
          srcSet="/busi/shizuoka/top_pc.webp"
        />
        <source
          media="(min-width: 321px)"
          srcSet="/busi/shizu9oka/top_sp.webp"
        />
        <Image
          src="/busi/shizuoka/top_sp.webp"
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
