import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Development Service</title>
        <meta
          name="description"
          content="Development Service We Provide."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<Navbar />*/}
      <Hero />
      <SectionTitle
        pretitle="Service Benefits"
        title=" Why should you choose our service">
          At Northern Management, we provide expert software development services to help you achieve your business goals. With a team of experienced developers who deliver customized solutions, prioritize communication and transparency, and have a results-driven approach, we're committed to your success. Choose Northern Management for unmatched expertise, exceptional customer service, and measurable results.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/*<SectionTitle*/}
      {/*  pretitle="Watch a video"*/}
      {/*  title="Learn how to fullfil your needs">*/}
      {/*  This section is to highlight a promo or demo video of your product.*/}
      {/*  Analysts says a landing page with video has 3% more conversion rate. So,*/}
      {/*  don't forget to add one. Just like this.*/}
      {/*</SectionTitle>*/}
      {/*<Video />*/}
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">

      </SectionTitle>
      <Testimonials />
      {/*<SectionTitle pretitle="FAQ" title="Frequently Asked Questions">*/}
      {/*  Answer your customers possible questions here, it will increase the*/}
      {/*  conversion rate as well as support or chat requests.*/}
      {/*</SectionTitle>*/}
      {/*<Faq />*/}
      {/*<Cta />*/}
      {/*<Footer />*/}
      {/*<PopupWidget />*/}
    </>
  );
}
