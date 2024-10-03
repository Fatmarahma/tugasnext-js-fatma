// src/components/organisms/SubscriptionForm.js
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col w-full bg-[#E0C097] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Hear New Announcements First & Join a Wonderful Community</h2>
      <form
        id="wf-form-Subscription"
        method="get"
        action="mailto:gemmy1929@gmail.com"
        enctype="text/plain"
        className="flex flex-col"
      >
        <div className="flex flex-col mb-4">
          <Input type="text" name="FNAME" placeholder="First Name *" required maxLength="256" />
          <Input type="email" name="Email" placeholder="Email *" required maxLength="256" />
        </div>
        <Button href="#" color="text-white" bgClass="bg-[#B99470]">
          Sign Me Up
        </Button>
      </form>
      <div className="thank-you hidden mt-4" tabindex="-1" role="region" aria-label="Subscription success">
        <div className="flex items-center">
          <div className="inline">Thank you! You little gem, we will keep you updated.</div>
        </div>
      </div>
      <div className="w-form-fail hidden mt-4" tabindex="-1" role="region" aria-label="Subscription failure">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
