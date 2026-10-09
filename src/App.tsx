/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveTree } from './components/InteractiveTree';
import { SideBySideSlides } from './components/SideBySideSlides';
import { SideSlidePanel } from './components/SideSlidePanel';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { CertificationsHackathons } from './components/CertificationsHackathons';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectItem } from './data/portfolioData';
import { Sparkles, Columns } from 'lucide-react';

export default function App() {
  // Navigation & side slide state
  const [activeBranch, setActiveBranch] = useState<string>('about');
  const [sideSlideDrawerOpen, setSideSlideDrawerOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [photoModalOpen, setPhotoModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  // Restore custom photo from localStorage if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ssk_portfolio_custom_photo');
      if (stored) {
        setCustomPhotoUrl(stored);
      }
    } catch {
      // Storage access fail-safe
    }
  }, []);

  const handleSavePhoto = (photo: string | null) => {
    setCustomPhotoUrl(photo);
    try {
      if (photo) {
        localStorage.setItem('ssk_portfolio_custom_photo', photo);
      } else {
        localStorage.removeItem('ssk_portfolio_custom_photo');
      }
    } catch {
      // Storage access fail-safe
    }
  };

  // When a branch is selected on the Tree, set active branch and scroll to the side-by-side slides!
  const handleSelectBranch = (branchId: string) => {
    setActiveBranch(branchId);
    const slidesElement = document.getElementById('side-slides');
    if (slidesElement) {
      slidesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Also support navigation from Navbar
  const handleNavigateToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'branches' || sectionId === 'tree') {
      const el = document.getElementById('tree');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // For specific content sections, select that branch and smoothly scroll to the side-by-side slides
    setActiveBranch(sectionId);
    const slidesElement = document.getElementById('side-slides');
    if (slidesElement) {
      slidesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render the exact content component inside the optional drawer
  const renderDrawerContent = () => {
    switch (activeBranch) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects onSelectProject={(p) => setSelectedProject(p)} />;
      case 'education':
        return <Education />;
      case 'hackathons':
        return <CertificationsHackathons focusSection="hackathons" />;
      case 'certifications':
        return <CertificationsHackathons focusSection="certifications" />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Experience */}
      <main className="flex-1 pt-16 flex flex-col">
        
        {/* 1. Hero Introduction Bar */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
          customPhotoUrl={customPhotoUrl}
          onViewProjects={() => handleSelectBranch('projects')}
        />

        {/* 2. THE TREE OF BRANCHES (Prominent Interactive Hub) */}
        <div id="tree" className="scroll-mt-20 relative bg-gradient-to-b from-[#0B1120] via-[#0D152A] to-[#0B1120] border-y border-white/[0.06] py-6 sm:py-10">
          
          {/* Tree Instruction Banner */}
          <div className="max-w-4xl mx-auto px-4 text-center mb-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-900/40 text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-950/40 backdrop-blur-md animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Interactive Knowledge Tree · Press any branch to glide directly to its side-by-side slide!</span>
            </div>
          </div>

          {/* Interactive Tree Component */}
          <InteractiveTree
            onSelectBranch={handleSelectBranch}
            activeBranchId={activeBranch}
            onOpenResume={() => setResumeModalOpen(true)}
            onOpenPhotoModal={() => setPhotoModalOpen(true)}
            customPhotoUrl={customPhotoUrl}
          />
        </div>

        {/* 3. ALL SLIDES SHOWN SIDE BY SIDE */}
        <div className="w-full bg-[#080D1A] border-b border-white/[0.06] pt-4">
          <div className="max-w-7xl mx-auto px-4 text-center mb-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-950/60 text-sky-300 border border-sky-500/30 shadow-md">
              <Columns className="w-3.5 h-3.5 text-sky-400" />
              <span>All Slides Side by Side · Smooth Horizontal Navigation</span>
            </div>
          </div>

          {/* Side by Side Slides Component */}
          <SideBySideSlides
            activeBranchId={activeBranch}
            onSelectBranch={(id) => setActiveBranch(id)}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        </div>

      </main>

      {/* Optional Side Slide Drawer */}
      <SideSlidePanel
        isOpen={sideSlideDrawerOpen}
        activeBranchId={activeBranch}
        onClose={() => setSideSlideDrawerOpen(false)}
        onSelectBranch={(id) => setActiveBranch(id)}
      >
        {renderDrawerContent()}
      </SideSlidePanel>

      {/* Minimal Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <PhotoUploadModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        currentPhoto={customPhotoUrl}
        onSavePhoto={handleSavePhoto}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
