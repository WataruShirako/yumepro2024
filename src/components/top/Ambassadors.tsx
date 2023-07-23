import Image from 'next/image';
import Comingsoon from './Comingsoon';

const Ambassadors = () => {
  return (
    <section>
      <h2 className={'text-center'}>
        <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
          <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
          Ambassadors
        </span>
        <p className={'font-bold text-2xl md:text-3xl mt-1'}>アンバサダー</p>
      </h2>
      <div className="container">
        <Comingsoon />
      </div>
    </section>
  );
};

export default Ambassadors;
