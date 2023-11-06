import Image from "next/image";

const lists = [
  {
    id: 1,
    name: " 早川周作",
    descri: `琉球アスティーダ`,
    descri2: "会長",
    src: "/busi/okinawa/committee01.webp",
  },
];

const Committee = () => {
  return (
    <>
      <section className="committee my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all montserrat ">Committee</p>
          </div>
          <p className="relative mt-2 md:mt-6 mb-20 md:text-[32px] text-2xl">
            審査委員会
          </p>
        </h2>

        <div className="container px-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-center mb-10 gap-5 m-auto md:max-w-4xl items-start">
          {lists.map((list, index) => (
            <div
              key={index}
              className="item flex flex-col items-center justify-center"
            >
              <Image src={list.src} alt={""} width={200} height={200} />
              <p className="my-2 text-center font-bold text-xl">{list.name}</p>
              <p className="text-center text-[13px]">{list.descri}</p>
              <p className="text-center text-[13px]">{list.descri2}</p>
            </div>
          ))}

          <p className="text-center text-lg">and more...</p>
        </div>
      </section>
    </>
  );
};

export default Committee;
