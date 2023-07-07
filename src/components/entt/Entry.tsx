import Image from 'next/image';

const Entry = () => {
  return (
    <>
      <div className="svg__container">
        <svg xmlns="http://www.w3.org/2000/svg" className={'svg__content'} viewBox="0 0 1366 100">
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
        <h2 className="secTitle">エントリー受付中</h2>
        <div className="ctaBtnArea flex flex-col gap-8 md:flex-row items-end max-w-4xl m-auto">
          <a href="" className={'btn btnEntt'}>
            <Image
              className={'absolute right-auto -top-[24px]'}
              src={'/entt/btn_line_pre.svg'}
              alt={'▶︎'}
              width={273}
              height={16.5}
            />
            LINEで応募する
            <Image
              className={'absolute right-[20px] top-1/2 -translate-y-1/2'}
              src={'/entt/entt_btn_arrow.svg'}
              alt={'▶︎'}
              width={26}
              height={26}
            />
          </a>
          <a href="" className={'btn btnEntt'}>
            <Image
              className={'absolute right-auto -top-[24px]'}
              src={'/entt/btn_spo_pre.svg'}
              alt={'▶︎'}
              width={219}
              height={16.5}
            />
            スポンサー応募はこちら
            <Image
              className={'absolute right-[20px] top-1/2 -translate-y-1/2'}
              src={'/entt/entt_btn_arrow.svg'}
              alt={'▶︎'}
              width={26}
              height={26}
            />
          </a>
        </div>
      </section>
      <div className="svg__container">
        <svg xmlns="http://www.w3.org/2000/svg" className={'svg__content'} viewBox="0 0 1366 100">
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
