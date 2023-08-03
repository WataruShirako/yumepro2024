import Image from 'next/image';
import Comingsoon from './Comingsoon';

const Ambassadors = () => {
  return (
    <section id="ambassodor" className="pt-12 md:pt-24">
      <h2 className={'text-center'}>
        <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
          <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
          Ambassodors
        </span>
        <p className={'font-bold text-2xl md:text-3xl mt-1'}>アンバサダー</p>
      </h2>
      <Comingsoon />
    </section>
  );
};

export default Ambassadors;
