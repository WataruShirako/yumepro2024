import './globals.css';
import './top.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Prepare from '@/components/Prepare';
import Category from '@/components/top/Category';
import Comingsoon from '@/components/top/Comingsoon';
import Cta from '@/components/top/Cta';
import Link2023 from '@/components/top/Link2023';
import { ImageError } from 'next/dist/server/image-optimizer';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const enttCategory = [
    {
      id: 1,
      name: '夢フォトオーディション',
      path: '/project/entertainment/photo/',
    },
    {
      id: 2,
      name: 'リンシャンアイドルオーディション',
      path: '/project/entertainment/idol/',
    },
  ];

  return (
    <>
      <Header />
      <main className={'bg-[#F7F7F7]'}>
        <section className={'fv'}>
          <Image
            src={'/top/top_fv_pc.webp'}
            alt={''}
            width={1366}
            height={690}
            className={'w-full hidden md:block'}
          />
          <Image
            src={'/top/top_fv_sp.webp'}
            alt={''}
            width={1366}
            height={690}
            className={'w-full block md:hidden'}
          />
        </section>
        <section className={'mt-12 md:mt-24'}>
          <h2 className={'text-center'}>
            <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
              <Image src={'/icons/whatweare.svg'} alt={''} width={16} height={20} />
              Yume project 2024 ?
            </span>
            <p className={'font-bold text-2xl md:text-3xl mt-1'}>
              夢叶えるプロジェクト
              <br className={'md:hidden'} />
              2024とは？
            </p>
          </h2>
          <div className={'container max-w-[92%] m-auto mt-8'}>
            <Image
              src={'/top/whatweare_img.webp'}
              alt={'夢叶えるプロジェクトとは？'}
              width={500}
              height={500}
              className={'rounded-2xl overflow-hidden'}
            />
            <div className="">
              <h3 className={'text-2xl font-semibold mt-8'}>
                テーマ「スタートアップ」
                <br />
                若者も大人もが夢に
                <br className={'md:hidden'} />
                チャレンジしやすい社会を
              </h3>
              <p className={'mt-8'}>
                「夢叶えるプロジェクト」は、10部門のエンタメビジネスコンテストで、各業界の夢を持つ人々を支援します。企画やピッチコンテストを通じて若者に訴求し、2023年3月27日に都内のホテルで授賞式を行います。
                <br />
                審査員は、各部門の代表となるスタートアップや若手起業家を選び、総額3000万円の資金を提供します。
                <br />
                さらに、ビジネス部門の副賞はシリコンバレー視察ツアー、エンタメ部門はスポンサー賞やスパ券などがあります。
              </p>
            </div>
          </div>
        </section>
        <Category />
        <Cta />
        <section className={'introduce'}>
          <div className="container">
            <p>エンタメ部門</p>
          </div>

          <div className="container">
            <p>ビジネス部門</p>
          </div>
        </section>

        <section id="schedule">
          <h2 className={'text-center'}>
            <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
              <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
              Upcoming event
            </span>
            <p className={'font-bold text-2xl md:text-3xl mt-1'}>スケジュール</p>
          </h2>
          <div className="container flex max-w-[92%] md:max-w-[1100px] md:px-5 mx-auto gap-6 sm:gap-6 flex-col sm:flex-row  mt-12 md:mt-24">
            <div className="w-full sm:w-1/3 bg-white rounded-2xl relative h-52 text-center">
              <h5 className="Montserrat text-center pt-8 text-[#C52CFD]">Step.1</h5>
              <p className={'mt-5'}>
                まずはLINEで
                <br />
                簡単3ステップ
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
            <div className="w-full sm:w-1/3 bg-white rounded-2xl relative h-52 text-center">
              <h5 className="Montserrat text-center pt-8 text-[#C52CFD]">Step.2</h5>
              <p className={'mt-5'}>部門別コンテスト</p>
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
            <div className="w-full sm:w-1/3 bg-white rounded-2xl relative h-52 text-center">
              <h5 className="Montserrat text-center pt-8 text-[#C52CFD]">Step.3</h5>
              <p className={'mt-5'}>部門別コンテスト</p>
              <p className="absolute bottom-0 w-full left-0 bg-[#485757] grid place-items-center text-white font-semibold py-5 text-2xl rounded-b-2xl">
                最終審査
              </p>
            </div>
          </div>
        </section>

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
              ・日本国内に在住のアマチュアの方
              <br />
              ・2024年4月（詳細未定）に開催される決勝戦・授賞式に参加できる方
              <br />
              ・夢プロ公式Instagramをフォロー(
              <a href="https://www.instagram.com/yumekanaeru_project/">リンクはこちら</a>)
            </p>
          </div>
        </section>

        <Cta />

        <section id="story" className="pt-12 md:pt-24">
          <div className="container flex flex-col md:flex-row-reverse m-auto max-w-[92%] md:max-w-6xl gap-6 md:gap-24 items-center">
            <Image
              src={'/top/born_story.webp'}
              alt={''}
              width={505}
              height={584}
              className="md:w-1/2"
            />
            <div className="md:w-1/2">
              <h4 className="font-semibold text-xl mb-6 text-center md:text-left">
                SDGs×地方創生
                <br />
                「夢叶えるプロジェクト」
                <br className="md:hidden" />
                誕生秘話
              </h4>
              <p>
                主催会社である、総合ウェルネス事業を行う株式会社クレドインターナショナルでは、サウナやスパの素晴らしさを広める「スパサウナ会」のスポンサーとして、サウナライフを楽しむ“サ活”をサポートしています。その中の企画で、学生に特化した「学生スパサウナ会」の企画を行ってきました。
                <br />
                日本では裸の付き合いという言葉があるように、サウナの中ではつい本音を話したり相談事などをしたくなる不思議な空間なせいか、多くの学生たちの人間関係、就職等に関する悩みや将来の夢を聞いてきました。
                <br />
                そこで、学生だけに限らず夢を持つ人たちを応援すようなプロジェクトができないか？と考えたのが、「夢叶えるプロジェクト」が生まれたきっかけでした。
              </p>
            </div>
          </div>
        </section>

        <section id="sronsor" className="pt-12 md:pt-24">
          <h2 className={'text-center'}>
            <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
              <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
              Sponsors
            </span>
            <p className={'font-bold text-2xl md:text-3xl mt-1'}>スポンサー企業一覧</p>
          </h2>

          <Comingsoon />
        </section>

        <section id="ambassodor" className="pt-12 md:pt-24">
          <h2 className={'text-center'}>
            <span className={'text-[#C52CFD] font-bold flex items-center justify-center gap-2'}>
              <Image src={'/icons/ambassodors.svg'} alt={''} width={17} height={20} />
              Ambassodors
            </span>
            <p className={'font-bold text-2xl md:text-3xl mt-1'}>アンバサダー</p>
          </h2>

          <Comingsoon />
        </section>

        <Cta />

        <Category />

        <Link2023 />

        <section className="top_footer text-[36px] max-w-[92%] Montserrat lg:max-w-[73%] text-center font-extrabold m-auto py-12 md:py-24 leading-tight">
          <p>
            YumePro 2024 is an{' '}
            <span
              className={
                'bg-gradient-to-tr from-fuchsia-500 to-blue-700 bg-clip-text text-transparent'
              }
            >
              AWARD
            </span>{' '}
            for creators and businesspersons who have a “
            <span
              className={
                'bg-gradient-to-tr from-fuchsia-500 to-blue-700 bg-clip-text text-transparent'
              }
            >
              DREAM
            </span>
            ” 🥳
          </p>
        </section>

        <section className={'text-center pb-12 md:pb-24 Montserrat'}>
          <p>
            <small>&copy;yumekanaeru project 2024 All rights reserved.</small>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
