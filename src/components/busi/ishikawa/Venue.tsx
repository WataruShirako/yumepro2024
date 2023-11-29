"use client";

import Image from "next/image";

const Venue = () => {
  return (
    <section id="venue">
      <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all montserrat">Venue</p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">開催地</p>
      </h2>
      <div className="container flex m-auto md:max-w-4xl pb-10 px-5">
        <div className="w-1/3">
          <Image
            src={"/busi/ishikawa/venue_logo.jpg"}
            width={278}
            height={278}
            alt=""
            className=""
          />
        </div>
        <div className="md:pl-10 pl-5 w-2/3">
          <p className="text-left font-bold mt-0 md:mt-5 text-xl">
            金沢市アートホール
          </p>
          <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
            金沢市アートホールは”豊かで調和のとれた音を響かせる”という考え方を基本に設計されたシューボックス型の本格的な音楽ホールです。紫を基調にし308席のホールは、支柱や椅子席に加賀前田藩の紋所・剣梅鉢をあしらい、木のぬくもりを随所に活かした空間を提供しています。
            また、ホールのエントランスには金沢の祭りの原風景「加賀獅子舞」と「九谷の伝統」を主題にした陶壁画の現代アートが今から始まる舞台での「はれ」の場を賑々しく色彩豊かに飾っています。アーティストの感性と聴衆の興奮が一体となって生み出す創造空間、金沢市アートホールは芸術文化の拠点として金沢の新たな感動を創り出します。
          </p>
        </div>
      </div>
      {/*      <Image
        src={"/busi/hyogo/venue.png"}
        width={895}
        height={152}
        alt=""
        className="mx-auto px-5"
      />
  */}
    </section>
  );
};

export default Venue;
