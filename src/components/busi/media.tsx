import Image from "next/image";
import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";

const Media = () => {
  return (
    <>
      <section id="movie" className={"my-10"}>
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all montserrat">Media</p>
          </div>
          <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
            メディア
          </p>
        </h2>
        <div className="App max-w-3xl mx-auto p-10">
          <YouTubeEmbed videoId="oBtPUG09J0A" />
        </div>
        <div className="max-w-3xl mx-auto p-5 md:p-10">
          <p className="font-bold text-xl text-center">学生起業王 参加者募集</p>
          <br /> <br />
          「学生起業王」は、学生が感じている起業へのハードルのイメージを下げて学生の起業を応援することにより、
          起業しやすくなる環境を日本に作り上げ、結果的に日本国内の起業家の増加に繋げていくことを目的としたYouTubeチャンネルです。
          <br />
          <br />
          また、優勝者となった学生起業王は「夢を叶えるプロジェクト」主催の学生ピッチ甲子園のシード権を獲得し、4月に幕張メッセで開催される最終審査
          in ニコニコ超会議に出場します。
        </div>
      </section>
    </>
  );
};

export default Media;
