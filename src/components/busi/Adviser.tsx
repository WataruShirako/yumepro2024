import Image from "next/image";

const Adviser = () => {
  return (
    <>
      <section id="adviser" className=" my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center">
          <div className="relative w-max montserrat">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all">
              Special <br className="sm:hidden" />
              Adviser
            </p>
          </div>
          <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">
            特別顧問
          </p>
        </h2>
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-4xl mx-auto">
          <div className="w-1/2">
            <Image
              src={"/busi/adviser.jpg"}
              width={642}
              height={642}
              alt=""
              className="w-60  md:w-[320px]  object-cover mx-auto"
            />
          </div>
          <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
            <p className="mt-2 md:text-[32px] text-xl font-bold mb-10 text-center md:text-left YuGothic">
              丸尾浩一
            </p>
            <p className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
              株式会社Major7th　代表取締役
              <br />
              大和証券株式会社に38年在籍し、専務取締役などの役員を12年間歴任。一貫して投資銀行業務に従事。主幹事として株式会社メルカリやラクスル株式会社等数々の大型スタートアップIPOを実現した他上場企業の資金調達にも携わる。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adviser;
