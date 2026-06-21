import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningRoadmap from './components/LearningRoadmap';
import GitHubStats from './components/GitHubStats';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden font-sans selection:bg-brand-mint/20 selection:text-brand-emerald">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <LearningRoadmap />
        <GitHubStats />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
