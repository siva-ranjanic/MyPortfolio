import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import AboutSection from '../sections/AboutSection';
import ExperienceSection from '../sections/ExperienceSection';
import CertificationsSection from '../sections/CertificationsSection';
import ContactSection from '../sections/ContactSection';

const Home = () => {
  return (
    <main className="bg-background relative">
      <div className="space-y-0">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Home;
