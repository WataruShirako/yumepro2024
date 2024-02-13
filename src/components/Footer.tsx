const Footer = () => {
  return (
    <footer className={"bg-[#F7F7F7]"}>
      <div className="footerInner flex flex-col-reverse md:flex-row max-w-7xl m-auto justify-between items-center md:h-20 gap-4 px-5">
        <p>
          <small className={"text-xs"}>
            Copyright &copy;YUMEKANAERUPROJECT CO.,LTD
          </small>
        </p>
        <ul
          className={"flex flex-col md:flex-row gap-6 text-center mt-8 md:mt-0"}
        >
          <li className={"text-xs font-semibold"}>
            <a href="https://hostechjapan.com/" target="_blank">
              運営会社
            </a>
          </li>
          {/* <li className={'text-xs font-semibold'}>
            <Link href="">夢叶えるプロジェクトとは</Link>
          </li> */}
          <li className={"text-xs font-semibold"}>
            <a href="https://yume-pj.com/sponsor/" target="_blank">
              スポンサー募集
            </a>
          </li>
          <li className={"text-xs font-semibold"}>
            <a href="mailto:info@hostechjapan.com?subject=お問い合わせ">
              お問い合わせ：info@hostechjapan.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
