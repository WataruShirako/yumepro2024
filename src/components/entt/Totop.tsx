import Image from 'next/image';

const ToTop = () => {
  return (
    <>
      <div
        id="toTop"
        className={
          'bg-[#252525] flex justify-center items-center text-[#efefef] h-16 cursor-pointer'
        }
      >
        <p>ページトップへ</p>
      </div>
    </>
  );
};

export default ToTop;
