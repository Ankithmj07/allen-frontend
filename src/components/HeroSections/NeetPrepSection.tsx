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
    title: "Structured routine and study schedules",
    description:
      "Customised study schedules created for you based on your strengths and weaknesses, balancing study and break times.",
    imageURL: appImg1,
    mobileImgUrl: mobileImg1,
  },
  {
    title: "Deep conceptual understanding of subjects",
    description:
      "Get in-depth insights and a detailed breakdown of subject-wise expertise. Track & fix all mistakes in one place with ‘Improvement Book’ and improve your learning.",
    imageURL: appImg2,
    mobileImgUrl: mobileImg2,
  },
  {
    title: "Better your performance",
    description:
      "Get personalised Practice Quizzes tailored to your strengths and weaknesses for better concept mastery and performance.",
    imageURL: appImg3,
    mobileImgUrl: mobileImg3,
  },
  {
    title: "Care & Mentorship",
    description:
      "Get access to inspiring podcasts, live meditation, desk yoga, productivity tips, non-academic mentorship and private counselling for support during your prep journey.",
    imageURL: appImg3,
    mobileImgUrl: mobileImg3,
  },
];

const NeetPrepSection: React.FC = () => {
  return (
    <AppAdvantage
      title="Why ALLEN Online's app is your ultimate NEET prep partner"
      data={appData}
      ctaText="Explore More"
      onCtaClick={() => console.log("CTA Clicked")}
      bgClass="bg-[#0f0f0f]"
    />
  );
};

export default NeetPrepSection;
