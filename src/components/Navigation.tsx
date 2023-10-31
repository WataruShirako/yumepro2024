import { FC } from "react";

import "../app/nav.css";

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className="navigation">
      <ul className="">
        <li className="">
          <a href="/" className="font-bold text-2xl">
            TOP {">"}
          </a>
        </li>
        <li className="">
          <p className="font-bold text-2xl pt-5">ビジネス部門</p>
        </li>
        <li>
          <a href="/business">BUSINESS AWARD 2024 {">"}</a>
        </li>
        <li>
          <a href="/business/hyogo">兵庫大会 {">"}</a>
        </li>
        <li>
          <a href="/business/okinawa">沖縄大会 {">"}</a>
        </li>
        <li className="font-bold text-2xl pt-5">エンタメ部門</li>
        <li>
          <a href="/project/entertainment/photo">
            夢フォトオーディション {">"}
          </a>
        </li>
        <li className="pt-10">
          <a href="https://yume-pj.com/project/sponsor/">
            スポンサー募集 {">"}
          </a>
        </li>
      </ul>
    </nav>
  );
};
