import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProgressBar from './components/ProgressBar';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import Toast from './components/Toast';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [isResumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <ProgressBar />
      <CustomCursor />

      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main id="top">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <div className="divline" />

        <About />
        <div className="divline" />

        <Skills />
        <div className="divline" />

        <Experience />
        <div className="divline" />

        <Projects />
        <div className="divline" />

        <Education />
        <div className="divline" />

        <Certifications />

        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setResumeOpen(false)} />

      <BackToTop />
      <Toast />
    </>
  );
}
