/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tree } from './components/Tree';
import { Drawer } from './components/Drawer';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  // Navigation & branch drawer state
  const [activeBranch, setActiveBranch] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [photoModalOpen, setPhotoModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  // CRITICAL BUG FIX & INITIAL STATE:
  // Strictly enforce starting at the top of Screen 1 at position (0, 0)
  // Disable automatic scroll restoration and hash jumps on initial load.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  // Restore custom photo if uploaded previously
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

  // Branch Selection: Opens the slide-out drawer
  const handleSelectBranch = (branchId: string) => {
    setActiveBranch(branchId);
    setIsDrawerOpen(true);
  };

  // Smooth scroll to Screen 2: The Cyber Tree
  const handleExploreJourney = () => {
    const treeElement = document.getElementById('tree');
    if (treeElement) {
      treeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navbar section navigation
  const handleNavigateToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'tree' || sectionId === 'branches') {
      const el = document.getElementById('tree');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Direct branch click: scroll to tree and slide open details drawer
    setActiveBranch(sectionId);
    setIsDrawerOpen(true);
    const el = document.getElementById('tree');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060913] text-[#F8FAFC] flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main 2-Screen Experience */}
      <main className="flex-1 pt-14 flex flex-col">
        {/* ========================================================
            SCREEN 1: HERO & IDENTITY
           ======================================================== */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
          customPhotoUrl={customPhotoUrl}
          onExploreJourney={handleExploreJourney}
        />

        {/* ========================================================
            SCREEN 2: THE INTERACTIVE CYBER-TREE HUB
           ======================================================== */}
        <div className="w-full bg-gradient-to-b from-[#060913] via-[#0b0f1d] to-[#060913] border-t border-white/[0.06]">
          <Tree
            onSelectBranch={handleSelectBranch}
            activeBranchId={activeBranch}
            onOpenResume={() => setResumeModalOpen(true)}
            onOpenPhotoModal={() => setPhotoModalOpen(true)}
            customPhotoUrl={customPhotoUrl}
            isDrawerOpen={isDrawerOpen}
          />
        </div>
      </main>

      {/* Slide-Out Drawer (Replaces the horizontal carousel) */}
      <Drawer
        isOpen={isDrawerOpen}
        activeBranchId={activeBranch}
        onClose={() => setIsDrawerOpen(false)}
        onSelectBranch={(id) => setActiveBranch(id)}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Footer */}
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
