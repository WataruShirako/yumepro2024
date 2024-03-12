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
              alt="丸尾浩一"
              className="w-60  md:w-[320px]  object-cover mx-auto"
            />
          </div>
          <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5 w-full">
            <p className="mt-2 md:text-[32px] text-xl font-bold mb-4 text-center md:text-left YuGothic">
              丸尾浩一
            </p>
            <p className="font-bold text-[15px] text-center md:text-left">
              株式会社Major7th　代表取締役
            </p>
            <div className="max-w-md text-[15px] mx-auto md:text-left md:mx-0">
              <br />
              大和証券株式会社に38年在籍し、専務取締役などの役員を12年間歴任。
              主幹事として株式会社メルカリやラクスル株式会社等、数々の大型スタートアップIPOを実現した他、経営破綻した日本航空株式会社の再上場や、楽天グループ株式会社、KDDI
              株式会社等、上場企業の資金調達にも携わる。
              現在、起業家支援サービスを提供する株式会社Major7thの代表取締役を務めながら、上場会社を含む複数社の社外役員等を兼務。
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adviser;
