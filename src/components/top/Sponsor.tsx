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
            className="rounded-2xl m-auto md:w-52"
          />
        </div>
      </div>

      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">スポンサー企業さま</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-2.5 justify-center max-w-3xl mx-auto">
          <Image
            src={'/top/sponsor/zen_spa.jpg'}
            alt="sakura"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block "
          />
          <Image
            src={'/top/sponsor/an_spa.jpg'}
            alt="an_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/sanatio_spa.jpg'}
            alt="sanatio_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/sora_spa.jpg'}
            alt="sola_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/spa_solani.jpg'}
            alt="spa_solani"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/landmark_spa.jpg'}
            alt="landmark_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/la_villa.jpg'}
            alt="la_villa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/hammam_spa.jpg'}
            alt="hammam_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/inroom_spa.jpg'}
            alt="inroom_spa"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
          <Image
            src={'/top/sponsor/fauchon.jpg'}
            alt="fauchon"
            width={80}
            height={80}
            className="rounded-2xl w-[calc(100%/4_-_4px)] md:w-[130px] block"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
