export interface BranchNode {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  categoryNumber: string;
  color: {
    primary: string;
    glow: string;
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    gradient: string;
  };
  iconName: string;
  leaves: string[];
  description: string;
}

export const TREE_BRANCHES: BranchNode[] = [
  {
    id: 'intro',
    name: 'Root / Identity',
    shortName: 'Profile',
    tagline: 'Student, Developer & Builder',
    categoryNumber: '01',
    color: {
      primary: '#38BDF8',
      glow: 'rgba(56, 189, 248, 0.4)',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/40',
      text: 'text-sky-300',
      badgeBg: 'bg-sky-950/60',
      gradient: 'from-sky-500 to-blue-600',
    },
    iconName: 'User',
    leaves: ['CSD Undergraduate', 'Open to Opportunities', 'Problem Solver'],
    description: 'Foundational introduction, career objective, and active student status.',
  },
  {
    id: 'about',
    name: 'About & Philosophy',
    shortName: 'About',
    tagline: 'Building skills through code & challenges',
    categoryNumber: '02',
    color: {
      primary: '#34D399',
      glow: 'rgba(52, 211, 153, 0.4)',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/40',
      text: 'text-emerald-300',
      badgeBg: 'bg-emerald-950/60',
      gradient: 'from-emerald-400 to-teal-600',
    },
    iconName: 'Compass',
    leaves: ['Systems Mindset', 'Data-Driven Apps', 'Practical Execution'],
    description: 'Engineering mindset, curiosity for systems architecture, and core development pillars.',
  },
  {
    id: 'skills',
    name: 'Technical Toolkit',
    shortName: 'Skills',
    tagline: 'Programming, Algorithms & Systems',
    categoryNumber: '03',
    color: {
      primary: '#06B6D4',
      glow: 'rgba(6, 182, 212, 0.4)',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/40',
      text: 'text-cyan-300',
      badgeBg: 'bg-cyan-950/60',
      gradient: 'from-cyan-400 to-blue-600',
    },
    iconName: 'Wrench',
    leaves: ['C / Python / Java', 'DSA & Complexity', 'DBMS & SQL', 'Arduino IoT'],
    description: 'Core programming languages, computer science theory, and embedded hardware.',
  },
  {
    id: 'projects',
    name: 'Projects Showcase',
    shortName: 'Projects',
    tagline: 'Practical Software & Telemetry',
    categoryNumber: '04',
    color: {
      primary: '#818CF8',
      glow: 'rgba(129, 140, 248, 0.4)',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/40',
      text: 'text-indigo-300',
      badgeBg: 'bg-indigo-950/60',
      gradient: 'from-indigo-400 to-purple-600',
    },
    iconName: 'FolderGit2',
    leaves: ['DSA Visualizer', 'DBMS Query Engine', 'Arduino Telemetry'],
    description: 'Working implementations in algorithms, database management, and IoT microcontrollers.',
  },
  {
    id: 'education',
    name: 'Academic Foundation',
    shortName: 'Education',
    tagline: 'B.Tech in Computer Science & Data Science',
    categoryNumber: '05',
    color: {
      primary: '#FBBF24',
      glow: 'rgba(251, 191, 36, 0.4)',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/40',
      text: 'text-amber-300',
      badgeBg: 'bg-amber-950/60',
      gradient: 'from-amber-400 to-orange-600',
    },
    iconName: 'GraduationCap',
    leaves: ['CSD Degree', 'Data Structures', 'Database Systems', 'Algorithms'],
    description: 'Rigorous engineering coursework covering computer science fundamentals and data analysis.',
  },
  {
    id: 'hackathons',
    name: 'Hackathons & Events',
    shortName: 'Hackathons',
    tagline: 'Teamwork & High-Pressure Prototyping',
    categoryNumber: '06',
    color: {
      primary: '#FB7185',
      glow: 'rgba(251, 113, 133, 0.4)',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/40',
      text: 'text-rose-300',
      badgeBg: 'bg-rose-950/60',
      gradient: 'from-rose-400 to-pink-600',
    },
    iconName: 'Trophy',
    leaves: ['Smart India Hackathon', 'Zignasa', 'Ignisia', 'SAE Engineering'],
    description: 'Intense technical sprints and symposiums sharpening teamwork and fast prototyping.',
  },
  {
    id: 'certifications',
    name: 'Certifications',
    shortName: 'Certs',
    tagline: 'Verified Knowledge & Coursework',
    categoryNumber: '07',
    color: {
      primary: '#A78BFA',
      glow: 'rgba(167, 139, 250, 0.4)',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/40',
      text: 'text-purple-300',
      badgeBg: 'bg-purple-950/60',
      gradient: 'from-purple-400 to-indigo-600',
    },
    iconName: 'Award',
    leaves: ['DSA Certification', 'DBMS Architecture', 'Core CS Coursework'],
    description: 'Structured credential placeholders for verified courses, NPTEL badges, and certificates.',
  },
  {
    id: 'contact',
    name: 'Contact & Connect',
    shortName: 'Contact',
    tagline: "Let's Build Something Together",
    categoryNumber: '08',
    color: {
      primary: '#2DD4BF',
      glow: 'rgba(45, 212, 191, 0.4)',
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/40',
      text: 'text-teal-300',
      badgeBg: 'bg-teal-950/60',
      gradient: 'from-teal-400 to-emerald-600',
    },
    iconName: 'Mail',
    leaves: ['Email Direct', 'GitHub Repo', 'LinkedIn Profile', 'Quick Inquiry'],
    description: 'Direct communication channels for internships, technical discussions, and collaborations.',
  },
];
