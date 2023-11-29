import Image from "next/image";

const company = () => {
  return (
    <>
      <section className=" my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center">
          <div className="relative w-max montserrat">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all">COMPANY</p>
          </div>
          <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
            運営会社
          </p>
        </h2>
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/busi/company.jpg"}
              width={320}
              height={320}
              alt=""
              className="w-60  md:w-[320px]  object-cover mx-auto"
            />
          </div>
          <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
            <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
              大平ひかる
            </p>
            <p className="max-w-xs text-[15px] mx-auto md:text-left md:mx-0 pb-10">
              生年月日:2002年7月23日(21歳)
              <br />
              出身地:日本 東京都
              <br />
              身長:163cm
              <br />
              趣味:ファッション、メイク、旅行
              <br />
              特技:ダンス
            </p>
          </div>
        </div>
        <div>
          <p className=" text-[14px] mx-auto md:text-left  py-10 w-4/5 md:max-w-4xl">
            スターダストプロモーション所属 2009~2019年 <br />
            ・BUMP OF CHICKEN「宇宙飛行士への手紙」PV出演 2010年10月
            <br />
            ・読売KODOMO新聞連載「GO!5スイーツ」レギュラー2011年12月~
            <br />
            <br />
            アイドル活動(チームホタルイカ・3BJunior・マジェスティックセブン・アメフラっシ)
            <br />
            ・『七色のスターダスト』MV ・俺の藤井2014
            前橋グリーンドーム2014年1月4日 <br />
            ・ももいろクローバーZ 国立競技場ライブ
            バックダンサー2014年3月15日16日 <br />
            ・「MUSIC FAIR」2014年11月8日
            <br />
            ・国際フォーラムライブ 2014年11月24日
            <br />
            ・ももいろクローバーZ「幕が上がる」 <br />
            ・日本青年館ライブ2015年1月8日 <br />
            ・BS朝日『3B Junior の星くず商事』レギュラー2015年1月25日~ <br />
            ・西武園ゆうえんち定期公演開始 2015年4月25日~
            <br />
            ・公開放送ラジオ「オトナの自由時間 銀座BODYSLAM BOYS」2015年7月8日{" "}
            <br />
            ・浅草公会堂ライブ 2015年8月14日 <br />
            ・3BJunior東京湾ツアー ・品川ステラボールライブ 2015年12月27日
            <br />
            ・ももいろクローバーZ 全国ドームツアー <br />
            ・雑誌「OVERTURE No.0052015年12月号」2016年1月5日発売 <br />
            ・さいたまスーパーアリーナライブ2016年1月8日~9日 <br />
            ・雑誌「月間B.L.T. 2016年5月号 Vol.225」2016年3月24日発売 <br />
            ・ももいろクローバーZ 西武ドームライブ OPアクト2016年4月2日3日{" "}
            <br />
            ・3B Junior関東平野ツアー
            <br />
            ・佐々木彩夏ソロコンサート 横浜アリーナ
            <br />
            ・横浜市赤レンガパークライブ「アイドル横丁夏まつり!!~2016~」2016年7月2日{" "}
            <br />
            ・フジテレビNEXT「清塚信也のガチンコ3B Junior」2016年7月14日
            <br />
            ・HUSTLE PRESS連載特集記事 <br />
            ・浅草公会堂ライブ2016年8月14日 <br />
            ・幕張メッセライブ 2016年9月24日25日
            <br />
            ・ももいろクローバーZライブ外周プロレス解説(清野茂樹・小島和宏)2016年12月24日{" "}
            <br />
            ・雑誌「BIG ONE GIRLS No,037」 2017年1月30日発売
            <br />
            ・テレ朝動画「LoGiRL川上アキラの人のふんどしでひとりふんどし」2017年3月7日{" "}
            <br />
            ・EX THEATER ROPPONGIライブ 2017年4月1日
            <br />
            ・佐々木彩夏ソロコンサート 両国国技館
            <br />
            ・横浜市赤レンガパークライブ「アイドル横丁夏まつり!!~2017~」2017年7月9日{" "}
            <br />
            ・3B Juniorサマーツアー <br />
            ・ももいろクローバーZ 味の素スタジアムライブ OPアクト 2017年8月6日{" "}
            <br />
            ・横浜アリーナライブ2017年8月27日 <br />
            ・雑誌「OVERTURE No.012」 2017年9月27日発売 <br />
            ・恵比寿The Garden Hallライブ 2018年1月8日 <br />
            ・日テレらんらんホールライブ2018年2月4日 <br />
            ・Zepp DiverCityライブ 2018年5月26日
            <br />
            ・佐々木彩夏ソロコンサート 横浜アリーナ
            <br />
            ・ももいろクローバーZ ZOZOマリンスタジアムライブ OPアクト
            2018年8月4日
            <br />
            ・横浜アリーナライブ 2018年8月26日 <br />
            ・雑誌「BUBKA」連載 2018年11月~
            <br />
            ・ももいろクローバーZ さいたまスーパーアリーナライブ2018年12月25日{" "}
            <br />
            ・雑誌「Top Yell NEO 2018~2019」 2018年12月28日
            <br />
            ・パシフィコ横浜サロンコンサート 2018年12月31日 <br />
            ・Zepp Tokyoライブ2019年1月2日 <br />
            ・Zepp DiverCityライブ 2019年1月14日27日
            <br />
            ・神田明神ホールライブ 2019年3月31日 <br />
            ・マイナビBLITZ赤坂ライブ2019年5月10日 <br />
            ・渋谷ストリームホールライブ 2019年5月24日
            <br />
            ・佐々木彩夏ソロコンサート 横浜アリーナ 2019年6月23日
            <br />
            ・「マイナビ進学マガジン7月号」 2019年7月11日
            <br />
            ・明治座「ももクロ一座特別公演」 2019年8月17日~26日
            <br />
            ・豊洲PITライブ 2019年8月31日 <br />
            ・幕張メッセライブ 2019年11月23日
            <br />
            ・アイドル卒業ライブ 2019年12月14日
            <br />
            <br />
            プロレス <br />
            ・女子プロレスSEAdLINNNGリングアナウンサー 2018年7月25日~
            <br />
            ・雑誌「プロレスラーカラー名鑑2019」掲載 2019年11月23日
            <br />
            ・スターダム 公式マスコットガール 2021年2月~
            <br />
            <br />
            ・オリジナルアパレルブランドBrily立ち上げ 2020年2月 <br />
            ・TEENSモデル2020年5月~2021年5月 <br />
            ・女子高生ミスコン2020 グランプリ
            <br />
            ・ミスミスター青山コンテスト2023 グランプリ
            <br />
          </p>
        </div>
      </section>
    </>
  );
};

export default company;
