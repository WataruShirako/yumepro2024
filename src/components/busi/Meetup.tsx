import Image from 'next/image';

const contents = [
  {
    title: '開催日',
    content: `2023年3月27日(月)20:00〜22:00`,
  },
  {
    title: '開催場所',
    content: `某有名ホテル`,
  },
  {
    title: '参加費用',
    content: `2万円`,
  },
];

const Meetup = () => {
  return (
    <section>
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={'/busi/business_title_circle.svg'}
            width={128}
            height={128}
            alt=""
            className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all">Meetup</p>
        </div>
        <span className="relative mt-2 md:mt-6">夢プロ大交流会</span>
      </h2>
      <div className="container px-5 mt-10">
        <Image src={'/busi/meetup.webp'} alt={''} width={500} height={500} />
        <div>
          <h3>来場人数300人規模 大物有名起業家が多数参加</h3>
          <p>
            SDGs、地方創生に関心が高い、学びが意欲的で成長意欲の高い起業家が集まる交流会です。
            <br />
            同時開催でピッチコンテストを開催しているため、有名起業家の審査員が多数来場。
            <br />
            投資家なども多数来場します。シークレットで有名経営者の参加予定。
            <br />
            ビジネスを成長させる運命の出会いを求めているビジネスパーソンの方はぜひご参加ください。
          </p>
        </div>
      </div>
      <h2 className={'text-2xl container px-5'}>イベント概要</h2>
      <div className="container m-auto px-5 lg:max-w-2xl">
        {contents.map((item, index) => (
          <div
            key={index}
            className="list flex py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] items-center justify-between"
          >
            <p className={'w-1/4 md:w-1/5 text-sm leading-5 md:leading-8'}>
              <span className={'px-2 py-1 text-white inline-block'}>{item.title}</span>
            </p>
            <div className={'w-[75%] text-sm leading-5 md:leading-8'}>
              <p dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meetup;
