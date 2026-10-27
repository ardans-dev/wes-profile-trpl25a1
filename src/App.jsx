import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScheduleSection from './components/ScheduleSection';
import StudentDirectory from './components/StudentDirectory';
import OrganizationSection from './components/OrganizationSection';
import GallerySection from './components/GallerySection';
import ClassTerminal from './components/ClassTerminal';
import Footer from './components/Footer';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 flex flex-col selection:bg-blue-600/30 selection:text-blue-200 overflow-x-hidden">
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />
      
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <ScheduleSection />
        <StudentDirectory />
        <OrganizationSection />
        <GallerySection />
      </main>

      <Footer />

      <ClassTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
