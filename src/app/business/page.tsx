import About from "@/components/busi/About";
import Adviser from "@/components/busi/Adviser";
import Award from "@/components/busi/Award";
import Committee from "@/components/busi/Committee";
import Footer from "@/components/busi/Footer";
import Fv from "@/components/busi/Fv";
import Header from "@/components/busi/Header";
import Meetup from "@/components/busi/Meetup";
import News from "@/components/busi/News";
import Project from "@/components/busi/Project";
import Schedule from "@/components/busi/Schedule";
import Sponsor from "@/components/busi/Sponsor";
import Venue from "@/components/busi/Venue";
import Image from "next/image";
import Company from "@/components/busi/Company";
import Backup from "@/components/busi/Backup";

const BusinessPage = () => {
  return (
    <div className="bg-[#151D22]">
      <Header />
      <main className="busi">
        <Fv />
        <Project />
        <Venue />
        <Schedule />
        <About />
        <Adviser />
        <Committee />
        <Company />
        <Sponsor />
        <Backup />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessPage;
