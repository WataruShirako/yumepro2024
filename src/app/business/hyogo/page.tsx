import Header from "@/components/busi/Header";
import Fv from "@/components/busi/hyogo/Fv";
import Venue from "@/components/busi/hyogo/Venue";
import Committee from "@/components/busi/hyogo/Committee";
import Schedulu from "@/components/busi/hyogo/Schedule";
import WinnerBenefit from "@/components/busi/hyogo/WinnerBenefit";
import Sponsor from "@/components/busi/hyogo/Sponsor";
import RegionalTournament from "@/components/busi/hyogo/RegionalTournament";
import Footer from "@/components/busi/Footer";

const BusinessPage = () => {
  return (
    <div className="bg-[#151D22]">
      <Header />
      <main className="busi">
        <Fv />
        <Venue />
        <Committee />
        <Schedulu />
        <WinnerBenefit />
        <Sponsor />
        <RegionalTournament />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessPage;
