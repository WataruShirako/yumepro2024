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
            src={"/busi/kagoshima/venue_logo.png"}
            width={278}
            height={278}
            alt=""
            className=""
          />
        </div>

        <div className="md:pl-10 pl-5 w-2/3">
          <p className="text-left font-bold mt-0 md:mt-5 text-xl">
            鹿児島市民文化ホール
          </p>
          <p className="text-left mt-2 md:mt-5 md:text-base text-sm">
            鹿児島市民文化ホール（川商ホール）は、鹿児島県鹿児島市与次郎二丁目にあるコンサートホールです。
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
