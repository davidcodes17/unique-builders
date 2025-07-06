import BuildSection from "@/layouts/build-section";
import CompanyProfile from "@/layouts/company-profile";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero";
import Project from "@/layouts/project";
import SectionOne from "@/layouts/section-one";

const Home = () => {
  return (
    <div>
      <div id="home" className="lg:px-30 px-5 pt-10 bg-[url('/assets/hero.png')] h-screen bg-cover bg-bottom w-full bg-no-repeat">
        <Header />
        <Hero />
      </div>
      <div className="lg:px-30 px-5">
        <section id="about">
          <CompanyProfile />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="vision-mission">
          <SectionOne />
        </section>
        <section id="contact">
          <BuildSection />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
