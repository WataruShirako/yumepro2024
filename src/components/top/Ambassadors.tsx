import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Ambassadors = () => {
  return (
    <section id="ambassador" className="pt-12 md:pt-24">
      <h2 className={"text-center"}>
        <span
          className={
            "text-[#C52CFD] font-bold flex items-center justify-center gap-2"
          }
        >
          <Image
            src={"/icons/ambassodors.svg"}
            alt={""}
            width={17}
            height={20}
          />
          Ambassadors
        </span>
        <p className={"font-bold text-2xl md:text-3xl mt-1"}>アンバサダー</p>
      </h2>
      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">MAIN AMBASSADOR</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-2.5 justify-center max-w-5xl mx-auto">
          <p className="text-2xl p-28 bg-white rounded-2xl">Coming Soon</p>
          {/** 
          <div>
            <Image
              src={"/top/ambassodors/yokotamirai.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl  block "
            />
            横田未来
          </div>
          */}
        </div>
      </div>
      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">GUEST AMBASSADOR</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-2.5 justify-center max-w-5xl mx-auto">
          <div>
            <Image
              src={"/top/ambassodors/yokotamirai.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl  block "
            />
            横田未来
          </div>
        </div>
      </div>

      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">MOVIE</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-5 justify-center max-w-5xl mx-auto">
          <div>
            <Image
              src={"/top/ambassodors/oguriyui.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block "
            />
            小栗有以
          </div>
          <div>
            <Image
              src={"/top/ambassodors/linxiang.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block "
            />
            リンシャン
          </div>
          <div>
            <Image
              src={"/top/ambassodors/ryuto.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl block "
            />
            りゅうと
          </div>
          <div>
            <Image
              src={"/top/ambassodors/miyasenako.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block "
            />
            宮瀬なこ
          </div>
          <div>
            <Image
              src={"/top/ambassodors/takanashiyuka.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl block "
            />
            高梨優佳
          </div>
          <div>
            <Image
              src={"/top/ambassodors/taguchiotoha.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl block "
            />
            田口音羽
          </div>
          <div>
            <Image
              src={"/top/ambassodors/kimuraayane.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block "
            />
            木村彩音
          </div>
          <div>
            <Image
              src={"/top/ambassodors/toutaro.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl block "
            />
            柊太朗
          </div>
        </div>
      </div>
      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">ARTIST</p>
        <div className="mt-2 md:mt-4 flex flex-row flex-wrap gap-1 md:gap-2.5 justify-center max-w-5xl mx-auto">
          <div>
            <Image
              src={"/top/kamengumi.jpg"}
              alt=""
              width={400}
              height={300}
              className="rounded-2xl  block "
            />
            華MEN組
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;
