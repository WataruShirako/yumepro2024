import Image from "next/image";

const WinnerBenefit = () => {
  return (
    <>
      <section className="winnerBenefit">
        <h2 className="sectionTitle text-center items-center Montserrat  mt-20 md:mt-40 mb-10">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all montserrat ">
              WINNER <br className="sm:hidden" />
              BENEFIT
            </p>
          </div>
          <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl ">
            優勝特典
          </p>
        </h2>
        <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
          <p className="py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] text-lg text-center">
            東京本線出場権
            <br />
            <br />
            メンターからの東京本戦まで事業計画・ピッチ資料アドバイス
          </p>
        </div>
        <div className="container px-5 min-[900px]:flex min-[900px]:flex-colm justify-center my-10 gap-5 m-auto md:max-w-4xl items-start">
          <div className="flex flex-colm">
            <div className="flex flex-colm min-[900px]:block">
              <div className="">
                <div className="circle">
                  <div className="circleinner font-bold text-lg ">
                    <p className="text-[#c528fd] mt-10 max-[500px]:mt-5">
                      STEP 1
                    </p>
                    エントリー
                  </div>
                </div>
                <Image
                  src={"/busi/hyogo/grbottom.svg"}
                  width={23}
                  height={23}
                  alt=""
                  className="mx-auto py-5 min-[900px]:hidden"
                />
              </div>
              <p className="my-auto pb-10 px-5 min-[900px]:pt-5 min-[900px]:text-center min-[900px]:my-0 min-[900px]:px-0">
                各地から地方予選へのエントリーを受付ます。下の応募するボタンからご応募ください。
              </p>
            </div>
            <Image
              src={"/busi/hyogo/grright.svg"}
              width={18}
              height={18}
              alt=""
              className="hidden min-[900px]:block mb-48 mx-5"
            />
          </div>

          <div className="flex flex-colm">
            <div className="flex flex-colm min-[900px]:block">
              <div className="">
                <div className="circle">
                  <div className="circleinner font-bold text-lg">
                    <p className="text-[#c528fd] mt-10 max-[500px]:mt-5">
                      STEP 2
                    </p>
                    地方予選出場
                  </div>
                </div>
                <Image
                  src={"/busi/hyogo/grbottom.svg"}
                  width={23}
                  height={23}
                  alt=""
                  className="mx-auto py-5 min-[900px]:hidden"
                />
              </div>
              <p className="my-auto pb-10 px-5 min-[900px]:pt-5 min-[900px]:text-center min-[900px]:my-0 min-[900px]:px-0">
                各地方、トーナメントを勝ち抜いた優勝者には東京本戦の出場権が与えられます。
              </p>
            </div>

            <Image
              src={"/busi/hyogo/grright.svg"}
              width={18}
              height={18}
              alt=""
              className="hidden min-[900px]:block mb-40 mx-5"
            />
          </div>

          <div className="flex flex-colm">
            <div className="flex flex-colm min-[900px]:block">
              <div className="">
                <div className="circle">
                  <div className="circleinner font-bold text-lg">
                    <p className="text-[#c528fd] mt-10 max-[500px]:mt-5">
                      STEP 3
                    </p>
                    東京本戦出場
                  </div>
                </div>
                <Image
                  src={"/busi/hyogo/grbottom.svg"}
                  width={23}
                  height={23}
                  alt=""
                  className="mx-auto py-5 min-[900px]:hidden"
                />
              </div>
              <p className="my-auto pb-10 px-5 min-[900px]:pt-5 min-[900px]:text-center min-[900px]:my-0 min-[900px]:px-0">
                各地方大会の優勝者が東京に集い、日本一をかけた本戦に挑みます。
              </p>
            </div>
            <Image
              src={"/busi/hyogo/grright.svg"}
              width={18}
              height={18}
              alt=""
              className="hidden min-[900px]:block mb-40 mx-5"
            />
          </div>

          <div className="flex flex-colm">
            <div className="flex flex-colm min-[900px]:block">
              <div className="circle">
                <div className="circleinner font-bold text-lg">
                  <p className="text-[#c528fd] mt-10 max-[500px]:mt-5">
                    STEP 4
                  </p>
                  グランプリ
                </div>
              </div>
              <p className="my-auto px-5 min-[900px]:pt-5 min-[900px]:text-center min-[900px]:my-0 min-[900px]:px-0">
                見事日本一となった優勝者には、起業資金として賞金1000万円が贈呈されます。
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://forms.gle/f6uJ6DoBpp9c2W2X9"
          target="_blank"
          className="button md:text-2xl text-base font-bold relative"
        >
          エントリー
          <Image
            src={"/top/arrow_white.svg"}
            alt={"▶︎"}
            width={8.45}
            height={12.45}
            className={"absolute top-auto bottom-auto right-4"}
          />
        </a>
      </section>
    </>
  );
};

export default WinnerBenefit;
