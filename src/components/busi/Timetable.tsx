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
        <div className="font-bold max-w-2xl mx-auto ">
          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">10:00 - 10:30</div>
            <div className="p-2">開会式</div>
          </div>
          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">10:30 - 11:15</div>
            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「音楽×ビジネス」
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">10:30 - 10:45</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">音楽×ビジネス①</div>
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">10:45 - 11:00</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">音楽×ビジネス②</div>
            </div>
          </div>
          <div className="px-2 pb-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">11:00 - 11:15</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">音楽×ビジネス③</div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">11:30 - 12:15</div>

            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「インフルエンサー×ビジネス」
            </div>
          </div>

          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">11:30 - 11:45</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">インフルエンサー×ビジネス①</div>
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">11:45 - 12:00</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">インフルエンサー×ビジネス②</div>
            </div>
          </div>
          <div className="px-2 pb-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">12:00 - 12:15</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">インフルエンサー×ビジネス③</div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">12:30 - 13:15</div>

            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「エンタメ×ビジネス」
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">12:30 - 12:45</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">エンタメ×ビジネス①</div>
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">12:45 - 13:00</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">エンタメ×ビジネス②</div>
            </div>
          </div>
          <div className="px-2 pb-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">13:00 - 13:15</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">エンタメ×ビジネス③</div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">13:30 - 14:15</div>

            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「ファッション×ビジネス」
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">13:30 - 13:45</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">ファッション×ビジネス①</div>
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">13:45 - 14:00</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">ファッション×ビジネス②</div>
            </div>
          </div>
          <div className="px-2 pb-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">14:00 - 14:15</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">ファッション×ビジネス③</div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">14:30 - 15:15</div>

            <div className="p-2">
              パネルディスカッション
              <br className="md:hidden" />
              「若手IPOについて」
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">14:30 - 14:45</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">若手IPOについて①</div>
            </div>
          </div>
          <div className="px-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">14:45 - 15:00</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">若手IPOについて②</div>
            </div>
          </div>
          <div className="px-2 pb-2 ml-5 sm:ml-12">
            <div className="bg-gray-100 text-black p-2">15:00 - 15:15</div>
            <div className="flex">
              <Image
                src={"/busi/comingsoon.webp"}
                width={100}
                height={100}
                alt=""
                className=""
              />
              <div className="p-2">若手IPOについて③</div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">15:30 - 16:45</div>

            <div className="p-2">ピッチコンテスト</div>
          </div>

          <div className="p-2">
            <div className="bg-gray-100 text-black p-2">16:45 - 17:00</div>

            <div className="p-2">授賞式＆閉会式</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timetable;
