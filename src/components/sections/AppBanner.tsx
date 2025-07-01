import React from "react";
import AppAdvantage from "../../components/sections/AdvantageComponent";
import type { AdvantageItem } from "../../components/sections/AdvantageComponent"

import appImg1 from "../../assets/app1.png";
import appImg2 from "../../assets/app2.png";
import appImg3 from "../../assets/app3.png";
import mobileImg1 from '../../assets/mobileApp1.png'
import mobileImg2 from '../../assets/mobileApp2.png'
import mobileImg3 from '../../assets/mobileApp3.png'

const appData: AdvantageItem[] = [
  {
    title: "400 Lakh+ Questions Practised",
    description:
      "Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas",
    imageURL: appImg1,
    mobileImgUrl: mobileImg1,
  },
  {
    title: "10 Lakh+ hours of Learning Content consumed",
    description:
      "Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level.",
    imageURL: appImg2,
    mobileImgUrl: mobileImg2,
  },
  {
    title: "10 Lakh+ Doubts Solved",
    description:
      "Get instant answers with faculty help & our AI Assistant available 24/7 in any language.",
    imageURL: appImg3,
    mobileImgUrl: mobileImg3,
  },
];

const AppBanner: React.FC = () => {
  return (
    <AppAdvantage
      title="ALLEN App Advantage"
      data={appData}
      ctaText="Explore More"
      onCtaClick={() => console.log("CTA Clicked")}
    />
  );
};

export default AppBanner;
