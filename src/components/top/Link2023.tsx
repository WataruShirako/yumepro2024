import Image from 'next/image';

const Link2023 = () => {
  return (
    <a href="https://yume-pj.com" className={'block relative mt-12 md:mt-24'}>
      <div className={'max-w-[92%] lg:max-w-6xl m-auto rounded-2xl overflow-hidden relative'}>
        <Image
          src={'/top/2023_link.webp'}
          alt={''}
          className={'relative object-cover w-full'}
          width={1100}
          height={200}
        />
        <Image
          src={'/top/2023_link_text.svg'}
          alt={'夢叶えるプロジェクト2023はこちら'}
          className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
          width={330}
          height={75}
        />
      </div>
    </a>
  );
};

export default Link2023;
