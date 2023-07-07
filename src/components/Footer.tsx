import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={'bg-[#efefef]'}>
      <div className="footerInner flex flex-col-reverse md:flex-row max-w-7xl m-auto justify-between items-center md:h-20 gap-4">
        <p>
          <small className={'text-xs'}>Copyright &copy;YUMEKANAERUPROJECT CO.,LTD</small>
        </p>
        <ul className={'flex flex-col md:flex-row gap-4 text-center mt-8'}>
          <li className={'text-sm font-semibold'}>
            <a href="">運営会社</a>
          </li>
          <li className={'text-sm font-semibold'}>
            <Link href="">夢叶えるプロジェクトとは</Link>
          </li>
          <li className={'text-sm font-semibold'}>ビジネス部門</li>
          <li className={'text-sm font-semibold'}>エンタメ部門</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
