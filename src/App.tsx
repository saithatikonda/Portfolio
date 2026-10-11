/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tree } from './components/Tree';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { MallDoorIntro } from './components/MallDoorIntro';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  // Entrance loader state
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Navigation & branch state
  const [activeBranch, setActiveBranch] = useState<string | null>(null);
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

  // Branch Selection: In-place vertical expansion (clicking active closes it)
  const handleSelectBranch = (branchId: string) => {
    setActiveBranch((prev) => (prev === branchId ? null : branchId));
  };

  // Smooth scroll to Screen 2: The Knowledge & Project Tree
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
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Direct branch click: trigger target branch in Tree.tsx to expand immediately
    setActiveBranch(sectionId);

    // Smoothly scroll directly to that specific expanded card using scrollIntoView
    const scrollToTarget = () => {
      const el = document.getElementById(sectionId) || document.getElementById(`branch-${sectionId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const treeEl = document.getElementById('tree');
        if (treeEl) treeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    requestAnimationFrame(scrollToTarget);
    setTimeout(scrollToTarget, 40);
  };

  return (
    <div className="min-h-screen bg-[#060913] text-[#F8FAFC] flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Futuristic Automatic Mall Sliding Doors Entrance Loader */}
      {showIntro && (
        <MallDoorIntro
          onComplete={() => setShowIntro(false)}
          customPhotoUrl={customPhotoUrl}
        />
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
        activeSection={activeBranch}
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
            SCREEN 2: THE INTERACTIVE KNOWLEDGE TREE (IN-PLACE ACCORDION)
           ======================================================== */}
        <div className="w-full bg-gradient-to-b from-[#060913] via-[#0b0f1d] to-[#060913] border-t border-white/[0.06]">
          <Tree
            onSelectBranch={handleSelectBranch}
            activeBranchId={activeBranch}
            onOpenResume={() => setResumeModalOpen(true)}
            onOpenPhotoModal={() => setPhotoModalOpen(true)}
            customPhotoUrl={customPhotoUrl}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        </div>
      </main>

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
