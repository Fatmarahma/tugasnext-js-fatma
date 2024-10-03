import ScheduleItem from "@/components/atoms/ScheduleItem";
import ScheduleDetail from "@/components/molecules/ScheduleDetail";

const Schedule = () => {
  return (
    <section className="bg-[#f3ecd2] flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-black">Schedule</h2>
      </div>

      <ScheduleItem>
        <div className="schedule-time-text text-2xl font-semibold text-gray-700">10:00</div>
        <div className="text-lg text-gray-800">Registration & Networking</div>
      </ScheduleItem>
      <ScheduleItem>
        <div className="schedule-time-text text-2xl font-semibold text-gray-700">10:45</div>
        <div className="text-lg text-gray-800">Opening Remarks</div>
      </ScheduleItem>

      <ScheduleDetail
        time="11:00"
        title="Keynote: McGuire Brannon"
        imageSrc1="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6646561f27e6363e068a90ca_Mcquire.webp"
        jobPosition1="The MVP of software education"
        eventTitle={"Opening Keynote"}
        imageAlt1="Mcguire Brannon"
        pinned1={true}
        description="You know him as the face of Webflow University and love him for igniting the no-code fire within you. Leading the Webflow education and community department at Webflow for over 5 years, McGuire has left a legacy of standout educational videos that redefined the no-code learning space."
      />
      <ScheduleItem>
        <div className="schedule-time-text text-2xl font-semibold text-gray-700">11:00</div>
        <div className="text-lg text-gray-800">Break</div>
      </ScheduleItem>
      <ScheduleDetail
        time="12:15"
        title="Cassie Evans"
        imageSrc1="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6646561fc0ae2533146963bc_Cassie.webp"
        jobPosition1="Puts the G into GSAP."
        imageAlt1="Cassie"
        eventTitle={".play() time"}
        pinned2={true}
        description="Animating with code might sound scary, but it's tons of fun. Let's speed run some GSAP basics and build out a cursor trail animation together! Cassie's current role at GreenSock pinpoints her impressively creative mind perfectly: Lead Bestower of Animation Superpowers. Leading the way in spectacular GSAP interactions across the web, Cassie likes to educate, inspire and tinker with projects that spark joy."
      />
      <ScheduleItem>
        <div className="schedule-time-text text-2xl font-semibold text-gray-700">11:00</div>
        <div className="text-lg text-gray-800">
          <span>Lunch</span>
          <ul className="list-disc ml-5">
            <li>Food by Seven Brothers</li>
            <li>Steel Drum Performance</li>
            <li>FlowFest Merch</li>
          </ul>
        </div>
      </ScheduleItem>
      <ScheduleDetail
        time="14:00"
        title="Matt Evans & Ailín Tobin"
        imageSrc1="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/668858287fdc4f1ddc83e902_matt-new.webp"
        imageAlt1="Matt Evans"
        jobPosition1="Matt"
        imageSrc2="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66850de83de221347398d0ce_Cassie%20Expanded%203.webp"
        imageAlt2="Ailín Tobin"
        jobPosition2="Ailín"
        eventTitle={"The Visual Div Podcast: Live!"}
        description="The Visual Div is your unfiltered gateway to all things Webflow, straight from the Emerald Isle."
      />
      <ScheduleDetail
        time="14:45"
        title="Alessia Sannazzaro"
        imageSrc1="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6646561fa0cbf7575662bcc5_Alessia.webp"
        jobPosition1="If you can imagine it, she can no-code it"
        eventTitle={"Introducing Slots: Webflow's Latest Component Upgrade"}
        imageAlt1="Alesia"
        description="Alessia is co-founder and managing director of Code & Wander, a London-based digital studio, excels in combining code and no-code tools for web and application development. As a Webflow Professional Partner, her agency delivers exceptional results, attracting top clients like ieso, Uswitch, The Browser Company, UCL, and establishing her as a leader in the no-code platform space."
      />
      <ScheduleItem>
        <div className="schedule-time-text text-2xl font-semibold text-gray-700">15:30</div>
        <div className="text-lg text-gray-800">Break</div>
      </ScheduleItem>

      <ScheduleDetail
        time="15:45"
        title="Agency Panel"
        imageSrc1="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/668654e3e028233243bbdae7_image%2031.webp"
        imageAlt1="Benn Raistrick"
        jobPosition1="Founder of Gravita"
        imageSrc2="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6646561fa0cbf7575662bcc5_Alessia.webp"
        imageAlt2="Alessia Sannazzaro"
        jobPosition2="Co-Founder of Code & Wander"
        imageSrc3="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66850de89be32e2875737c96_Cassie%20Expanded%201.webp"
        imageAlt3="Dan Foster"
        jobPosition3="Founder of Make Build"
        imageSrc4="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/668654dd2ca84c13445be086_image%2030.webp"
        imageAlt4="Jack Redley"
        jobPosition4="Founder of Webflail"
        eventTitleBottom={"Agency Panel: The Secret Sauce to Win More Clients"}
        eventDescBottom={
          "Soak up golden knowledge and experience from our Webflow agency senseis. Learn how to win clients and not go crazy whilst doing it!"
        }
      />
      <ScheduleItem>
        <div className="schedule-time-text text-2xl font-semibold text-gray-700">17:00</div>
        <div className="text-lg text-gray-800">
          <span>Afterparty!</span>
          <ul className="list-disc ml-5">
            <li>Bar by Seven Brothers Opens</li>
            <li>Award Winning Photobooth</li>
            <li>Fair Games</li>
            <li>Live music by Dan James</li>
          </ul>
        </div>
      </ScheduleItem>
    </section>
  );
};

export default Schedule;
