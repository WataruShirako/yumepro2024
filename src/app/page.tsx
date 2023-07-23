import './globals.css';
import './top.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Prepare from '@/components/Prepare';
import Category from '@/components/top/Category';
import Cta from '@/components/top/Cta';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const enttCategory = [
    {
      id: 1,
      name: '夢フォトオーディション',
      path: '/project/entertainment/photo/',
    },
    {
      id: 2,
      name: 'リンシャンアイドルオーディション',
      path: '/project/entertainment/idol/',
    },
  ];

  return (
    <>
      <Header />
      <main className={'bg-[#F7F7F7]'}>
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
        <section className={'mt-12 md:mt-24'}>
          <h2 className={'text-center'}>
            <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
              <Image src={'/icons/whatweare.svg'} alt={''} width={16} height={20} />
              Yume project 2024 ?
            </span>
            <p className={'font-bold text-2xl md:text-3xl mt-1'}>
              夢叶えるプロジェクト
              <br className={'md:hidden'} />
              2024とは？
            </p>
          </h2>
          <div className={'container max-w-[92%] m-auto mt-8'}>
            <Image
              src={'/top/whatweare_img.webp'}
              alt={'夢叶えるプロジェクトとは？'}
              width={500}
              height={500}
              className={'rounded-2xl overflow-hidden'}
            />
            <div className="">
              <h3 className={'text-2xl font-semibold mt-8'}>
                テーマ「スタートアップ」
                <br />
                若者も大人もが夢に
                <br className={'md:hidden'} />
                チャレンジしやすい社会を
              </h3>
              <p className={'mt-8'}>
                「夢叶えるプロジェクト」は、10部門のエンタメビジネスコンテストで、各業界の夢を持つ人々を支援します。企画やピッチコンテストを通じて若者に訴求し、2023年3月27日に都内のホテルで授賞式を行います。
                <br />
                審査員は、各部門の代表となるスタートアップや若手起業家を選び、総額3000万円の資金を提供します。
                <br />
                さらに、ビジネス部門の副賞はシリコンバレー視察ツアー、エンタメ部門はスポンサー賞やスパ券などがあります。
              </p>
            </div>
          </div>
        </section>
        <Category />
        <Cta />
        <section className={'introduce'}>
          <div className="container"></div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
