"use client";

import ComingSoon from "@/components/common/ComingSoon";
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
            src={"/busi/osaka/venue_logo.png"}
            width={278}
            height={278}
            alt=""
            className=""
          />
        </div>
        <div className="md:pl-10 pl-5 w-2/3">
          <p className="text-left font-bold mt-0 md:mt-5 text-xl">
            KINCUBA Basecamp
          </p>
          <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
            「起業」というチャレンジを山に例えたとき、目標到達を目指す拠点となる場所、それがKINCUBA
            Basecamp。このインキュベーション施設は、近畿大学東大阪キャンパスを象徴する西門の目の前に位置し、24時間利用可能、登記利用もでき、環境面からも起業を支援しています。同じ夢と志をもった仲間といつでも集うことができる共創空間で、近畿大学発ベンチャーの創出を後押しします。
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
