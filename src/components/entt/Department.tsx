import Image from 'next/image';
import Link from 'next/link';

const Department = ({ enttContests, enttStar }: any) => {
  return (
    <section id="department" className={''}>
      <h2 className="secTitle">
        <span className={'block'}>department</span>
        コンテスト部門一覧
      </h2>
      <p className={'text-center'}>各部門から1名、グランプリを決定します</p>
      <div className="container m-auto max-w-[92%] lg:max-w-6xl mt-4">
        <h3
          className={
            'bg-[#485757] text-[#efefef] text-center flex items-center justify-center h-20 depBorderWhite'
          }
        >
          エンタメ部門
        </h3>
        <div className="md:flex md:gap-12 departmentEntt">
          <div className={'bg-white p-5 mt-4 depBorderWhite md:flex-1 '}>
            <h4 className={'flex items-center gap-4 mb-4'}>
              <span className="departmentNum ShipporiMincho text-[40px] leading-none text-[#CBD6D0] opacity-50">
                01
              </span>
              <span className={'text-xl'}>エンタメコンテスト</span>
            </h4>
            {enttContests.map((contest: any, index: number) => (
              <Link
                key={index}
                href={contest.path}
                className={
                  ' list bg-[#CBD6D0] p-4 mt-2 flex justify-between items-center hover:bg-[#dbe8e1]'
                }
              >
                <span dangerouslySetInnerHTML={{ __html: `${contest.name}` }} />
                <Image src={'/entt/arrowGreen.svg'} alt={'▶︎'} width={26} height={26} />
              </Link>
            ))}
          </div>

          <div className={'bg-white p-5 mt-4 depBorderWhite md:flex-1'}>
            <h4 className={'flex items-center gap-4 mb-4'}>
              <span className="departmentNum ShipporiMincho text-[40px] leading-none text-[#CBD6D0] opacity-50">
                02
              </span>
              <span className={'text-xl'}>スター誕生オーディション</span>
            </h4>
            {enttContests.map((star: string, index: number) => (
              <Link
                key={index}
                href={''}
                className={
                  'list bg-[#CBD6D0] p-4 mt-2 flex justify-between items-center hover:bg-[#dbe8e1]'
                }
              >
                <span>coming soon...</span>
                <Image src={'/entt/arrowGreen.svg'} alt={'▶︎'} width={26} height={26} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container m-auto max-w-[92%] lg:max-w-6xl mt-8">
        <h3
          className={
            'bg-[#485757] text-[#efefef] text-center flex items-center justify-center h-20 depBorderWhite'
          }
        >
          ビジネス部門
        </h3>
        <div className={'md:flex md:gap-12'}>
          <Link
            href={''}
            className={
              'flex md:flex-1 departmentEntt bg-[#CBD6D0] p-5 mt-4 depBorderWhite  hover:bg-[#dbe8e1]'
            }
          >
            <h4 className={'flex items-center gap-4 w-full'}>
              <span className="departmentNum ShipporiMincho text-[40px] leading-none text-[#EFEFEF] opacity-50">
                01
              </span>
              <span className={'text-xl'}>
                {/* ビジネスコンテスト
                <br />
                (大人の部) */}
                coming soon ...
              </span>
              <Image
                src={'/entt/arrowGreen.svg'}
                alt={'▶︎'}
                width={26}
                height={26}
                className={'ml-auto'}
              />
            </h4>
          </Link>
          <Link
            href={''}
            className={
              'flex md:flex-1 departmentEntt bg-[#CBD6D0] p-5 mt-4 depBorderWhite  hover:bg-[#dbe8e1]'
            }
          >
            <h4 className={'flex items-center gap-4 w-full'}>
              <span className="departmentNum ShipporiMincho text-[40px] leading-none text-[#EFEFEF] opacity-50">
                02
              </span>
              <span className={'text-xl'}>
                {/* ビジネスコンテスト
                <br />
                (学生の部) */}
                coming soon ...
              </span>
              <Image
                src={'/entt/arrowGreen.svg'}
                alt={'▶︎'}
                width={26}
                height={26}
                className={'ml-auto'}
              />
            </h4>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Department;
