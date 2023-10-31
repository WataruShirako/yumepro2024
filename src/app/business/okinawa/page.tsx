import Header from "@/components/busi/Header";
import Fv from "@/components/busi/okinawa/Fv";
import Venue from "@/components/busi/okinawa/Venue";
import Committee from "@/components/busi/okinawa/Committee";
import Schedulu from "@/components/busi/okinawa/Schedule";
import WinnerBenefit from "@/components/busi/common/WinnerBenefit";
import Sponsor from "@/components/busi/okinawa/Sponsor";
import RegionalTournament from "@/components/busi/common/RegionalTournament";
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
