import Image from 'next/image';

const Fv = () => {
  return (
    <section className={'fv'}>
      <Image
        src={'/top/top_fv_pc.webp'}
        alt={''}
        width={1366}
        height={690}
        className={'w-full hidden md:block'}
      />
      <Image
        src={'/top/top_fv_sp.webp'}
        alt={''}
        width={1366}
        height={690}
        className={'w-full block md:hidden'}
      />
    </section>
  );
};

export default Fv;
