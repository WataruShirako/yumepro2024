import Image from "next/image";

const Committee = () => {
  return (
    <>
      <section className="committee">
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
              BEMEFIT
            </p>
          </div>
          <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl ">
            優勝特典
          </p>
        </h2>
        <div className="container mx-auto px-5 md:px-0 md:max-w-2xl">
          <p className="py-5 md:py-8 border-solid border-t last-of-type:border-b border-[#485757] text-lg text-center">
            東京本線出場
          </p>
        </div>
        <div className="container px-5 min-[900px]:flex min-[900px]:flex-colm justify-center my-10 gap-5 m-auto md:max-w-4xl items-start">
          <div className="flex flex-colm">
            <div className="flex flex-colm min-[900px]:block">
              <div className="">
                <div className="circle">
                  <div className="circleinner font-bold text-lg ">
                    地方大会出場
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
                北海道、東京、愛知、石川、大阪、兵庫、福岡、沖縄各地方でトーナメント戦を行います。
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
                    地方大会優勝
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
                  東京本戦優勝
                </div>
              </div>
              <p className="my-auto px-5 min-[900px]:pt-5 min-[900px]:text-center min-[900px]:my-0 min-[900px]:px-0">
                見事日本一となった優勝者には、賞金1000万円とシリコンバレー渡航・宿泊費用が贈呈されます。
              </p>
            </div>
          </div>
        </div>
        <a href="" className="button md:text-2xl text-base font-bold relative">
          応募する
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

export default Committee;
