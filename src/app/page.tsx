import './globals.css';
import './top.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Ambassadors from '@/components/top/Ambassadors';
import Banner from '@/components/top/Banner';
import Category from '@/components/top/Category';
import CategoryIntro from '@/components/top/CategoryIntro';
import Cta from '@/components/top/Cta';
import Entry from '@/components/top/Entry';
import FooterMessage from '@/components/top/FooterMessage';
import Fv from '@/components/top/Fv';
import Intro from '@/components/top/Intro';
import Link2023 from '@/components/top/Link2023';
import News from '@/components/top/News';
import Schedule from '@/components/top/Schedule';
import Slide from '@/components/top/Slide';
import Sns from '@/components/top/Sns';
import Sponsor from '@/components/top/Sponsor';
import Story from '@/components/top/Story';

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

  const enttContests = [
    {
      id: 1,
      name: '夢フォトオーディション',
      path: '/project/entertainment/photo/',
    },
    {
      id: 2,
      name: 'coming soon ...',
      path: '',
    },
  ];

  const star = [
    {
      id: 1,
      name: 'coming soon ...',
      path: '',
    },
  ];

  return (
    <>
      <Header />
      <main className={'bg-[#F7F7F7]'}>
        <Fv />
        <Slide />
        <Banner />
        <News />
        <Intro />
        <Category />
        <Cta />
        <CategoryIntro enttContests={enttContests} star={star} />
        <Schedule />
        <Entry />
        <Cta />
        <Story />
        <Sponsor />
        <Ambassadors />
        <Sns />
        <Cta />
        <Category />
        <Link2023 />
        <FooterMessage />
        {/* <Copyright /> */}
      </main>

      <Footer />
    </>
  );
};

export default Home;
