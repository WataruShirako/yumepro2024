import Image from 'next/image';

const Sponsor = () => {
  return (
    <section className={'my-16 md:my-20'}>
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={'/busi/business_title_circle.svg'}
            width={128}
            height={128}
            alt=""
            className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all">Sponsor</p>
        </div>
        <span className="relative mt-2 md:mt-6">スポンサー</span>
      </h2>
      <div className="container grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 px-4 mt-10">
        <div className="item">
          <Image
            className={'rounded-md'}
            src={'/busi/comingsoon.webp'}
            alt={''}
            width={'150'}
            height={'150'}
          />
        </div>
        <div className="item">
          <Image
            className={'rounded-md'}
            src={'/busi/comingsoon.webp'}
            alt={''}
            width={'150'}
            height={'150'}
          />
        </div>
        <div className="item">
          <Image
            className={'rounded-md'}
            src={'/busi/comingsoon.webp'}
            alt={''}
            width={'150'}
            height={'150'}
          />
        </div>
      </div>
      <a href="" className="button">
        スポンサー様募集
      </a>
    </section>
  );
};

export default Sponsor;
