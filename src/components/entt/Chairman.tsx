import Image from 'next/image';

const Chairman = ({ chairman }: any) => {
  return (
    <section id="sponsor" className={''}>
      <h2 className="secTitle">
        <span className={'block'}>chairman</span>
        総合司会
      </h2>
      <div className="container m-auto max-w-[92%] lg:max-w-4xl">
        <div className="list flex flex-col md:flex-row justify-between">
          <Image
            className={'img prizeImg flex-[45%] hidden md:block'}
            src={chairman.src}
            alt={chairman.name}
            width={400}
            height={300}
            loading="lazy"
          />
          <div className={'flex-[45%]'}>
            <h4>{chairman.name}</h4>
            <h5>{chairman.pro}</h5>
            <p>{chairman.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
