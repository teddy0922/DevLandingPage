import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our benefits",
  desc: "At Northern Management, we're passionate about delivering exceptional software development services to help our clients achieve their unique business goals. Here's why you should choose us.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Customized solutions",
      desc: "Unique solutions tailored to your business needs.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Faster time-to-market",
      desc: "Industry-leading tech for quicker solutions.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Improved efficiency",
      desc: "Streamline your business processes with optimized software.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Another benifits",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Increased scalability",
      desc: "Adaptable software solutions that grow with your business.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Measurable results",
      desc: "Tangible outcomes that make a lasting impact.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Exceptional customer service",
      desc: "Dedicated support for success at every step.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
