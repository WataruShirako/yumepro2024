import Image from 'next/image';

const Sns = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 100">
        <path
          id="パス_285"
          data-name="パス 285"
          d="M0,120H1366V60s-154.1-40-324.849-40S683,60,683,60s-208.446,40-379.2,40S0,60,0,60Z"
          transform="translate(0 -20)"
          fill="#CBD6D0"
        />
      </svg>
      <section id="ambassador" className={'bg-[#CBD6D0]'}>
        <h2 className="secTitle">
          夢叶えるプロジェクト
          <br className={'lg:hidden'} />
          公式チャンネル
        </h2>
        <p className={'text-center'}>フォロー、友達登録で最新情報をGETしよう</p>
        <div className={'container m-auto mt-12'}>
          <div className={'list flex gap-4  md:gap-20 justify-center'}>
            <a href={''}>
              <Image
                className={'rounded-[18px] shadow-md hover:shadow-none'}
                src={'/icon_line.svg'}
                alt={'line'}
                width={80}
                height={80}
              />
            </a>
            <a href={''}>
              <Image
                className={'rounded-[18px] shadow-md hover:shadow-none'}
                src={'/icon_tiktok.svg'}
                alt={'tiktok'}
                width={80}
                height={80}
              />
            </a>
            <a href={''}>
              <Image
                className={'rounded-[18px] shadow-md hover:shadow-none'}
                src={'/icon_instagram.svg'}
                alt={'instagram'}
                width={80}
                height={80}
              />
            </a>
            <a href={''}>
              <Image
                className={'rounded-[18px] shadow-md hover:shadow-none transition-all'}
                src={'/icon_twitter.svg'}
                alt={'twitter'}
                width={80}
                height={80}
              />
            </a>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 100">
        <path
          id="パス_286"
          data-name="パス 286"
          d="M1366,0H0V60s154.1,40,324.849,40S683,60,683,60s208.446-40,379.2-40S1366,60,1366,60Z"
          fill="#CBD6D0"
        />
      </svg>
    </>
  );
};

export default Sns;
