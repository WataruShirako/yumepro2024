import Image from 'next/image';

const Comingsoon = () => {
  return (
    <Image
      className={'container max-w-[92%]  md:max-w-[800px] mx-auto'}
      src={'/entt/entt_comingsoon.jpg'}
      alt={'coming soon ...'}
      width={850}
      height={318}
    />
  );
};

export default Comingsoon;
