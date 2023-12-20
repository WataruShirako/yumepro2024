import Image from "next/image";
import Comingsoon from "./Comingsoon";

const Chairman = () => {
  return (
    <>
      <section id="sponsor" className={""}>
        <h2 className="secTitle">
          <span className={"flex justify-center gap-2"}>
            <Image
              src={"/entt/yumephoto/icons/chairman.svg"}
              alt=""
              width={17}
              height={20}
            />
            Chairman
          </span>
          総合司会
        </h2>

        <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
          <div className="w-1/2">
            <Image
              src={"/star/chairman.jpg"}
              width={800}
              height={800}
              alt=""
              className="w-60md:w-[320px] object-cover mx-auto"
            />
          </div>
          <div className="itemText px-5 md:w-1/2 text-left w-4/5 w-full">
            <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
              小栗 有以　
              <span className="md:text-[15px] text-[13px]">Oguri yui</span>
            </p>
            <p className="max-w-md text-[13px] mx-auto md:text-left md:mx-0">
              ファッションモデル、女優であり、女性アイドルグループ・AKB48のメンバー。
              <br />
              2014年3月、チーム8のメンバーとしてお披露目。2016年11月、シングル「ハイテンション」で初選抜入り。
              <br />
              『LARME』のレギュラーモデル。愛称は、ゆいゆい。
              <br />
              <br />
            </p>
            <div className="max-w-md mx-auto md:mx-0">
              <div className={"flex items-center gap-4 text-sm mb-2 md:mb-4 "}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.997"
                  height="16.258"
                  viewBox="0 0 19.997 16.258"
                >
                  <path
                    id="icon_twitter"
                    d="M17.95,4.047c.012.176.012.353.012.531A11.6,11.6,0,0,1,6.289,16.258v0A11.61,11.61,0,0,1,0,14.414a8.343,8.343,0,0,0,.976.059,8.235,8.235,0,0,0,5.1-1.761A4.108,4.108,0,0,1,2.239,9.862a4.088,4.088,0,0,0,1.852-.071A4.1,4.1,0,0,1,.8,5.768V5.716a4.075,4.075,0,0,0,1.862.514A4.111,4.111,0,0,1,1.392.749,11.642,11.642,0,0,0,9.848,5.037a4.107,4.107,0,0,1,6.991-3.744,8.23,8.23,0,0,0,2.605-1,4.12,4.12,0,0,1-1.8,2.27A8.155,8.155,0,0,0,20,1.921,8.337,8.337,0,0,1,17.95,4.047Z"
                    fill="#485757"
                  />
                </svg>
                <a
                  href={`https://twitter.com/yuiyui_maromaro`}
                  target="_blank"
                  className={"text-xs md:text-base hover:opacity-50"}
                >
                  @yuiyui_maromaro
                </a>
              </div>
              <div
                className={
                  "flex items-center justify-start gap-4 text-sm mb-2 md:mb-4"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.997"
                  height="19.997"
                  viewBox="0 0 19.997 19.997"
                >
                  <g
                    id="グループ_726"
                    data-name="グループ 726"
                    transform="translate(-6388 -3044)"
                  >
                    <path
                      id="長方形_462"
                      data-name="長方形 462"
                      d="M4.555-1h8.888A5.561,5.561,0,0,1,19,4.555v8.888A5.561,5.561,0,0,1,13.442,19H4.555A5.561,5.561,0,0,1-1,13.442V4.555A5.561,5.561,0,0,1,4.555-1Zm8.888,17.775a3.337,3.337,0,0,0,3.333-3.333V4.555a3.337,3.337,0,0,0-3.333-3.333H4.555A3.337,3.337,0,0,0,1.222,4.555v8.888a3.337,3.337,0,0,0,3.333,3.333Z"
                      transform="translate(6389 3045)"
                      fill="#485757"
                    />
                    <path
                      id="楕円形_32"
                      data-name="楕円形 32"
                      d="M3.444-1A4.444,4.444,0,1,1-1,3.444,4.449,4.449,0,0,1,3.444-1Zm0,6.666A2.222,2.222,0,1,0,1.222,3.444,2.224,2.224,0,0,0,3.444,5.666Z"
                      transform="translate(6394.555 3050.555)"
                      fill="#485757"
                    />
                    <path
                      id="線_144"
                      data-name="線 144"
                      d="M.111,1.223A1.111,1.111,0,1,1,1.222.111h0A1.111,1.111,0,0,1,.111,1.223Z"
                      transform="translate(6402.887 3048.888)"
                      fill="#485757"
                    />
                  </g>
                </svg>
                <a
                  href={`https://www.instagram.com/yuioguri_1226/`}
                  target="_blank"
                  className={"text-xs md:text-base hover:opacity-50"}
                >
                  @yuioguri_1226
                </a>
              </div>

              <div
                className={
                  "flex items-center justify-start gap-4 text-sm mb-2 md:mb-4"
                }
              >
                <Image
                  src={"/icons/tiktok.svg"}
                  alt=""
                  width={22}
                  height={22}
                />
                <a
                  href={`https://www.tiktok.com/@yuioguri.akb48`}
                  target="_blank"
                  className={"text-xs md:text-base hover:opacity-50"}
                >
                  @yuioguri.akb48
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="svg__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"svg__content top"}
          viewBox="0 0 1366 100"
        >
          <path
            id="パス_285"
            data-name="パス 285"
            d="M0,120H1366V60s-154.1-40-324.849-40S683,60,683,60s-208.446,40-379.2,40S0,60,0,60Z"
            transform="translate(0 -20)"
            fill="#fff"
          />
        </svg>
      </div>
    </>
  );
};

export default Chairman;
