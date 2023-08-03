import Image from 'next/image';

const Entry = () => {
  return (
    <section id="entry" className="pt-12 md:pt-24">
      <h2 className={'text-center'}>
        <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
          <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
          Entry conditions
        </span>
        <p className={'font-bold text-2xl md:text-3xl mt-1'}>エントリー資格</p>
      </h2>
      <div className="container bg-white text-center max-w-[92%] mx-auto md:max-w-2xl py-8 px-5 lg:py-10 rounded-2xl mt-8 lg:mt-10">
        <p>
          ・日本国内に在住の夢を持った全ての方
          <br />
          ・2024年4月（詳細未定）に開催される決勝戦・授賞式に参加できる方
        </p>
      </div>
    </section>
  );
};

export default Entry;
