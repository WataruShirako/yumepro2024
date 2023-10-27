const Footer = () => {
  return (
    <footer className={"bg-[#485757] text-[#eee]"}>
      <div className="m-auto py-5 md:py-5 px-5 item-center text-center">
        {/*
      <div className="footerInner flex flex-col-reverse md:flex-row max-w-7xl m-auto justify-between items-center md:h-20 gap-4 px-5 text-center">
      */}
        <p>
          <small className={"text-base"}>
            &copy;yumepro All rights reserved.
          </small>
        </p>
        {/*
        <ul className={'flex flex-col md:flex-row gap-6 text-center mt-8 md:mt-0'}>
          <li className={'text-xs font-semibold'}>
            <a href="https://www.cred-in.com/company/" target="_blank">
              運営会社
            </a>
          </li>
          {/* <li className={'text-xs font-semibold'}>
              <Link href="">夢叶えるプロジェクトとは</Link>
            </li> */}
        {/*
          <li className={'text-xs font-semibold'}>
            <a href="https://yume-pj.com/project/sponsor/" target="_blank">
              スポンサー募集 
            </a>
        </ul>
          </li>
          */}
      </div>
    </footer>
  );
};

export default Footer;
