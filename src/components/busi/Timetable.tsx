import Image from "next/image";

const Timetable = () => {
  return (
    <>
      <section id="timetable" className=" my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative montserrat">Timetable</p>
          </div>
          <p className="relative mt-3 md:mt-6 mb-20 md:text-[32px] text-2xl">
            タイムテーブル
          </p>
        </h2>
        <div className="font-bold max-w-4xl mx-auto ">
          <div className="px-2 pt-4">
            <div className="bg-gray-100 text-black p-2">10:40 - 11:25</div>
            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「新しい世代のビューティー、ファッションの動向」
            </div>
          </div>
          <div className="px-2 pb-4 grid grid-cols-2 md:grid-cols-4 text-center ">
            <div className="p-2 mx-auto ">
              <Image
                src={"/busi/panel/asakurakengo.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                浅倉健吾
                <br />
                <p className="text-[11px]">株式会社ネイリー 代表取締役</p>
              </div>
            </div>
            <div className="p-2 mx-auto">
              <Image
                src={"/busi/panel/nakamuratomekichi.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                中村トメ吉
                <br />
                <p className="text-[11px]">株式会社GOALD JAPAN代表取締役</p>
              </div>
            </div>{" "}
            <div className="p-2 mx-auto">
              <Image
                src={"/busi/panel/akaogihitomi.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                校長 赤荻瞳
                <br />
                <p className="text-[11px]">
                  株式会社エムアールエー 代表取締役
                  <br />
                  渋谷女子インターナショナルスクール 校長
                </p>
              </div>
            </div>{" "}
            <div className="p-2 mx-auto">
              <Image
                src={"/busi/panel/onozatoyasuaki.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                小野里寧晃
                <br />
                <p className="text-[11px]">
                  株式会社バニッシュ・スタンダード 代表取締役
                </p>
              </div>
            </div>
          </div>

          <div className="px-2 pt-4">
            <div className="bg-gray-100 text-black p-2">11:35 - 12:20</div>

            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「ビジネスにおけるSNS・メディア戦略」
            </div>
          </div>

          <div className="px-2 pb-4 grid grid-cols-2 md:grid-cols-4 text-center ">
            <div className="p-2 mx-auto ">
              <Image
                src={"/busi/panel/aokiyasutoki.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                青木康時
                <br />
                <p className="text-[11px]">
                  株式会社サムライパートナーズ 取締役
                </p>
              </div>
            </div>
            <div className="p-2 mx-auto">
              <Image
                src={"/busi/panel/koko.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                黄皓
                <br />
                <p className="text-[11px]">ミラーフィット株式会社 代表取締役</p>
              </div>
            </div>{" "}
            <div className="p-2 mx-auto">
              <Image
                src={"/busi/panel/sakakibaraseiichi.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                榊原清一
                <br />
                <p className="text-[11px]">株式会社EMOLVA 代表取締役</p>
              </div>
            </div>
          </div>
          <div className="px-2 pt-4">
            <div className="bg-gray-100 text-black p-2">12:30 - 13:15</div>

            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「若手上場社長に聞く！〜新世代のIPO〜」
            </div>
          </div>
          <div className="px-2 pb-4 grid grid-cols-2 md:grid-cols-4 text-center ">
            <div className="p-2 mx-auto ">
              <Image
                src={"/busi/panel/maruokoichi.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                丸尾浩一
                <br />
                <p className="text-[11px]">株式会社Major7th 代表取締役</p>
              </div>
            </div>
            <div className="p-2 mx-auto">
              <Image
                src={"/busi/panel/kataishitakanori.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                片石 貴展
                <br />
                <p className="text-[11px]">株式会社yutori 代表取締役</p>
              </div>
            </div>{" "}
            <div className="p-2 mx-auto">
              <Image
                src={"/busi/panel/ishikawaakihiko.jpg"}
                width={300}
                height={300}
                alt=""
                className=""
              />
              <div className="">
                石川聡彦
                <br />
                <p className="text-[11px]">株式会社アイデミー 代表取締役</p>
              </div>
            </div>
          </div>
          <div className="px-2 py-4">
            <div className="bg-gray-100 text-black p-2">13:25 - 13:30</div>

            <div className="p-2">審査員紹介</div>
          </div>
          <div className="px-2 py-4">
            <div className="bg-gray-100 text-black p-2">13:30 - 16:30</div>

            <div className="p-2">ピッチコンテスト</div>
          </div>

          <div className="px-2 py-4">
            <div className="bg-gray-100 text-black p-2">16:30 - 17:00</div>

            <div className="p-2">授賞式＆閉会式</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timetable;
