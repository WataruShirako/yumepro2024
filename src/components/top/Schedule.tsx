import Image from 'next/image';

const Schedule = () => {
  return (
    <section id="schedule">
      <h2 className={'text-center'}>
        <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
          <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
          Upcoming event
        </span>
        <p className={'font-bold text-2xl md:text-3xl mt-1'}>スケジュール</p>
      </h2>
      <div className="container flex max-w-[92%] md:max-w-[1100px] md:px-5 mx-auto gap-6 sm:gap-6 flex-col sm:flex-row  mt-12 md:mt-12">
        <div className="w-full sm:w-1/3 bg-white rounded-2xl relative h-56 text-center">
          <h5 className="Montserrat text-center pt-8 text-[#C52CFD]">Step.1</h5>
          <p className={'mt-5'}>
            各オーディションページ
            <br />
            よりエントリー
          </p>
          <p className="absolute bottom-0 w-full left-0 bg-[#485757] grid place-items-center text-white font-semibold py-5 text-2xl rounded-b-2xl">
            エントリー
          </p>
        </div>
        <Image
          src={'/top/flow_arrow_under.svg'}
          alt={''}
          width={15}
          height={22}
          className={'text-center items-center m-auto sm:-rotate-90'}
        />
        <div className="w-full sm:w-1/3 bg-white rounded-2xl relative h-56 text-center">
          <h5 className="Montserrat text-center pt-8 text-[#C52CFD]">Step.2</h5>
          <p className={'mt-5'}>オーディション一次審査</p>
          <p className="absolute bottom-0 w-full left-0 bg-[#485757] grid place-items-center text-white font-semibold py-5 text-2xl rounded-b-2xl">
            予選
          </p>
        </div>
        <Image
          src={'/top/flow_arrow_under.svg'}
          alt={''}
          width={15}
          height={22}
          className={'text-center items-center m-auto sm:-rotate-90'}
        />
        <div className="w-full sm:w-1/3 bg-white rounded-2xl relative h-56 text-center">
          <h5 className="Montserrat text-center pt-8 text-[#C52CFD]">Step.3</h5>
          <p className={'mt-5'}>オーディション最終審査</p>
          <p className="absolute bottom-0 w-full left-0 bg-[#485757] grid place-items-center text-white font-semibold py-5 text-2xl rounded-b-2xl">
            最終審査
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
