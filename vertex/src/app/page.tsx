import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Services from "@/components/services/page";
import Workflow from "@/components/workflow/page";
import Testimonials from "@/components/testimonals/page";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Workflow />
      <Testimonials />
    </div>
  );
};

export default page;
