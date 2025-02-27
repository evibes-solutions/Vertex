import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Services from "@/components/services/page";
import Workflow from "@/components/workflow/page";
import Testimonials from "@/components/testimonals/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";
import WhyChooseUs from "@/components/chooseus/page";


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Workflow />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default page;
