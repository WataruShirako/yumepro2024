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
            src={"/busi/tokyo/venue.jpg"}
            width={278}
            height={278}
            alt=""
            className=""
          />
        </div>
        <div className="md:pl-10 pl-5 w-2/3">
          <p className="text-left font-bold mt-0 md:mt-5 text-xl">
            BASE GRANBELL
          </p>
          <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
            〒104-0061
            <br />
            東京都中央区銀座7丁目2番18号 グランベルスクエアB2F,B3F
            <br /> <br />
            ・JR新橋駅（北改札出口）徒歩5分 <br />
            ・東京メトロ 銀座駅（C-1・C-2出口）徒歩5分 <br />
            ・東京メトロ 日比谷駅（A-11・A-13出口） 徒歩約7分 <br />
            ・JR有楽町駅（日比谷口）徒歩8分 <br />
            ・東京メトロ 有楽町駅（A-11・A-13出口）徒歩8分 <br />
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
