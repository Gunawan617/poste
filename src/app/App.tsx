import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { SkillsSection } from './components/skills-section';
import { ProjectsSection } from './components/projects-section';
import { ExperienceSection } from './components/experience-section';
import { ContactSection } from './components/contact-section';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
