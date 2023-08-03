import Image from 'next/image';

const Comingsoon = () => {
  return (
    <div className="conteiner px-5">
      <Image
        src={'/top/top_comingsoon.webp'}
        alt={'coming soon...'}
        width={600}
        height={400}
        className="m-auto text-center mt-12 md:mt-12 w-full max-w-xl"
      />
    </div>
  );
};

export default Comingsoon;
