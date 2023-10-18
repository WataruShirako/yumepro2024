import { Key } from 'react';
import { ShipporiMincho } from '../../utils/fonts';
import { cinzel } from '../../utils/fonts';
import Image from 'next/image';

const About = ({ about }: any) => {
  return (
    <section id="about" className={''}>
      <h2 className={`secTitle`}>
        <span className={`flex gap-2 justify-center Montserrat`}>
          <Image src={'/entt/yumephoto/icons/about.svg'} alt="" width={15} height={20} />
          About
        </span>
        開催概要
      </h2>
      <div className="container m-auto max-w-[92%] lg:max-w-2xl">
        <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
          <p className={'w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8'}>
            <span className={'px-2 py-1 bg-[#888888] text-white inline-block'}>エントリー期間</span>
          </p>
          <div className={'w-[75%]  text-xs md:text-sm leading-5 md:leading-8'}>
            <p dangerouslySetInnerHTML={{ __html: `${about.sched}` }} />
          </div>
        </div>
        <div className="list flex py-5 md:py-8 border-solid border-t border-[#485757] items-center justify-between">
          <p className={'w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8'}>
            <span className={'px-2 py-1 bg-[#888888] text-white inline-block'}>参加資格</span>
          </p>
          <div className={'w-[75%]  text-xs md:text-sm leading-5 md:leading-8'}>
            <p dangerouslySetInnerHTML={{ __html: `${about.status}` }} />
          </div>
        </div>
        <div className="list flex py-5 md:py-8 border-solid border-y border-[#485757] items-center justify-between">
          <p className={'w-1/4 md:w-1/5 text-xs md:text-sm leading-5 md:leading-8'}>
            <span className={'px-2 py-1 bg-[#888888] text-white inline-block'}>
              最終審査・授賞式
            </span>
          </p>
          <div className={'w-[75%]  text-xs md:text-sm leading-5 md:leading-8'}>
            <p dangerouslySetInnerHTML={{ __html: `${about.award}` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
