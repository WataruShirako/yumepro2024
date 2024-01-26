"use client";

import Image from "next/image";
import ComingSoon from "@/components/common/ComingSoon";

const Ambassador = () => {
  return (
    <section id="ambassador">
      <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all montserrat">Ambassador</p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
          アンバサダー
        </p>
      </h2>
      <ComingSoon />
    </section>
  );
};

export default Ambassador;
