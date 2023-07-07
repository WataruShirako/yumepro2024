import Image from 'next/image';

const News = () => {
  return (
    <>
      <section id={'ambassador'} className={''}>
        <h2 className={'secTitle'}>
          <span className={'block'}>news</span>
          新着情報
        </h2>
        <div className={'container m-auto max-w-5xl px-[4%]'}>
          <a
            className={
              'list flex flex-col md:flex-row justify-start text-sm py-5 border-solid border-[#D3D3D3] border-b'
            }
            href={''}
          >
            <p className={'date w-[15%] pb-2 md:pb-0 font-semibold'}>2022.12.29</p>
            <p className={'title w-[85%]'}>
              ミクチャユーザーによる営業妨害行為への株式会社クレドインターナショナルおよび株式会社DONUTSの対応について
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default News;
