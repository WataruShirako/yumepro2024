"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { Navigation } from "./Navigation";

// Navigation ビジネス部門
const NavBusi = () => {
  const enttContests = [
    {
      path: "/business",
      name: "business",
      title: "全国学生スタートアップ甲子園",
    },

    {
      path: "/business/miyagi",
      name: "test",
      title: "宮城大会",
    },
    {
      path: "/business/tokyo",
      name: "test",
      title: "東京大会",
    },
    {
      path: "/business/shizuoka",
      name: "test",
      title: "静岡大会",
    },
    {
      path: "/business/aichi",
      name: "test",
      title: "愛知大会",
    },
    {
      path: "/business/ishikawa",
      name: "test",
      title: "石川大会",
    },
    {
      path: "/business/osaka",
      name: "test",
      title: "大阪大会",
    },
    {
      path: "/business/kyoto",
      name: "test",
      title: "京都大会",
    },
    {
      path: "/business/hyogo",
      name: "test",
      title: "神戸大会",
    },
    {
      path: "/business/kagawa",
      name: "test",
      title: "香川大会",
    },
    {
      path: "/business/fukuoka",
      name: "test",
      title: "福岡大会",
    },
    {
      path: "/business/kagoshima",
      name: "test",
      title: "鹿児島大会",
    },

    {
      path: "/business/okinawa",
      name: "test",
      title: "沖縄大会",
    },
  ];
  return (
    <nav
      className={
        "absolute top-[150%] left-1/2 -translate-x-1/2 bg-white shadow w-[280px] border rounded-xl overflow-hidden"
      }
    >
      <ul className={""}>
        {enttContests.map((contest, index) => (
          <li key={index}>
            <a
              href={`${contest.path}`}
              className={
                "px-3 py-2 text-sm text-[#252525] flex hover:bg-slate-50 gap-4 border-b-2 border-slate-50 border-solid"
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
    {
      path: "/project/entertainment",
      name: "star",
      title: "スター誕生オーディション",
    },
    {
      path: "/project/entertainment/hokkaido",
      name: "test",
      title: "北海道大会",
    },

    {
      path: "/project/entertainment/miyagi",
      name: "test",
      title: "宮城大会",
    },
    {
      path: "/project/entertainment/tokyo",
      name: "test",
      title: "東京大会",
    },
    {
      path: "/project/entertainment/shizuoka",
      name: "test",
      title: "静岡大会",
    },
    {
      path: "/project/entertainment/aichi",
      name: "test",
      title: "愛知大会",
    },
    {
      path: "/project/entertainment/ishikawa",
      name: "test",
      title: "石川大会",
    },
    {
      path: "/project/entertainment/osaka",
      name: "test",
      title: "大阪大会",
    },
    {
      path: "/project/entertainment/kyoto",
      name: "test",
      title: "京都大会",
    },
    {
      path: "/project/entertainment/hyogo",
      name: "test",
      title: "神戸大会",
    },
    {
      path: "/project/entertainment/kagawa",
      name: "test",
      title: "香川大会",
    },
    {
      path: "/project/entertainment/fukuoka",
      name: "test",
      title: "福岡大会",
    },
    {
      path: "/project/entertainment/kagoshima",
      name: "test",
      title: "鹿児島大会",
    },

    {
      path: "/project/entertainment/okinawa",
      name: "test",
      title: "沖縄大会",
    },
  ];
  return (
    <nav
      className={
        "absolute top-[150%] left-1/2 -translate-x-1/2 bg-white shadow w-[250px] border rounded-xl overflow-hidden"
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
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };
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
      <header className="flex justify-between px-6 md:px-6 md:justify-center items-center m-auto fixed w-full h-[80px] md:h-[100px] bg-white z-50 gap-10">
        <a href="/">
          <Image src={"/logo_black.svg"} alt={"logo"} width={50} height={52} />
        </a>

        {/*        <button className="humb md:hidden flex flex-col">
          <Image src={"/icons/humb.svg"} alt={"="} width={36} height={36} />
        </button>
  */}
        <ToggleButton
          open={open}
          controls="navigation"
          label="メニューを開きます"
          onClick={toggleFunction}
        />
        <Navigation id="navigation" open={open} />

        <nav className={"hidden md:block"}>
          <ul className="flex gap-12">
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
            <li>
              <a
                href="https://www.yume-pj.com/news"
                className={"text-sm font-semibold flex"}
              >
                ニュース
              </a>
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

      <div className={"pb-[80px] md:pb-[100px]"}></div>
    </>
  );
};

export default Header;
