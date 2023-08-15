import Image from 'next/image';
import Comingsoon from './Comingsoon';

const Sponsor = () => {
  return (
    <section id="sronsor" className="pt-12 md:pt-24">
      <h2 className={'text-center'}>
        <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
          <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
          Sponsors
        </span>
        <p className={'font-bold text-2xl md:text-3xl mt-1'}>スポンサー企業一覧</p>
      </h2>

      <div className="container text-center m-auto">
        <p className="mt-6 md:mt-12 font-semibold">メインスポンサー</p>
        <div className="mt-2">
          <Image
            src={'/top/sponsor/sakura_logo.jpg'}
            alt="sakura"
            width={150}
            height={150}
            className="rounded-2xl m-auto md:w-80"
          />
        </div>
      </div>

      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">スポンサー企業様</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-2.5 justify-center max-w-5xl mx-auto">
          <Image
            src={'/top/sponsor/zen_spa.png'}
            alt="sakura"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block "
          />
          <Image
            src={'/top/sponsor/an_spa.png'}
            alt="an_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/sanatio_spa.png'}
            alt="sanatio_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/sora_spa.png'}
            alt="sola_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/spa_solani.png'}
            alt="spa_solani"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/landmark_spa.png'}
            alt="landmark_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/la_villa.png'}
            alt="la_villa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/hammam_spa.png'}
            alt="hammam_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/inroom_spa.png'}
            alt="inroom_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
          <Image
            src={'/top/sponsor/fauchon.png'}
            alt="fauchon"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[190px] block"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
