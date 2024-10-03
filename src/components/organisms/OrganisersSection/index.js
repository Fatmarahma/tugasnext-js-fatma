import OrganiserCard from "@/components/molecules/OrganiserCard";
import organisersData from "@/data/organisersData";

const OrganisersSection = () => (
  <section>
    <div className="text-center mb-6 grid grid-cols-1 gap-6 pt-4 pb-4">
      <h2 className="text-3xl font-bold mb-4">Meet the Organisers</h2>
      <div className="flex space-y-6">
        {organisersData.map((organiser) => (
          <OrganiserCard key={organiser.name} organiser={organiser} />
        ))}
      </div>
    </div>
  </section>
);

export default OrganisersSection;
