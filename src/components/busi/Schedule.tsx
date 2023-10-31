import Image from "next/image";

const contents = [
  {
    title: "地方予選",
    content: `2023年11月1日(水)~2024年3月31日(日)<br/>
    開催場所は<a href="#venue">こちら</a>`,
  },
  {
    title: "東京本選",
    content: `2024年4月28日（日）`,
  },
];

const Schedule = () => {
  return (
    <section className=" my-20 md:my-40">
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

      <div className="container m-auto px-5 md:px-0 md:max-w-2xl">
        {contents.map((item, index) => (
          <div
            key={index}
            className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-start justify-between "
          >
            <p className={"w-[100px] md:w-1/6 text-sm leading-5 md:leading-8"}>
              <span className={"px-2 text-white inline-block text-base"}>
                {item.title}
              </span>
            </p>
            <div className={"w-[75%] text-base leading-5 md:leading-8"}>
              <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
