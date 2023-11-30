import { FC } from "react";
import Image from "next/image";
import "../app/nav.css";

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className="navigation">
      <a href="/" className="">
        <Image
          src={"/logo_black.svg"}
          alt={"logo"}
          width={98}
          height={103}
          className={"pb-10"}
        />
      </a>

      <p className="font-bold text-2xl pt-5">ビジネス部門</p>

      <a className="py-2" href="/business">
        全国学生スタートアップアワード {">"}
      </a>
      {/* 
      <a href="/business/tokyo">東京大会 {">"}</a>
      <a href="/business/aichi">愛知大会 {">"}</a>
      <a href="/business/ishikawa">石川大会 {">"}</a>
      <a href="/business/osaka">大阪大会 {">"}</a>
      <a href="/business/kyoto">京都大会 {">"}</a>
      <a href="/business/hyogo">兵庫大会 {">"}</a>
      <a href="/business/kagawa">香川大会 {">"}</a>
      <a href="/business/fukuoka">福岡大会 {">"}</a>
      <a href="/business/kagoshima">鹿児島大会 {">"}</a>
      <a href="/business/okinawa">沖縄大会 {">"}</a>
*/}
      <p className="font-bold text-2xl pt-5">エンタメ部門</p>

      <a className="py-2" href="/project/entertainment/photo">
        夢フォトオーディション {">"}
      </a>
      {/* 
      <a href="/project/entertainment/hyogo">兵庫大会 {">"}</a>

      <a href="/project/entertainment/okinawa">沖縄大会 {">"}</a>
*/}
      <p className="py-10">
        <a href="https://yume-pj.com/project/sponsor/">スポンサー募集 {">"}</a>
      </p>
    </nav>
  );
};
