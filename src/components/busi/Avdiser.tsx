import Image from "next/image";

const Avdiser = () => {
  return (
    <>
      <section className="adviser my-20 md:my-40">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={"/busi/business_title_circle.svg"}
              width={128}
              height={128}
              alt=""
              className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all">
              Special <br className="sm:hidden" />
              Adviser
            </p>
          </div>
          <span className="relative mt-2 md:mt-6">特別顧問</span>
        </h2>
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 gap-5 md:max-w-6xl mx-auto">
          <div className="itemImg">
            <Image
              src={"/busi/adviser.webp"}
              width={320}
              height={320}
              alt=""
              className="w-48 h-48 md:w-[320px] md:h-[320px] object-cover"
            />
          </div>
          <div className="itemText px-5 text-left md:w-1/2 text-left w-4/5">
            <p className="mt-2 text-2xl font-bold mb-10 text-center md:text-left">
              丸尾浩一
            </p>
            <p>
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

export default Avdiser;
