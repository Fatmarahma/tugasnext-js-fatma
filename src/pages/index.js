import Schedule from "@/components/organisms/Schedule";
import Banner from "../components/organisms/Banner";
import TicketSection from "@/components/organisms/TicketSection";
import PortofolioSection from "@/components/organisms/PortofolioSection";
import OrganisersSection from "@/components/organisms/OrganisersSection";
import SubscriptionForm from "@/components/organisms/SubscriptionForm";
import WristbandForm from "@/components/organisms/WristbandForm";
import Footer from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#f3ecd2]" style={{ fontFamily: "'Salsa', cursive" }}>
        <Banner />
      </div>
      <div>
        <Schedule />
      </div>
      <div>
        <TicketSection />
      </div>
      <div>
        <PortofolioSection />
      </div>
      <div>
        <OrganisersSection />
      </div>
      <div className="flex p-10 gap-4">
        <WristbandForm />
        <SubscriptionForm />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
