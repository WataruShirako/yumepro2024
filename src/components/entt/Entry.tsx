import Image from 'next/image';

const Entry = () => {
  return (
    <>
      <div className={'svg__container'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'svg__content top'}
          viewBox="0 0 1366 100"
        >
          <path
            id="パス_285"
            data-name="パス 285"
            d="M0,120H1366V60s-154.1-40-324.849-40S683,60,683,60s-208.446,40-379.2,40S0,60,0,60Z"
            transform="translate(0 -20)"
            fill="#252525"
          />
        </svg>
      </div>
      <section id="entry" className={'bg-[#252525]'}>
        <h2 className="secTitle">
          <span className={'flex justify-center gap-2'}>
            <Image src={'/entt/yumephoto/icons/entry.svg'} alt="" width={15} height={20} />
            entry
          </span>
          応募方法
        </h2>
        <div className="ctaBtnArea flex flex-col gap-8 md:flex-row items-center max-w-5xl m-auto container">
          <div className="list relative bg-[#EFEFEF] ShipporiMincho mx-auto w-[92%] md:w-1/3 max-w-full">
            <span className={'absolute top-4 left-4 text-6xl opacity-10'}>01</span>
            <h5 className={'text-xl text-center pt-10 w-[]'}>
              夢叶えるプロジェクトの
              <br />
              Instagramをフォロー
            </h5>
            <Image
              className={'mt-10 mx-auto'}
              src={'/entt/yumephoto/entry/entry_1.png'}
              alt={''}
              width={320}
              height={300}
            />
          </div>
          <div className="list relative bg-[#EFEFEF] ShipporiMincho mx-auto w-[92%] md:w-1/3 max-w-full">
            <span className={'absolute top-4 left-4 text-6xl opacity-10'}>02</span>
            <h5 className={'text-xl text-center pt-10 w-[]'}>
              「#夢フォト2024」をつけて
              <br />
              写真をInstagramに投稿
            </h5>
            <Image
              className={'mt-10 mx-auto'}
              src={'/entt/yumephoto/entry/entry_2.png'}
              alt={''}
              width={320}
              height={300}
            />
          </div>
          <div className="list relative bg-[#EFEFEF] ShipporiMincho mx-auto w-[92%] max-w-full md:w-1/3 ">
            <span className={'absolute top-4 left-4 text-6xl opacity-10'}>03</span>
            <h5 className={'text-xl text-center pt-10 w-[]'}>
              受賞候補者にはDMにて
              <br />
              ご連絡いたします
            </h5>
            <Image
              className={'mt-10 mx-auto'}
              src={'/entt/yumephoto/entry/entry_3.png'}
              alt={''}
              width={320}
              height={300}
            />
          </div>
        </div>
        <p className={'text-center text-white mt-8'}>Instagram公式アカウントはこちら</p>
        <a
          href={'https://instagram.com/yumekanaeru_project'}
          className={
            'bg-[#485757] w-72 flex items-center justify-center col-start-auto rounded-full m-auto text-white py-1 mt-4 hover:opacity-60'
          }
        >
          @yumekanaeru_project
        </a>
      </section>
      <div className="svg__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'svg__content under'}
          viewBox="0 0 1366 100"
        >
          <path
            id="パス_286"
            data-name="パス 286"
            d="M1366,0H0V60s154.1,40,324.849,40S683,60,683,60s208.446-40,379.2-40S1366,60,1366,60Z"
            fill="#252525"
          />
        </svg>
      </div>
    </>
  );
};

export default Entry;
