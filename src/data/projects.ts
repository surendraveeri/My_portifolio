import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    accent: 'k1',
    kind: 'Networking · Security',
    title: 'Network Traffic Tracer',
    description:
      'Captures live network traffic with Wireshark and automates parsing in Python using Scapy and PyShark. Geolocates IP addresses via the GeoLite database, flags anomalies such as potential DoS activity, and generates statistical traffic reports. Published as a research paper.',
    stack: ['Python', 'Wireshark', 'Scapy', 'PyShark'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/surendraveeri/Network-Tracer' },
      {
        label: 'Live Demo',
        url: 'https://network-traffic-tracker-6ud45bcsa2pqnten3rzp8p.streamlit.app/',
        isDemo: true,
      },
    ],
  },
  {
    accent: 'k2',
    kind: 'Web App · Flask',
    title: 'Online Blood Bank',
    description:
      'A platform where individuals can donate or request blood, built with Python and Flask. Handles user requests, donor records, and database operations through a clean, responsive interface.',
    stack: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/surendraveeri?tab=repositories' },
      { label: 'Live Demo', url: 'https://blood-bank-website-o1rz.onrender.com', isDemo: true },
    ],
  },
  {
    accent: 'k3',
    kind: 'Full-Stack · Java',
    title: 'Enterprise Expense Management',
    description:
      'A comprehensive expense-management system built during the Zidio internship, covering backend services, database interaction, and full-stack deployment with Java Spring Boot and MySQL.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
    links: [{ label: 'View on GitHub', url: 'https://github.com/surendraveeri?tab=repositories' }],
  },
  // {
  //   accent: 'k4',
  //   kind: 'Data Science',
  //   title: 'Data Science Internship',
  //   description:
  //     'A series of data science tasks completed during the Prodigy InfoTech internship — covering data visualization, cleaning, exploratory analysis, and modelling in Python and Jupyter Notebook.',
  //   stack: ['Python', 'Pandas', 'Jupyter'],
  //   links: [{ label: 'View on GitHub', url: 'https://github.com/surendraveeri?tab=repositories' }],
  // },
  {
    accent: 'k5',
    kind: 'Web Application',
    title: 'Food Recipe Generator',
    description:
      'A web app that suggests recipes based on the ingredients a user has on hand — turning a list of inputs into practical meal ideas.',
    stack: ['HTML', 'CSS', 'PHP'],
    links: [
       { label: 'View on GitHub', url: 'https://github.com/surendraveeri?tab=repositories' },
      {
        label: 'Live Demo',
        url: 'https://food-receipe-generator-1.onrender.com/recipegenius',
        isDemo: true,
      },
    ],
  },
  // {
  //   accent: 'k6',
  //   kind: 'Web Application',
  //   title: 'Little Lemon',
  //   description:
  //     'A restaurant web application project building out menu and table-booking functionality — a hands-on exercise in structuring a real-world app from data to interface.',
  //   stack: ['Python', 'Jupyter'],
  //   links: [{ label: 'View on GitHub', url: 'https://github.com/surendraveeri/Little-Lemon' }],
  // },
];
