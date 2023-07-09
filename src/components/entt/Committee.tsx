import Image from 'next/image';
import Comingsoon from './Comingsoon';

const Committee = ({ committee }: any) => {
  return (
    <section id="committee" className={''}>
      <h2 className="secTitle">
        <span className={'block'}>committee</span>
        審査委員
      </h2>
      <Comingsoon />
      {/* <div className="container m-auto max-w-[92%] lg:max-w-4xl">
        {committee.map((committee: any, index: any) => (
          <div className="list flex flex-col md:flex-row justify-between items-start" key={index}>
            <Image
              className={'prizeImg m-auto md:ml-0 md:w-[45%] '}
              src={committee.src}
              alt={committee.name}
              width={400}
              height={300}
              loading="lazy"
            />
            <div className={'m-auto mt-4 md:mt-0 md:mr-0 md:w-[45%]'}>
              <h4 className={'text-2xl pb-4 md:pb-8 ShipporiMincho text-center md:text-left'}>
                {committee.name}
              </h4>
              <h5 className={'text-xl pb-4 md:pb-8 ShipporiMincho text-center md:text-left'}>
                {committee.pro}
              </h5>
              <p className={'text-sm leading-loose'}>{committee.text}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Committee;
