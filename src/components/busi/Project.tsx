import Image from "next/image";

const Project = () => {
  return (
    <>
      <section className="project my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative montserrat">Project</p>
          </div>
          <p className="relative mt-3 md:mt-6 mb-20 md:text-[32px] text-2xl">
            ビジネスピッチコンテストとは？
          </p>
        </h2>
        <p className="container text-left mx-auto px-5 md:px-0 md:max-w-2xl pb-20 text-[15px] leading-[1.3rem]">
          ビジネスに特化し、最新の技術や話題のテーマから、今後次世代を牽引する起業家、事業家たちが３分間のピッチコンテストを行います。
          <br />
          参加者は、それぞれのテーマにたいしての想いや考えを披露していただきます。
          <br />
          優勝者には、起業資金として1000万をプレゼント。次世代を担うチャレンジャーを募集します。
          <br />
        </p>
        <div className="md:flex md:space-x-4 justify-center md:max-w-6xl mx-auto">
          <div className="bg-opacity-5 bg-white md:w-80 md:h-38 p-5 md:mb-20 my-5 mr-14 md:mr-0 ml-5 md:ml-0">
            <p className="text-lg font-bold mb-2 Montserrat">STEP.1</p>
            <p className="text-sm">
              エントリーフォーム記入 <br />
            </p>
          </div>
          <div className="bg-opacity-5 bg-white md:w-80 md:h-38 p-5 md:mt-20 my-5 ml-14 mr-5 md:mr-0">
            <p className="text-lg font-bold mb-2 Montserrat">STEP.2</p>
            <p className="text-sm">
              書類審査通過者へ、事務局より地方予選のオンラインまたは対面審査のご案内
            </p>
          </div>
          <div className="bg-opacity-5 bg-white md:w-80 md:h-38 p-5 md:mb-20 my-5 mr-14 md:mr-0 ml-5 md:ml-0">
            <p className="text-lg font-bold mb-2 Montserrat">STEP.3</p>
            <p className="text-sm">地方予選オンラインまたは対面審査</p>
          </div>
          <div className="bg-opacity-5 bg-white md:w-80 md:h-38 p-5 md:mt-20 my-5 ml-14 mr-5 md:mr-0">
            <p className="text-lg font-bold mb-2 Montserrat">STEP.4</p>
            <p className="text-sm">
              オンラインまたは対面審査通過者に、東京本戦審査出場のご案内
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
