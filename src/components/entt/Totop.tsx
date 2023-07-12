'use client';

import Image from 'next/image';
import { useRef } from 'react';

const ToTop = () => {
  const toTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        id="toTop"
        className={
          'bg-[#252525] flex justify-center items-center text-[#efefef] h-16 cursor-pointer w-full hover:opacity-50'
        }
        onClick={toTop}
      >
        <p>ページトップへ</p>
      </button>
    </>
  );
};

export default ToTop;
