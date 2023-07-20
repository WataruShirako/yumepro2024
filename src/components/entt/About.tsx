import { Key } from 'react';
import { ShipporiMincho } from '../../utils/fonts';
import { cinzel } from '../../utils/fonts';

const About = ({ about }: any) => {
  return (
    <section id="sponsor" className={''}>
      <h2 className={`secTitle ${ShipporiMincho.className} font-font-cinzel !pb-6`}>
        <span className={`block ${cinzel.className}`}>about</span>
        開催概要
      </h2>
      <div className="container m-auto max-w-[92%] lg:max-w-2xl">
        <div className="list flex py-8 border-solid border-t border-[#485757] items-center">
          <p className={'w-1/4 md:w-1/5'}>
            <span className={'px-2 py-1 bg-[#888888] text-white inline-block'}>応募期間</span>
          </p>
          <div className={'w-3/4 md:w-4/5 text-sm leading-8'}>
            <p dangerouslySetInnerHTML={{ __html: `${about.sched}` }} />
          </div>
        </div>
        <div className="list flex py-8 border-solid border-t border-[#485757] items-center">
          <p className={'w-1/4 md:w-1/5'}>
            <span className={'px-2 py-1 bg-[#888888] text-white inline-block'}>参加資格</span>
          </p>
          <div className={'w-3/4 md:w-4/5 text-sm leading-8'}>
            <p dangerouslySetInnerHTML={{ __html: `${about.status}` }} />
          </div>
        </div>
        <div className="list flex py-8 border-solid border-y border-[#485757] items-center">
          <p className={'w-1/4 md:w-1/5'}>
            <span className={'px-2 py-1 bg-[#888888] text-white inline-block'}>授賞式</span>
          </p>
          <div className={'w-3/4 md:w-4/5 text-sm leading-8'}>
            <p dangerouslySetInnerHTML={{ __html: `${about.award}` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
