'use client';

import Image from 'next/image';
import Comingsoon from './Comingsoon';
import Instagram from '../entt/Instagram';
import Link from 'next/link';

const auditions = [
  {
    name: '夢フォトオーディション',
    path: '/project/entertainment/photo',
    src: '/top/banner/yumephoto.png',
  },
  {
    name: '全国学生スタートアップアワード',
    path: '/project/business',
    src: '/top/banner/banner_business.png',
  },
  {
    name: '夢プロショートドラマオーディション',
    path: '',
    src: '/top/banner/banner_drama.png',
  },
];

const Banner = () => {
  return (
    <>
      <section id="audition" className="pt-12 md:pt-24">
        <h2 className={'text-center'}>
          <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
            <Image src={'/icons/audition.svg'} alt={''} width={17} height={20} />
            Audition
          </span>
          <p className={'font-bold text-2xl md:text-3xl mt-1'}>オーディション一覧</p>
        </h2>
        <div
          className={'container m-auto max-w-6xl px-[4%] mt-6 flex flex-wrap gap-3 justify-between'}
        >
          {auditions.map((audi: any, index: number) => {
            if (audi.path !== '') {
              return (
                <Link
                  href={audi.path}
                  className={'md:w-[calc(100%/3-2%)] hover:brightness-90'}
                  key={index}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Image src={audi.src} alt={audi.name} width={350} height={115} />
                </Link>
              );
            } else {
              return (
                <div className={'md:w-[calc(100%/3-2%)]'} key={index}>
                  <Image src={audi.src} alt={audi.name} width={350} height={115} />
                </div>
              );
            }
          })}
        </div>
      </section>
      {/* <Instagram /> */}
    </>
  );
};

export default Banner;
