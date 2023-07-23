import Image from 'next/image';
import Comingsoon from './Comingsoon';

const Ambassador = () => {
  return (
    <>
      <section id="ambassador" className={''}>
        <h2 className="secTitle">
          <span className={'flex justify-center gap-2'}>
            <Image src={'/entt/yumephoto/icons/ambassodors.svg'} alt="" width={20} height={20} />
            Ambassador
          </span>
          アンバサダー
        </h2>
        <Comingsoon />
        {/* <div className="container"></div> */}
      </section>
    </>
  );
};

export default Ambassador;
