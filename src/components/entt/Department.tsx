import Image from 'next/image';

const Department = ({ department }: any) => {
  return (
    <section id="sponsor" className={''}>
      <h2 className="secTitle">
        <span className={'block'}>department</span>
        コンテスト部門一覧
      </h2>
      <p>各部門から1名、グランプリを決定します</p>
      <div className="container m-auto max-w-[92%] lg:max-w-4xl ">
        <h3 className={'bg-[#485757] text-[#efefef]'}>エンタメ部門</h3>
        <div className="flex">
          <div>
            <h4>エンタメコンテスト</h4>
            <div className="list"></div>
          </div>
          <div>
            <h4>スター誕生オーディション</h4>
            <div className="list"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
