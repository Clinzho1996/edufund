import { useState } from "react";

import UserDetails from "./UserDetails";
import "./StartCampaign.css";
import CampaignDetails from "./CampaignDetails";
import AmountMilestone from "./AmountMilestone";
import Confirm from "./Confirm";
import Success from "./Success";

const StartCampaign = () => {
  const [step, setStep] = useState(0);
  const [startCampaign, setStartCampaign] = useState({
    fullName: "",
    email: "",
    walletAddress: "",
    campaignTitle: "",
    campaignDetails: "",
    social: "",
    amount: "",
  });
  // Back to the prev step
  const prevStep = (newData) => {
    setStartCampaign((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev - 1);
  };
  // Proceed to the next step
  const nextStep = (newData) => {
    setStartCampaign((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev + 1);
    console.log(newData);
  };

  const formSteps = [
    <UserDetails
      startCampaign={startCampaign}
      setStartCampaign={setStartCampaign}
      nextStep={nextStep}
    />,
    <CampaignDetails
      startCampaign={startCampaign}
      nextStep={nextStep}
      prevStep={prevStep}
      setStartCampaign={setStartCampaign}
    />,
    <AmountMilestone
      startCampaign={startCampaign}
      nextStep={nextStep}
      prevStep={prevStep}
      setStartCampaign={setStartCampaign}
    />,
    <Confirm
      startCampaign={startCampaign}
      nextStep={nextStep}
      prevStep={prevStep}
      setStartCampaign={setStartCampaign}
    />,
    <Success startCampaign={startCampaign} />
  ];
  return <div>{formSteps[step]}</div>;
};

export default StartCampaign;
