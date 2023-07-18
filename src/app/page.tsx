import './globals.css';
import './top.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Prepare from '@/components/Prepare';
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

  return <Prepare />;

  // return (
  //   <>
  //     <Header />
  //     <main className={'bg-[#F7F7F7]'}>
  //       <section className={'fv'}>
  //         <Image
  //           src={'/top/top_fv_pc.webp'}
  //           alt={''}
  //           width={1366}
  //           height={690}
  //           className={'w-full hidden md:block'}
  //         />
  //         <Image
  //           src={'/top/top_fv_sp.webp'}
  //           alt={''}
  //           width={1366}
  //           height={690}
  //           className={'w-full block md:hidden'}
  //         />
  //       </section>
  //       <section className={'mt-12 md:mt-24'}>
  //         <h2 className={'text-center'}>
  //           <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
  //             <Image src={'/icons/whatweare.svg'} alt={''} width={16} height={20} />
  //             Yume project 2024 ?
  //           </span>
  //           <p className={'font-bold text-2xl md:text-3xl mt-1'}>
  //             夢叶えるプロジェクト
  //             <br className={'md:hidden'} />
  //             2024とは？
  //           </p>
  //         </h2>
  //         <div className={'container max-w-[92%] m-auto mt-8'}>
  //           <Image
  //             src={'/top/whatweare_img.webp'}
  //             alt={'夢叶えるプロジェクトとは？'}
  //             width={500}
  //             height={500}
  //             className={'rounded-2xl overflow-hidden'}
  //           />
  //           <div className="">
  //             <h3 className={'text-2xl font-semibold mt-8'}>
  //               テーマ「スタートアップ」
  //               <br />
  //               若者も大人もが夢に
  //               <br className={'md:hidden'} />
  //               チャレンジしやすい社会を
  //             </h3>
  //             <p className={'mt-8'}>
  //               「夢叶えるプロジェクト」は、10部門のエンタメビジネスコンテストで、各業界の夢を持つ人々を支援します。企画やピッチコンテストを通じて若者に訴求し、2023年3月27日に都内のホテルで授賞式を行います。
  //               <br />
  //               審査員は、各部門の代表となるスタートアップや若手起業家を選び、総額3000万円の資金を提供します。
  //               <br />
  //               さらに、ビジネス部門の副賞はシリコンバレー視察ツアー、エンタメ部門はスポンサー賞やスパ券などがあります。
  //             </p>
  //           </div>
  //         </div>
  //       </section>
  //       <section className={'mt-12 md:mt-24'}>
  //         <h2 className={'text-center'}>
  //           <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
  //             <Image src={'/icons/categories.svg'} alt={''} width={16} height={20} />
  //             Dream Categories
  //           </span>
  //           <p className={'font-bold text-2xl md:text-3xl mt-1'}>コンテスト部門一覧</p>
  //         </h2>
  //         <div
  //           className={'container max-w-[92%] md:max-w-lg m-auto mt-8 bg-white p-5 rounded-2xl '}
  //         >
  //           <h3 className={'relative flex items-center justify-start'}>
  //             <Image
  //               src={'/top/entt_symbol.svg'}
  //               alt={''}
  //               width={50}
  //               height={50}
  //               className={'w-[50px] md:w-[78px]'}
  //             />
  //             <Image
  //               src={'/top/entt_title.svg'}
  //               alt={'エンタメ部門'}
  //               width={113}
  //               height={18}
  //               className={'-ml-6 md:w-[150px] md:-ml-8'}
  //             />
  //           </h3>
  //           <div className={'flex justify-around mt-4 gap-6 '}>
  //             <Link href={'/project/entertainment/photo'} className={'text-center w-1/2'}>
  //               <Image
  //                 src={'/top/top_entt_enttcontest.webp'}
  //                 alt={'エンタメコンテスト'}
  //                 width={150}
  //                 height={150}
  //                 className={'rounded-lg shadow-md w-full'}
  //               />
  //               <p className={'text-xs font-semibold mt-2'}>エンタメコンテスト</p>
  //             </Link>
  //             <Link href={'/project/entertainment/photo'} className={'text-center w-1/2'}>
  //               <Image
  //                 src={'/top/top_entt_enttcontest.webp'}
  //                 alt={'スター誕生オーディション'}
  //                 width={150}
  //                 height={150}
  //                 className={'rounded-lg shadow-md w-full'}
  //               />
  //               <p className={'text-xs font-semibold mt-2'}>
  //                 スター誕生
  //                 <br className={'md:hidden'} />
  //                 オーディション
  //               </p>
  //             </Link>
  //           </div>
  //         </div>
  //       </section>
  //       <Cta />
  //       <section className={'introduce'}>
  //         <div className="container">

  //         </div>
  //       </section>
  //     </main>

  //     <Footer />
  //   </>
  // );
};

export default Home;
