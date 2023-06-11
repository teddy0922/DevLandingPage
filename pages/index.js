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
import Container from "../components/container";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

const Paragraph = ({children, title}) => {
    console.log(children);
    return (
        <Container className=" bg-gray-100">
            <h1 className={""}>{title}</h1>
            {children}
        </Container>
    )
};

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
      {/*<SectionTitle*/}
      {/*  pretitle="Service Benefits"*/}
      {/*  title=" Why should you choose our service">*/}
      {/*    At Northern Management, we provide expert software development services to help you achieve your business goals. With a team of experienced developers who deliver customized solutions, prioritize communication and transparency, and have a results-driven approach, we're committed to your success. Choose Northern Management for unmatched expertise, exceptional customer service, and measurable results.*/}
      {/*</SectionTitle>*/}

    <SectionTitle
        title=" App Development ">
        We build hybrid mobile apps with React Native and Flutter, two of the most advanced and popular cross-platform development frameworks. Our experienced team of developers has satisfied many clients with innovative, reliable, and user-friendly apps tailored to their specific needs. We incorporate the latest technologies to build wonderful, fascinating, smart, and cool apps that provide outstanding user experiences. Whether you need a simple app or a complex one with advanced features, we have the skills, tools, and creativity to bring your idea to life. Trust us to deliver high-quality apps fast, efficiently, and within your budget. Let us help you leverage the power of mobile technology to transform your business and reach new heights!
    </SectionTitle>

    <SectionTitle
        title=" Web Development ">
        We use modern technologies like Artificial Intelligence and Virtual Reality to create outstanding web development services. Our team understands the importance of delivering high-performance websites that fulfill the unique needs of customers. With our expertise, we can create smart and cool websites that are not only fascinating but also user-friendly. Our goal is to build a website that not only meets but exceeds the expectations of our clients. Let us help you take advantage of the latest technologies to bring your website to the next level.
    </SectionTitle>

    <SectionTitle
        title=" Developer Recommendation ">
        We have high talented developers in our team, and our developer recommendation service is here to help you find the right talent for your projects. We put our developers through a stringent selection process to ensure that they possess the technical excellence and interpersonal skills that are necessary to contribute effectively to your team. Our developers work seamlessly with you and your team to provide high-quality solutions that meet your needs. They leverage the latest tools and technologies to streamline your workflow and deliver results that go beyond your expectations. When you partner with us, you can trust that you're getting the support you need to take your projects to the next level. Let our high talented devs become your secret weapon in the world of software development.
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
        // pretitle="Testimonials"
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
