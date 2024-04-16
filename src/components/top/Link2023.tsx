import Image from "next/image";

const Link2023 = () => {
  return (
    <a
      href="http://www.2023.yume-pj.com/"
      className={"block relative mt-12 md:mt-24 hover:brightness-90 pb-10"}
    >
      <div
        className={
          " md:max-w-4xl mx-auto  overflow-hidden relative p-5 md:h-auto"
        }
      >
        <Image
          src={"/top/2023_link2.jpg"}
          alt={""}
          className={"relative  w-full rounded-2xl"}
          width={1100}
          height={200}
        />
      </div>
    </a>
  );
};

export default Link2023;
