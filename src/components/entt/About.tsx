import Image from 'next/image';
import { Key } from 'react';

const About = ({ about }: any) => {
  return (
    <section id="sponsor" className={''}>
      <h2 className="secTitle">
        <span className={'block'}>about</span>
        開催概要
      </h2>
      <div className="container m-auto max-w-[92%] lg:max-w-2xl">
        <div className="list flex py-8 border-solid border-t border-[#485757]">
          <p className={'w-1/4 md:w-1/5'}>応募期間</p>
          <div className={'w-3/4 md:w-4/5 text-sm leading-8'}>
            {about.sched.map((item: string, index: Key) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="list flex py-8 border-solid border-t border-[#485757]">
          <p className={'w-1/4 md:w-1/5'}>参加資格</p>
          <div className={'w-3/4 md:w-4/5 text-sm leading-8'}>
            {about.status.map((item: string, index: Key) => (
              <p key={index}>{item}</p>
            ))}
            <a href="#" className={'underline text-cyan-500'}>
              (リンクはこちら)
            </a>
          </div>
        </div>
        <div className="list flex py-8 border-solid border-t border-[#485757]">
          <p className={'w-1/4 md:w-1/5'}>審査基準</p>
          <div className={'w-3/4 md:w-4/5 text-sm leading-8'}>
            {about.judge.map((item: string, index: Key) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="list flex py-8 border-solid border-y border-[#485757]">
          <p className={'w-1/4 md:w-1/5'}>授賞式</p>
          <div className={'w-3/4 md:w-4/5 text-sm leading-8'}>
            {about.award.map((item: string, index: Key) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
