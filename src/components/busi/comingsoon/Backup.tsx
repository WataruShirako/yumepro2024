import Image from "next/image";
import ComingSoon from "@/components/common/ComingSoon";
const Backup = () => {
  return (
    <section id="backup" className={"my-20 md:my-40"}>
      <h2 className="sectionTitle text-center items-center Montserrat">
        <div className="relative w-max">
          <Image
            src={"/busi/business_title_circle.svg"}
            width={128}
            height={128}
            alt=""
            className="absolute -top-1 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
          />
          <p className="relative break-all montserrat">Backup</p>
        </div>
        <p className="relative mt-2 md:mt-6 md:text-[32px] text-2xl">後援</p>
      </h2>
      <div className="pt-20">
        <ComingSoon />
      </div>
    </section>
  );
};

export default Backup;
