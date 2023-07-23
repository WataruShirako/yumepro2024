import Image from 'next/image';

const Comingsoon = () => {
  return (
    <Image
      src={'/top/top_comingsoon.webp'}
      alt={'coming soon...'}
      width={600}
      height={400}
      className="m-auto text-center mt-12 md:mt-24 w-full max-w-xl"
    />
  );
};

export default Comingsoon;
