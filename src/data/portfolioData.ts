export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: 'core' | 'data' | 'embedded';
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    description: string;
    tags: string[];
    iconName: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  organization: string;
  year: string;
  link: string;
  description: string;
  badgeLabel: string;
}

export interface HackathonItem {
  name: string;
  type: string;
  focus: string;
  learnings: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Thatikonda Sai Shiva Kumar",
    shortName: "Sai Shiva Kumar",
    logoText: "SSK.",
    badge: "CSD Student · Developer · Hackathon Enthusiast",
    statusBadge: "Open to Opportunities",
    role: "Computer Science & Data Science (CSD) Student",
    heroHeadingPrefix: "Hi, I'm",
    heroHeadingName: "Thatikonda Sai Shiva Kumar",
    heroSubtitle: "Computer Science & Data Science Student",
    heroDescription:
      "I build practical software projects, explore emerging technologies, and strengthen my problem-solving skills through coding and hackathons.",
    aboutHeading: "Building skills through code & challenges.",
    aboutIntro:
      "I am a Computer Science & Data Science (CSD) student with an engineering mindset focused on practical execution. Rather than just memorizing concepts, I enjoy understanding how systems work under the hood—from raw memory management in C to modern data pipelines and embedded microcontroller interfaces.",
    aboutCards: [
      {
        title: "Software & Problem Solving",
        description:
          "Strong foundation in algorithmic thinking, data structures, and procedural & object-oriented programming to build dependable, well-structured software.",
        icon: "Code2"
      },
      {
        title: "Data-Driven Applications",
        description:
          "Focused on database architecture, schema normalization, analytical queries, and utilizing data-driven methods to solve real-world challenges.",
        icon: "Database"
      },
      {
        title: "Hackathons & Rapid Execution",
        description:
          "Active participant in technical sprints like Smart India Hackathon, Zignasa, and Ignia—thriving in collaborative environments under tight timelines.",
        icon: "Trophy"
      }
    ],
    contactHeading: "Let's Build Something Together.",
    contactDescription:
      "I'm open to internships, collaborations, technical projects and learning opportunities.",
    contactInfo: {
      emailPlaceholder: "your-email@example.com",
      githubPlaceholder: "https://github.com/your-username",
      linkedinPlaceholder: "https://linkedin.com/in/your-profile",
      locationPlaceholder: "[Location]"
    }
  },

  skills: [
    {
      name: "Programming",
      description: "Core languages used for systems, scripting, and object-oriented design",
      skills: [
        {
          name: "C",
          description: "Low-level system logic, pointer arithmetic, memory structures, and hardware-near programming.",
          tags: ["Memory Management", "Pointers", "Core Systems"],
          iconName: "Terminal"
        },
        {
          name: "Python",
          description: "Scripting, algorithmic prototyping, data analysis, automation, and mathematical logic.",
          tags: ["Scripting", "Data Analysis", "Automation"],
          iconName: "FileCode2"
        },
        {
          name: "Java",
          description: "Object-oriented principles, modular architecture, robust exception handling, and backend logic.",
          tags: ["OOP", "Robust Design", "Class Hierarchies"],
          iconName: "Coffee"
        }
      ]
    },
    {
      name: "Computer Science",
      description: "Theoretical and algorithmic foundations that power scalable applications",
      skills: [
        {
          name: "Data Structures & Algorithms (DSA)",
          description: "Time & space complexity analysis, arrays, linked lists, trees, graphs, sorting, and dynamic programming.",
          tags: ["Complexity Analysis", "Trees & Graphs", "Optimization"],
          iconName: "Binary"
        },
        {
          name: "DBMS",
          description: "Relational databases, SQL queries, normalization, ACID transactions, ER modeling, and data integrity.",
          tags: ["Relational Schemas", "SQL Queries", "Normalization"],
          iconName: "Database"
        }
      ]
    },
    {
      name: "Embedded Systems",
      description: "Hardware-software integration and microcontroller prototyping",
      skills: [
        {
          name: "Arduino",
          description: "Microcontroller programming, sensor data acquisition, actuator control, UART/I2C communication, and IoT prototypes.",
          tags: ["Microcontrollers", "Sensors", "Hardware Integration"],
          iconName: "Cpu"
        }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Algorithm & Data Structures Visualizer",
      subtitle: "Interactive Algorithmic Execution System",
      description:
        "A modular visualization engine engineered to demystify complex algorithms, graph pathfinding, and sorting passes with real-time step execution and complexity telemetry.",
      technologies: ["C", "Python", "DSA", "Algorithms"],
      category: "core",
      image: "/src/assets/images/project_dsa_system_1791462429996.jpg",
      githubUrl: "https://github.com/example/dsa-visualizer",
      liveDemoUrl: "https://example.com/demo/dsa-visualizer",
      highlights: [
        "Real-time visual state rendering of tree and graph traversals",
        "Step-by-step memory footprint & comparison counters",
        "Configurable datasets with custom worst-case scenarios"
      ]
    },
    {
      id: "project-02",
      number: "02",
      title: "Relational DBMS Analytics & Query Engine",
      subtitle: "Database Modeling & Query Processing Tool",
      description:
        "A database management utility designed for relational schema visual modeling, automated normal form verification (1NF to 3NF), and SQL query execution benchmarking.",
      technologies: ["DBMS", "SQL", "Java", "Python"],
      category: "data",
      image: "/src/assets/images/project_dbms_analytics_1791462441074.jpg",
      githubUrl: "https://github.com/example/dbms-analytics",
      liveDemoUrl: "https://example.com/demo/dbms-analytics",
      highlights: [
        "Interactive ER diagram to SQL schema generator",
        "Automated normalization dependency checker",
        "Visual query execution timeline & index metrics"
      ]
    },
    {
      id: "project-03",
      number: "03",
      title: "Embedded Arduino Telemetry & IoT Monitor",
      subtitle: "Microcontroller Sensing & Telemetry Bridge",
      description:
        "A hardware-software embedded system combining Arduino sensor interfacing with real-time serial telemetry, alert triggers, and an analytics interface.",
      technologies: ["Arduino", "C", "Hardware Integration", "Sensors"],
      category: "embedded",
      image: "/src/assets/images/project_arduino_iot_1791462451303.jpg",
      githubUrl: "https://github.com/example/arduino-iot-system",
      liveDemoUrl: "https://example.com/demo/arduino-iot-system",
      highlights: [
        "Multi-channel analog/digital sensor polling via C",
        "Interrupt-driven safety thresholds & buzzer alarms",
        "Serial communication telemetry stream to desktop listener"
      ]
    }
  ] as ProjectItem[],

  education: [
    {
      degree: "B.Tech in Computer Science & Data Science (CSD)",
      institution: "[College Name]",
      location: "[Location]",
      period: "[Expected Graduation Year]",
      status: "Currently Pursuing",
      description:
        "Comprehensive undergraduate program combining core Computer Science engineering foundations with advanced Data Science, statistical modeling, and database engineering.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Object Oriented Programming (Java/C++)",
        "Computer Organization & Architecture",
        "Data Science Principles & Python",
        "Discrete Mathematics & Probability"
      ]
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Certificate Name [Placeholder]",
      organization: "[Issuing Organization - e.g. Coursera / NPTEL / Oracle]",
      year: "[Year / Issue Date]",
      link: "#",
      description:
        "Foundational coursework in computer science concepts, algorithm design, and systematic programming.",
      badgeLabel: "Verify Credential"
    },
    {
      title: "Data Structures & Algorithms [Placeholder]",
      organization: "[Issuing Platform - e.g. HackerRank / LeetCode / NPTEL]",
      year: "[Year / Issue Date]",
      link: "#",
      description:
        "Verified problem-solving proficiency covering recursion, trees, graphs, sorting algorithms, and complexity.",
      badgeLabel: "Verify Credential"
    },
    {
      title: "Database Management Systems [Placeholder]",
      organization: "[Issuing Platform - e.g. NPTEL / IBM / Coursera]",
      year: "[Year / Issue Date]",
      link: "#",
      description:
        "Relational algebra, structured query language (SQL), database normal forms, and transaction processing.",
      badgeLabel: "Verify Credential"
    }
  ] as CertificationItem[],

  hackathonsStatement:
    "Participating in hackathons and technical events has helped me improve my teamwork, problem-solving and project-building skills.",

  hackathons: [
    {
      name: "Smart India Hackathon (SIH)",
      type: "National Level Hackathon",
      focus: "Nation-scale innovation & practical engineering solutions",
      learnings:
        "Rapid requirement parsing, high-pressure prototyping, and collaborating across multidisciplinary teams.",
      tag: "National Hackathon"
    },
    {
      name: "Zignasa",
      type: "Technical Symposium & Coding Arena",
      focus: "Algorithmic problem-solving & competitive programming",
      learnings:
        "Edge-case evaluation, optimizing time-space complexities, and rapid debugging under time limits.",
      tag: "Technical Challenge"
    },
    {
      name: "Ignia",
      type: "Technical Innovation Festival",
      focus: "Project building, design sprints & technical hackathon",
      learnings:
        "End-to-end concept execution, translating ideas into working software, and presenting to technical evaluators.",
      tag: "Innovation Sprint"
    },
    {
      name: "SAE (Society of Automotive Engineers)",
      type: "Technical Event & Engineering Challenge",
      focus: "Embedded hardware systems, sensor telemetry & engineering design",
      learnings:
        "Hands-on hardware troubleshooting, microcontroller logic, and real-time telemetry interfacing.",
      tag: "Engineering Event"
    },
    {
      name: "Other Technical Events",
      type: "Workshops, Code Sprints & College Symposiums",
      focus: "Continuous skill development and exploratory tech sprints",
      learnings:
        "Staying adaptable, adopting new tools rapidly, and learning from fellow student developers.",
      tag: "Continuous Learning"
    }
  ] as HackathonItem[]
};
