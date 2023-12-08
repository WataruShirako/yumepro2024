import Image from "next/image";

const contents = [
  {
    title: "開催日",
    content: `2024年1月20日(土)`,
  },
  {
    title: "会場",
    content: `鹿児島市民文化ホール`,
  },
];

const Schedule = () => {
  return (
    <section className="">
      <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all montserrat">SCHEDULE</p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
          開催日程
        </p>
      </h2>

      <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
        {contents.map((item, index) => (
          <div
            key={index}
            className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-center justify-between"
          >
            <p className={"w-[100px] md:w-1/5"}>
              <span className={"px-2 py-1 text-white text-base"}>
                {item.title}
              </span>
            </p>
            <div className={"w-[75%] text-base"}>
              <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
