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
        <p className="mt-6 md:mt-12 font-semibold">総合司会</p>
        <div className="mt-2 md:mt-4 grid grid-cols-1 sm:grid-cols-2  gap-2 px-3 md:gap-5 justify-center max-w-5xl mx-auto w-fit">
          <div>
            <Image
              src={"/top/fukuda.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl  block "
            />
            福田典子
          </div>
          <div>
            <Image
              src={"/top/tokui.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl  block "
            />
            徳井健太(平成ノブシコブシ)
          </div>
        </div>
      </div>
      <div className="container text-center m-auto mt-6">
        <p className="mt-6 md:mt-12 font-semibold">GUEST AMBASSADOR</p>
        <div className="mt-2 md:mt-4 grid grid-cols-1 sm:grid-cols-2  gap-2 px-3  md:gap-5 justify-center max-w-5xl mx-auto w-fit">
          <div>
            <Image
              src={"/top/nakagawa1.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl  block"
            />
            仲川遥香
          </div>
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
        <div className="mt-2 md:mt-4 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-2 md:gap-5 justify-center max-w-5xl mx-auto w-fit px-3">
          <div className="mx-auto ">
            <Image
              src={"/top/ambassodors/oguriyui.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block"
            />
            小栗有以
          </div>
          <div className="mx-auto">
            <Image
              src={"/top/ambassodors/linxiang.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block "
            />
            リンシャン
          </div>
          <div className="mx-auto">
            <Image
              src={"/top/ambassodors/ryuto.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl block "
            />
            りゅうと
          </div>
          <div className="mx-auto">
            <Image
              src={"/top/ambassodors/miyasenako.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block "
            />
            宮瀬なこ
          </div>
          <div className="mx-auto">
            <Image
              src={"/top/ambassodors/takanashiyuka.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl block "
            />
            高梨優佳
          </div>
          <div className="mx-auto">
            <Image
              src={"/top/ambassodors/taguchiotoha.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl block "
            />
            田口音羽
          </div>
          <div className="mx-auto">
            <Image
              src={"/top/ambassodors/kimuraayane.webp"}
              alt=""
              width={190}
              height={190}
              className="rounded-2xl  block "
            />
            木村彩音
          </div>
          <div className="mx-auto">
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
        <p className="mt-6 md:mt-12 font-semibold">PERFORMANCE</p>
        <div className="mt-2 md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 px-3  md:gap-5 justify-center max-w-5xl mx-auto w-fit">
          <div>
            <Image
              src={"/top/kamengumi1.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl  block "
            />
            華MEN組
          </div>
          <div>
            <Image
              src={"/top/andmore.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl  block "
            />
            AND MORE
          </div>
        </div>
        <div className="mt-2 md:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-2 px-3  md:gap-5 justify-center max-w-7xl mx-auto w-fit">
          <div>
            <Image
              src={"/top/+1.jpg"}
              alt=""
              width={600}
              height={600}
              className="rounded-2xl  block "
            />
            ＋1（プラスワン）
          </div>
          <div>
            <Image
              src={"/top/performance1.jpg"}
              alt=""
              width={600}
              height={600}
              className="rounded-2xl  block "
            />
            100℃の世界
          </div>
          <div>
            <Image
              src={"/top/performance2.jpg"}
              alt=""
              width={600}
              height={600}
              className="rounded-2xl  block "
            />
            VORTEX
          </div>
          <div>
            <Image
              src={"/top/performance3.jpg"}
              alt=""
              width={600}
              height={600}
              className="rounded-2xl  block "
            />
            東京ガールズブラボー
          </div>
          <div>
            <Image
              src={"/top/performance4.jpg"}
              alt=""
              width={600}
              height={600}
              className="rounded-2xl  block "
            />
            ROYAL NOVICE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;
