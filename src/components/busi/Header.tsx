"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Navigation ビジネス部門
const NavBusi = () => {
  const enttContests = [
    {
      path: "/business",
      name: "business",
      title: "BUSINESS AWARD 2024",
    },
    {
      path: "/business/hyogo",
      name: "",
      title: "兵庫大会",
    },
    {
      path: "/business/okinawa",
      name: "",
      title: "沖縄大会",
    },
  ];
  return (
    <nav
      className={
        "absolute top-[150%] left-1/2 -translate-x-1/2 bg-white shadow w-[230px] border rounded-xl overflow-hidden"
      }
    >
      <ul className={""}>
        {enttContests.map((contest, index) => (
          <li key={index}>
            <a
              href={`${contest.path}`}
              className={
                "px-4 py-2 text-sm text-[#252525] flex hover:bg-slate-50 gap-4 border-b-2 border-slate-50 border-solid"
              }
            >
              <Image
                src={`/icons/${contest.name}.svg`}
                alt={""}
                width={16}
                height={16}
              />
              <span dangerouslySetInnerHTML={{ __html: `${contest.title}` }} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Navigation エンタメ部門
const NavEntt = () => {
  const enttContests = [
    {
      path: "/project/entertainment/photo",
      name: "yumephoto",
      title: "夢フォトオーディション",
    },
  ];
  return (
    <nav
      className={
        "absolute top-[150%] left-1/2 -translate-x-1/2 bg-white shadow w-[230px] border rounded-xl overflow-hidden"
      }
    >
      <ul className={""}>
        {enttContests.map((contest, index) => (
          <li key={index}>
            <a
              href={`${contest.path}`}
              className={
                "px-4 py-2 text-sm text-[#252525] flex hover:bg-slate-50 gap-4 border-b-2 border-slate-50 border-solid"
              }
            >
              <Image
                src={`/icons/${contest.name}.svg`}
                alt={""}
                width={16}
                height={16}
              />
              <span dangerouslySetInnerHTML={{ __html: `${contest.title}` }} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = ({ header }: any) => {
  // ビジネス部門
  const [isNavBusiVisible, setIsNavBusiVisible] = useState(false);
  const hideNavBusi = () => {
    setIsNavBusiVisible(false);
  };
  const toggleNavBusi = (event: any) => {
    event.stopPropagation();
    setIsNavBusiVisible(!isNavBusiVisible);
  };
  useEffect(() => {
    if (isNavBusiVisible) {
      // ナビゲーションが表示されている時だけ、document全体のクリックイベントを追加
      document.addEventListener("click", hideNavBusi);
    }

    return () => {
      // コンポーネントがアンマウントされる時に、イベントリスナーを削除
      document.removeEventListener("click", hideNavBusi);
    };
  }, [isNavBusiVisible]);

  // エンタメ部門
  const [isNavEnttVisible, setIsNavEnttVisible] = useState(false);
  const hideNavEntt = () => {
    setIsNavEnttVisible(false);
  };
  const toggleNavEntt = (event: any) => {
    event.stopPropagation();
    setIsNavEnttVisible(!isNavEnttVisible);
  };
  useEffect(() => {
    if (isNavEnttVisible) {
      // ナビゲーションが表示されている時だけ、document全体のクリックイベントを追加
      document.addEventListener("click", hideNavEntt);
    }

    return () => {
      // コンポーネントがアンマウントされる時に、イベントリスナーを削除
      document.removeEventListener("click", hideNavEntt);
    };
  }, [isNavEnttVisible]);

  return (
    <>
      <header className="flex justify-between px-6 md:px-6 md:justify-center items-center m-auto fixed w-full h-[80px] md:h-[100px] text-white z-10 gap-10">
        <Link href="/">
          <Image
            priority
            src={"/logo_white.svg"}
            alt={"logo"}
            width={50}
            height={52}
          />
        </Link>

        <button className="humb md:hidden flex flex-col">
          <Image src={"/icons/humb.svg"} alt={"="} width={36} height={36} />
        </button>

        <nav className={"hidden md:block"}>
          <ul className="flex gap-12">
            <li className={"relative"}>
              <button
                onClick={toggleNavBusi}
                className={
                  "text-sm font-semibold flex items-center justify-center gap-1"
                }
              >
                ビジネス部門
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.409"
                  height="5.412"
                  viewBox="0 0 9.409 5.412"
                >
                  <g
                    id="グループ_579"
                    data-name="グループ 579"
                    transform="translate(11708.203 193.205)"
                  >
                    <path
                      id="パス_416"
                      data-name="パス 416"
                      d="M-9175.97-193.295l-4-4,.708-.707,4,4,4-4,.707.707-4.7,4.7Z"
                      transform="translate(-2528.236 4.794)"
                      fill="#485757"
                    />
                  </g>
                </svg>
              </button>
              {isNavBusiVisible && <NavBusi />}
            </li>
            <li className="relative">
              <button
                onClick={toggleNavEntt}
                className={
                  "text-sm font-semibold flex items-center justify-center gap-1"
                }
              >
                エンタメ部門
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.409"
                  height="5.412"
                  viewBox="0 0 9.409 5.412"
                >
                  <g
                    id="グループ_579"
                    data-name="グループ 579"
                    transform="translate(11708.203 193.205)"
                  >
                    <path
                      id="パス_416"
                      data-name="パス 416"
                      d="M-9175.97-193.295l-4-4,.708-.707,4,4,4-4,.707.707-4.7,4.7Z"
                      transform="translate(-2528.236 4.794)"
                      fill="#485757"
                    />
                  </g>
                </svg>
              </button>
              {isNavEnttVisible && <NavEntt />}
            </li>
            <li>
              <a
                href="https://yume-pj.com/project/sponsor/"
                className={"text-sm font-semibold flex"}
              >
                スポンサー募集
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;