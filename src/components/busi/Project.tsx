import Image from 'next/image';

const Project = () => {
  return (
    <>
      <section className="project my-16 md:my-20">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={'/busi/business_title_circle.svg'}
              width={128}
              height={128}
              alt=""
              className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative">Project</p>
          </div>
          <span className="relative mt-3 md:mt-6">ビジネスピッチコンテストとは？</span>
        </h2>
        <p className="container px-5">
          ビジネスに特化し、最新の技術や話題のテーマから、今後次世代を牽引する起業家、事業家たちが３分間のピッチコンテストを行います。
          参加者は110部問の各カテゴリーから1テーマ選出し、それぞれのテーマにたいしての想いや考えを披露していただきます。
          部門優勝者には、シリコンバレー旅行券などの豪華景品をプレゼント。
          次世代を担うチャレンジャーを募集します。
        </p>
        <div className="step">
          <div className="item">
            <div className="step1"></div>
            <div className="step1"></div>
            <div className="step1"></div>
            <div className="step1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
