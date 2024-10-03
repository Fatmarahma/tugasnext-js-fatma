import React from "react";
import Image from "next/image";

const PortofolioSection = () => {
  return (
    <section className="py-10 bg-[#f3ecd2]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The best bits of a conference and festival, combined.
            </h2>
            <p className="text-gray-700 mb-2">FlowFest is an all day event brought to you by FlowMCR.</p>
            <p className="text-gray-700 mb-2">
              FlowFest combines the education of a conference and the fun of a festival, banishing the typical stuffy
              networking events we&apos;re used to and replacing them with a whole lot of laughs!
            </p>
            <p className="text-gray-700 mb-2">
              Expect inspiring no-code talks, interactive web design/ development workshops, outdoor games, live music,
              delicious food and a super welcoming community to chat to.
            </p>
            <p className="text-gray-700">
              If you&apos;re looking for a memorable day with a community of web designers and developers that will
              enhance your skills whilst having fun in the sun, FlowFest is the event for you!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66199799f8253eb06962e8de_Location-1.webp"
                loading="lazy"
                width={272}
                height={192}
                alt="Manchester Media City Gardens"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6619979b4650273227668ec0_Location-3.webp"
                loading="lazy"
                width={272}
                height={192}
                alt="Manchester Media City Gardens"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <Image
                src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/661997dd0308865e858e95c4_Location-2.webp"
                loading="lazy"
                width={272}
                height={192}
                alt="Manchester Media City Gardens"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortofolioSection;
