import { lazy, Suspense } from 'react';
import HeroSection from '../sections/HeroSection';

const AboutSection = lazy(() => import('../sections/AboutSection'));
const ExperienceSection = lazy(() => import('../sections/ExperienceSection'));
const ProjectsSection = lazy(() => import('../sections/ProjectsSection'));
const CertificationsSection = lazy(() => import('../sections/CertificationsSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));

const Home = () => {
  return (
    <main className="bg-background relative">
      <div className="space-y-0">
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
