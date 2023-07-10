import './globals.css';
import './entt.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sponsor from '@/components/entt/Sponsor';
import Image from 'next/image';
import Prize from '@/components/entt/Prize';
import About from '@/components/entt/About';
import Flow from '@/components/entt/Flow';
import Committee from '@/components/entt/Committee';
import Chairman from '@/components/entt/Chairman';
import Comingsoon from '@/components/entt/Comingsoon';
import ToTop from '@/components/entt/Totop';
import Instagram from '@/components/entt/Instagram';
import News from '@/components/entt/News';
import Sns from '@/components/entt/Sns';
import Entry from '@/components/entt/Entry';
import Ambassador from '@/components/entt/Ambassador';
import Adviser from '@/components/entt/Adviser';
import Department from '@/components/entt/Department';

const Home = () => {
  // 公開済みのコンテスト エンタメコンテスト
  const enttContests = [
    {
      id: 1,
      name: '夢フォトオーディション',
      path: '/',
    },
  ];
  // 公開済みのコンテスト スター誕生オーディション
  const enttStar = [
    {
      // id: 1,
      // name: '夢フォトオーディション',
      // Path: '/',
    },
  ];

  // スポンサー一覧
  const sponsors = [
    {
      id: 1,
      src: '/entt/sponsor/zen_spa.jpg',
      alt: 'text',
    },
    {
      id: 2,
      src: '/entt/sponsor/an_spa.jpg',
      alt: 'text',
    },
    {
      id: 3,
      src: '/entt/sponsor/sanatio_spa.jpg',
      alt: 'text',
    },
    {
      id: 4,
      src: '/entt/sponsor/sora_spa.jpg',
      alt: 'text',
    },
    {
      id: 5,
      src: '/entt/sponsor/spa_solani.jpg',
      alt: 'text',
    },
    {
      id: 6,
      src: '/entt/sponsor/landmark_spa.jpg',
      alt: 'text',
    },
    {
      id: 7,
      src: '/entt/sponsor/la_villa.jpg',
      alt: 'text',
    },
    {
      id: 8,
      src: '/entt/sponsor/hammam_spa.jpg',
      alt: 'text',
    },
    {
      id: 9,
      src: '/entt/sponsor/inroom_spa.jpg',
      alt: 'text',
    },
    {
      id: 10,
      src: '/entt/sponsor/fauchon.jpg',
      alt: 'text',
    },
  ];

  // 賞金・スポンサー賞
  const prize = {
    title: 'スポンサー賞',
    src: '/entt/prize/prize_sponsor_spa_100.jpg',
    alt: 'text',
    SPsrc: '/entt/prize/prize_sponsor_spa_100_sp.jpg',
  };

  //開催概要
  const about = {
    sched: '2023/7/1(土)〜 | 該当投稿のリンクを公式LINEにシェア<br>2024/3/1(金) | 受賞者1名発表',
    status: `
      ・日本国内に在住のアマチュアの方<br>
      ・2024年4月（詳細未定）に開催される決勝戦・授賞式に参加できる方<br>
      ・夢プロ公式Instagramをフォロー
    `,
    judge: '①テーマに沿った作品<br>②オリジナリティ<br>③技術面',
    award: '4/1(月) @某有名ホテル',
  };

  // 審査委員
  const committee = [
    {
      id: 1,
      name: '岩倉しおり',
      pro: '写真家',
      text: '香川県在住の写真家。うつろう季節、光を大切におもにフィルムカメラにて撮影している。地元、香川県で撮影した写真を中心にSNSで作品を発表する他、写真展の開催、CDジャケットや書籍のカバー、広告写真などを手掛ける。2019年3月、初の写真集『さよならは青色』（KADOKAWA）を出版。',
      src: '/entt/committee/com_iwakura_shiori.jpg',
    },
  ];

  // 総合司会
  const chairman = {
    id: 1,
    name: '名前 名前',
    pro: '職業',
    text: '香川県在住の写真家。うつろう季節、光を大切におもにフィルムカメラにて撮影している。地元、香川県で撮影した写真を中心にSNSで作品を発表する他、写真展の開催、CDジャケットや書籍のカバー、広告写真などを手掛ける。2019年3月、初の写真集『さよならは青色』（KADOKAWA）を出版。',
    src: '/entt/committee/com_iwakura_shiori.jpg',
  };

  return (
    <>
      <Header />
      <main id="yumephoto">
        <section id="fv" className={'pt-0'}>
          <div className="imgWrap">
            <Image
              className="img hidden md:lg:block"
              src={'/entt/yumephoto/yumephoto_fv.jpg'}
              alt="text"
              width={1920}
              height={930}
              priority
            />
            <Image
              className="img lg:hidden"
              src={'/entt/yumephoto_fv_sp.jpg'}
              alt="text"
              width={750}
              height={1370}
              priority
            />
          </div>
        </section>
        <section id="intro">
          <div className="container flex m-auto items-center justify-between flex-wrap flex-col lg:flex-row">
            <p className="flex-1 px-[4%]">
              「夢フォトオーディション」は写真を通じて日本の文化・社会・風景などの魅力を国内外に発信していくアンバサダーを選出するコンテストです。業界をけん引するにふさわしい「技術と感性」を身につけた次世代エースを発掘すべくSNS審査・豪華審査員による審査などの選考によりグランプリを決定します。今回の題材は「日本全国の風景景色」です。
            </p>
            <div className="flex-1 justify-self-center conteiner max-x-[92%]">
              <div className="imgWrap introImgWrap">
                <Image
                  className="img introImg"
                  src={'/entt/yumephoto/yumephoto_intro_1.jpg'}
                  alt="text"
                  width={250}
                  height={312}
                  priority
                />
                <Image
                  className="img introImg"
                  src={'/entt/yumephoto/yumephoto_intro_2.jpg'}
                  alt="text"
                  width={264}
                  height={312}
                  priority
                />
                <Image
                  className="img introImg"
                  src={'/entt/yumephoto/yumephoto_intro_3.jpg'}
                  alt="text"
                  width={259}
                  height={312}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <Sponsor sponsors={sponsors} />
        <Prize prize={prize} />
        <About about={about} />
        <section className="pt-[25px]">
          <div className="md:flex max-w-5xl m-auto items-center justify-between">
            <div className="relative w-2/3 md:w-[45%] m-auto">
              <Image
                className={'img'}
                src={'/entt/yumephoto/yumephoto_ex_grand_prix.jpg'}
                alt={'去年の受賞作'}
                width={450}
                height={516}
              />
            </div>
            <div className="text-center mt-4 md:w-[45%] exGrandPrix">
              <h4 className={'title text-[40px] ml-0 text-center md:text-left pb-5 md:pb-10'}>
                去年の受賞作
              </h4>
              <p className={'text-center md:text-left'}>
                こちらが昨年のフォトコンテスト受賞作品です。
                <br />
                クリエイターは松尾一也さん。
                <br />
                2024年は一体どんな作品がグランプリに輝くのか？
                <br />
                LINEで応募をお待ちしております。
              </p>
              <a
                href="https://liff.line.me/1657596848-xOJZNbmM/landing?follow=%40306ccdiy&lp=ey1QMR&liff_id=1657596848-xOJZNbmM"
                target="_blank"
                className={'btn btnEntt m-auto md:mr-auto text-left'}
              >
                LINEで応募する
                <Image
                  className={'absolute right-[20px] top-1/2 -translate-y-1/2'}
                  src={'/entt/entt_btn_arrow.svg'}
                  alt={'▶︎'}
                  width={26}
                  height={26}
                />
              </a>
            </div>
          </div>
        </section>
        <Flow />
        {/* <Instagram /> */}
        <Committee committee={committee} />
        <Chairman chairman={chairman} />
        <Adviser />
        <Department enttContests={enttContests} enttStar={enttStar} />
        <Entry />
        <Ambassador />
        <Sns />
        <News />
      </main>
      <ToTop />
      <Footer />
    </>
  );
};

export default Home;
