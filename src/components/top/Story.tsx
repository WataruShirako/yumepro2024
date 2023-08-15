import Image from 'next/image';

const Story = () => {
  return (
    <section id="story" className="pt-12 md:pt-24">
      <div className="container flex flex-col md:flex-row-reverse m-auto max-w-[92%] md:max-w-6xl gap-6 lg:gap-24 items-center md:px-5">
        <Image
          src={'/top/born_story.webp'}
          alt={''}
          width={505}
          height={584}
          className="w-2/3 md:w-1/2 rounded-2xl"
        />
        <div className="md:w-1/2">
          <h4 className="font-semibold text-xl lg:text-2xl mb-6 text-center md:text-left">
            SDGs×地方創生
            <br />
            「夢叶えるプロジェクト」
            <br className="md:hidden" />
            誕生秘話
          </h4>
          <p className="text-sm lg:text-base">
            主催会社である、総合ウェルネス事業を行う株式会社クレドインターナショナルでは、サウナやスパの素晴らしさを広める「スパサウナ会」のスポンサーとして、サウナライフを楽しむ“サ活”をサポートしています。その中の企画で、学生に特化した「学生スパサウナ会」の企画を行ってきました。
            <br />
            日本では裸の付き合いという言葉があるように、サウナの中ではつい本音を話したり相談事などをしたくなる不思議な空間なせいか、多くの学生たちの人間関係、就職等に関する悩みや将来の夢を聞いてきました。
            <br />
            そこで、学生だけに限らず夢を持つ人たちを応援すようなプロジェクトができないか？と考えたのが、「夢叶えるプロジェクト」が生まれたきっかけでした。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
