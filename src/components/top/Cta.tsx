import Image from 'next/image';

const Cta = () => {
  return (
    <section
      id="cta"
      className={
        'text-center max-w-[92%] m-auto mt-12 rounded-2xl overflow-hidden text-white py-12'
      }
    >
      <h3 className={'text-2xl font-semibold'}>エントリーはこちらから</h3>
      <div className="btnArea">
        <p className={'mt-6'}>
          エンタメ / ビジネス部門どちらも
          <br />
          LINEからご参加ください。
        </p>
        <div className={'flex items-end justify-center gap-5 md:gap-10 flex-col mt-12'}>
          <div className="btn bg-[#06C755] rounded-2xl w-full h-16 max-w-[85%] m-auto grid place-items-center text-white font-semibold md:text-xl relative">
            <Image
              src={'/top/cta_btn_top_text.svg'}
              alt={''}
              width={225}
              height={12.79}
              className={'absolute -top-4 left-auto right-auto'}
            />
            LINEでエントリーする
            <Image
              src={'/top/arrow_white.svg'}
              alt={'▶︎'}
              width={8.45}
              height={12.45}
              className={'absolute top-auto bottom-auto right-4'}
            />
          </div>
          <div className="btn bg-gradient-to-bl from-[#254DB1] to-[#C52CFD] rounded-2xl  w-full h-16 max-w-[85%] m-auto grid place-items-center text-white font-semibold md:text-xl relative">
            スポンサーさま募集
            <Image
              src={'/top/arrow_white.svg'}
              alt={'▶︎'}
              width={8.45}
              height={12.45}
              className={'absolute top-auto bottom-auto right-4'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
