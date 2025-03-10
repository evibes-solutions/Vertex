import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Services from "@/components/services/page";
import Workflow from "@/components/workflow/page";
import Testimonials from "@/components/testimonals/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";
import WhyChooseUs from "@/components/chooseus/page";
import Statistics from "@/components/statistics/page";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section id="stats">
        <Statistics />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Page;
