import React, { Suspense } from 'react';
import Navbar from './components/UI/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/UI/Footer';
import CustomCursor from './components/UI/CustomCursor';

// Lazy load the heavy 3D scene
const SceneCanvas = React.lazy(() => import('./components/Scene/SceneCanvas'));

export default function App() {
  return (
    <>
      <CustomCursor />

      {/* 3D Background */}
      <Suspense fallback={null}>
        <SceneCanvas />
      </Suspense>

      {/* Main UI Overlay */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
