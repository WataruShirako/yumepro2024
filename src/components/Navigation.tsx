import { FC } from "react";
import Image from "next/image";
import "../app/nav.css";

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className="navigation ">
      <a href="/" className="top-0">
        <Image
          src={"/logo_black.svg"}
          alt={"logo"}
          width={98}
          height={103}
          className={"pb-10"}
        />
      </a>
      <p className="font-bold text-2xl pt-2 border-b border-dashed w-10/12 text-center">
        エンタメ部門
      </p>

      <a className="py-2" href="/project/entertainment/photo">
        夢フォトオーディション {">"}
      </a>
      <a className="py-2" href="/project/entertainment">
        夢プロスター誕生オーディション2024 {">"}
      </a>

      <p className="font-bold text-2xl pt-8  border-b  border-dashed w-10/12 text-center">
        ビジネス部門
      </p>

      <a className="py-2" href="/business">
        全国学生スタートアップ甲子園2024 {">"}
      </a>

      <p className="py-10">
        <a href="/sponsor">スポンサー募集 {">"}</a>
      </p>
    </nav>
  );
};
