import Image from 'next/image';

const Sponsor = ({ sponsors }: any) => {
  return (
    <section id="sponsor">
      <h2 className="secTitle">
        <span className={'block'}>sponsor</span>
        スポンサー企業一覧
      </h2>
      <div className="container flex flex-wrap justify-center gap-3 md:gap-4 m-auto max-w-[1100px]">
        {sponsors.map((image: any) => (
          <div key={image.id} className="sponsorList rounded-2xl overflow-hidden ">
            <Image
              className={'img sponsorImg'}
              src={image.src}
              alt={image.alt}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      <a href="https://yume-pj.com/project/sponsor/" className={'btn btnEntt'}>
        スポンサーさま募集中
        <Image
          className={'absolute right-[20px] top-1/2 -translate-y-1/2'}
          src={'/entt/entt_btn_arrow.svg'}
          alt={'▶︎'}
          width={26}
          height={26}
        />
      </a>
    </section>
  );
};

export default Sponsor;
