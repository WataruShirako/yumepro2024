import Image from 'next/image';
import Link from 'next/link';

const Category = () => {
  return (
    <section className={'mt-12 md:mt-24'}>
      <h2 className={'text-center'}>
        <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
          <Image src={'/icons/categories.svg'} alt={''} width={16} height={20} />
          Dream Categories
        </span>
        <p className={'font-bold text-2xl md:text-3xl mt-1'}>コンテスト部門一覧</p>
      </h2>
      <div className="flex gap-2 md:gap-12 flex-col lg:flex-row mt-12 lg:max-w-6xl mx-auto lg:justify-center">
        {/* エンタメ部門 */}
        <div
          className={
            'container max-w-[92%] md:max-w-lg m-auto lg:m-0 bg-white p-5 lg:py-8 lg:px-8 rounded-2xl '
          }
        >
          <h3 className={'relative flex items-center justify-start lg:-translate-x-4'}>
            <Image
              src={'/top/entt_symbol.svg'}
              alt={''}
              width={50}
              height={50}
              className={'w-[50px] md:w-[78px]'}
            />
            <Image
              src={'/top/entt_title.svg'}
              alt={'エンタメ部門'}
              width={113}
              height={18}
              className={'-ml-6 md:w-[150px] md:-ml-8'}
            />
          </h3>
          <div className={'flex justify-around mt-4 gap-6 '}>
            <Link href={'/project/entertainment/photo'} className={'text-center w-1/2'}>
              <Image
                src={'/top/top_entt_enttcontest.webp'}
                alt={'エンタメコンテスト'}
                width={150}
                height={150}
                className={'rounded-2xl shadow-md w-full'}
              />
              <p className={'text-xs font-semibold mt-2'}>エンタメコンテスト</p>
            </Link>
            <div className={'text-center w-1/2'}>
              <Image
                src={'/top/busi_1_1.webp'}
                alt={'coming soon...'}
                width={150}
                height={150}
                className={'rounded-2xl shadow-md w-full'}
              />
              <p className={'text-xs font-semibold mt-2'}>coming soon...</p>
            </div>
          </div>
        </div>
        {/* ビジネス部門 */}
        <div
          className={
            'container max-w-[92%]  md:max-w-lg m-auto lg:m-0 bg-[#151D22] p-5 lg:p-8 lg:px-12 rounded-2xl text-[#f4f4f4]'
          }
        >
          <h3 className={'relative flex items-center justify-start lg:-translate-x-4'}>
            <Image
              src={'/top/busi_symbol.svg'}
              alt={''}
              width={50}
              height={50}
              className={'w-[50px] md:w-[78px]'}
            />
            <Image
              src={'/top/busi_title.svg'}
              alt={'ビジネス部門'}
              width={113}
              height={18}
              className={'-ml-6 md:w-[150px] md:-ml-8'}
            />
          </h3>
          <div className={'flex justify-around mt-4 gap-6 '}>
            <div className={'text-center w-1/2'}>
              <Image
                src={'/top/busi_1_1.webp'}
                alt={'coming soon...'}
                width={150}
                height={150}
                className={'rounded-2xl shadow-md w-full'}
              />
              <p className={'text-xs font-semibold mt-2'}>coming soon...</p>
            </div>
            <div className={'text-center w-1/2'}>
              <Image
                src={'/top/busi_2_1.webp'}
                alt={'coming soon...'}
                width={150}
                height={150}
                className={'rounded-2xl shadow-md w-full'}
              />

              <p className={'text-xs font-semibold mt-2'}>coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
