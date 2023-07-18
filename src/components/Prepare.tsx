import Image from 'next/image';
import Link from 'next/link';

const Prepare = () => {
  return (
    <section className={'mt-[30vh] text-center'}>
      <Image src={'/logo_black.svg'} alt={'logo'} width={98} height={103} className={'m-auto'} />
      <p className={'mt-8'}>このページは現在準備中です。</p>
      <div
        className={
          'border-black border-solid rounded-lg border w-full py-10 container max-w-[92%] md:max-w-5xl mx-auto mt-12'
        }
      >
        <h2 className={'font-bold'}>開催中のコンテスト</h2>
        <ul className={'mt-4'}>
          <li>
            <Link href="/project/entertainment/photo" className={'underline hover:opacity-50'}>
              ・夢フォトオーディション
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Prepare;
