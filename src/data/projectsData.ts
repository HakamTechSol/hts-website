import myPlaysOperationsImage from "@/assets/myplays-operations.jpeg";
import khyratnaEcommerceImage from "@/assets/khyratna-ecommerce.jpeg";
import khyratnaScreensImage from "@/assets/khyratna-screens.png";
import khyratnaCartImage from "@/assets/khyratna-cart.jpeg";
import khyratnaAccountImage from "@/assets/khyratna-account.jpeg";
import khyratnaHomeImage from "@/assets/khyratna-home.jpeg";
import khyratnaProductImage from "@/assets/khyratna-product.jpeg";
import khyratnaLoginImage from "@/assets/khyratna-login.jpeg";
import matchProLoginImage from "@/assets/matchpro-login.jpeg";
import matchProDashboardImage from "@/assets/matchpro-dashboard.jpeg";
import matchProCustomersImage from "@/assets/matchpro-customers.jpeg";
import klsNotariesImage from "@/assets/kls-notaries.jpeg";
import klsProfileImage from "@/assets/kls-profile.jpeg";
import klsReceptionImage from "@/assets/kls-reception.jpeg";
import klsAdministrationImage from "@/assets/kls-administration.jpeg";
import klsNotaryDetailsImage from "@/assets/kls-notary-details.jpeg";
import klsNotarySummaryImage from "@/assets/kls-notary-summary.jpeg";
import klsLoginImage from "@/assets/kls-login.jpeg";
import klsDashboardImage from "@/assets/kls-dashboard.jpeg";
import notaryManagementSystemImage from "@/assets/notary-management-system.jpeg";
import klsPropertyPortalImage from "@/assets/kls-property-portal.png";
import parkingAlertAppImage from "@/assets/parking-alert-app.jpeg";
import learningManagementSystemImage from "@/assets/learning-management-system.jpeg";
import hospitalManagementSystemImage from "@/assets/hospital-management-system.jpeg";
import angelopoulosLoyaltyImage from "@/assets/angelopoulos-loyalty.jpeg";
import playersEvaluationLoginImage from "@/assets/players-evaluation-login.jpeg";
import playersEvaluationDashboardImage from "@/assets/players-evaluation-dashboard.jpeg";
import playersEvaluationPlayerCardsImage from "@/assets/players-evaluation-player-cards.jpeg";
import playersEvaluationManagementImage from "@/assets/players-evaluation-management.jpeg";
import playersEvaluationAddPlayerImage from "@/assets/players-evaluation-add-player.jpeg";
import playersEvaluationTeamsImage from "@/assets/players-evaluation-teams.jpeg";
import playersEvaluationTeamRosterImage from "@/assets/players-evaluation-team-roster.jpeg";
import playersEvaluationRadarImage from "@/assets/players-evaluation-radar.jpeg";
import playersEvaluationComparisonImage from "@/assets/players-evaluation-comparison.jpeg";
import playersEvaluationCoverImage from "@/assets/players-evaluation-cover.png";
import klsAgentsImage from "@/assets/kls-agents.jpeg";
import klsRealDashboardImage from "@/assets/kls-real-dashboard.jpeg";
import klsClientsImage from "@/assets/kls-clients.jpeg";
import klsExpensesImage from "@/assets/kls-expenses.jpeg";
import klsRealLoginImage from "@/assets/kls-real-login.jpeg";
import klsPropertiesImage from "@/assets/kls-properties.jpeg";
import klsPropertyProfileImage from "@/assets/kls-property-profile.jpeg";
import klsEmailReportsImage from "@/assets/kls-email-reports.jpeg";
import klsSupportTicketsImage from "@/assets/kls-support-tickets.jpeg";
import klsUsersImage from "@/assets/kls-users.jpeg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web Application" | "Mobile App" | "SaaS & Analytics" | "Healthcare System" | "EdTech";
  client: string;
  duration: string;
  role: string;
  summary: string;
  fullDescription: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string[];
  solutions: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  gradient: string;
  badge: string;
  platforms: ("appStore" | "googlePlay" | "webPortal")[];
  rolesSupported: string[];
  mockupScreens: { title: string; subtitle: string; description: string }[];
  visualImages?: {
    card: string;
    detail?: string;
  };
  galleryImages?: { src: string; alt: string }[];
}

export const projectArchitectures: Record<string, { title: string; description: string }> = {
  "kls-property-portal": { title: "Role-Based Property Operations Architecture", description: "A Laravel and MySQL core separates property, agent, and administration workflows behind role-based permissions, with dashboard views optimized for fast listing and portfolio operations." },
  "parking-alert-app": { title: "Real-Time Driver Coordination Architecture", description: "A FlutterFlow client uses Firebase services for authentication, real-time vehicle alerts, and lightweight coordination between drivers without a central call-center workflow." },
  "players-evaluation-system": { title: "Scouting & Performance Analytics Architecture", description: "A SaaS analytics architecture combines structured player profiles, evaluation records, and comparison views so coaches can turn scouting data into consistent team decisions." },
  "learning-management-system": { title: "Multi-Role Learning Platform Architecture", description: "The learning platform uses role-specific student, teacher, and administrator experiences with progress records, attendance workflows, and RTL-aware content delivery for Quranic education." },
  "hospital-management-system": { title: "Secure Clinical Records Architecture", description: "A PHP and MySQL application organizes patient records, visits, investigations, and surgical history in a secure role-based clinical workflow with report generation." },
  "angelopoulos-loyalty-app": { title: "Connected Loyalty & Rewards Architecture", description: "A Flutter and Firebase mobile architecture keeps customer accounts, rewards, barcode collection, and promotional notifications synchronized in real time with connected business systems." },
  "matchpro-operations-platform": { title: "Centralized Operations Management Architecture", description: "React dashboards and .NET Web APIs provide a centralized operational layer for check-ins, machine readings, shifts, financial records, and role-specific reporting." },
  "khyratna-ecommerce-app": { title: "Mobile Commerce Journey Architecture", description: "A Flutter and Firebase commerce experience connects product discovery, carts, checkout, OTP authentication, delivery choices, and GPS-aware order updates." },
  "notary-management-system": { title: "Paperless Legal Workflow Architecture", description: "A React, Laravel, and MySQL platform centralizes cases, agreements, services, fees, documents, and reports behind configurable roles and permissions." },
};

export const projectsData: Project[] = [
  {
    id: "kls-property-portal",
    title: "KLS",
    subtitle: "Robust Property Management Software Designed for Real Estate Professionals",
    category: "Web Application",
    client: "KLS Real Estate Group",
    duration: "3 Months",
    role: "Full-Stack Development & Architecture",
    summary: "Enables efficient property listing, management, and collaboration through a centralized platform with two core user roles: Administrator and Agent.",
    fullDescription: "KLS is a robust Property Management Software designed specifically for real estate professionals. It enables efficient property listing, management, and collaboration through a centralized platform with two core user roles: Administrator and Agent. It has been developed using the latest web technologies, including LARAVEL, MySQL, & PHP, ensuring high performance, bank-grade security, and seamless property workflow automation.",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API", "Blade Engine"],
    keyFeatures: [
      "Secure Login & Registration",
      "User, Realtor & Admin Management",
      "Property Management & Cataloging",
      "Properties Listing with Property Details Viewing Option",
      "Seperate Client Management within Realtor Dashboard",
      "Support Ticket Management for Rapid Issue Solution",
      "Expense Management to Track and Manage Expenses",
      "Email Notification for New Property Updates",
      "Report Generation and Analytics Dashboard",
      "Property Sharing Option within the Platform",
      "Property Sharing Option to Clients"
    ],
    challenges: [
      "Managing complex real estate listings with multi-agent commission tracking and distinct privilege scopes.",
      "Facilitating seamless property sharing with external prospective buyers while keeping client contact confidential.",
      "Consolidating maintenance support tickets and real-time expense management into unified financial reports."
    ],
    solutions: [
      "Engineered role-based access control (RBAC) separating Super Admin, Broker Manager, and Realtor Agent tiers.",
      "Built a secure link generator allowing Realtors to share tailored property viewports directly to client emails or WhatsApp.",
      "Integrated automated email workflow and dynamic query reporting for real-time portfolio expense analysis."
    ],
    metrics: [
      { label: "Active Listings Managed", value: "10,000+" },
      { label: "Realtor Efficiency Boost", value: "45%" },
      { label: "Report Generation Time", value: "< 2 secs" },
      { label: "Platform Uptime", value: "99.9%" }
    ],
    accentColor: "from-blue-600 to-cyan-500",
    gradient: "bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400",
    badge: "Web Platform",
    platforms: ["webPortal"],
    rolesSupported: ["Super Administrator", "Realtor / Agent", "Property Owner", "Prospective Client"],
    visualImages: {
      card: klsPropertyPortalImage,
    },
    galleryImages: [
      { src: klsRealLoginImage, alt: "KLS Property Portal login screen" },
      { src: klsRealDashboardImage, alt: "KLS Property Portal dashboard" },
      { src: klsAgentsImage, alt: "KLS Property Portal agents management" },
      { src: klsClientsImage, alt: "KLS Property Portal clients management" },
      { src: klsPropertiesImage, alt: "KLS Property Portal properties list" },
      { src: klsPropertyProfileImage, alt: "KLS Property Portal property profile" },
      { src: klsExpensesImage, alt: "KLS Property Portal expenses management" },
      { src: klsEmailReportsImage, alt: "KLS Property Portal email reports" },
      { src: klsSupportTicketsImage, alt: "KLS Property Portal support tickets" },
      { src: klsUsersImage, alt: "KLS Property Portal users management" }
    ],
    mockupScreens: [
      {
        title: "Reports & Analytics Dashboard",
        subtitle: "Active Users & Property Reports",
        description: "Comprehensive admin overview showing active user list, system logs, property distribution stats, and automated export actions."
      },
      {
        title: "Agent & Client Portal",
        subtitle: "Realtor Workspace & Client Profiles",
        description: "Dedicated dashboard for agents to manage property listings, maintain client lead logs, and send custom property sharing links."
      },
      {
        title: "Property Details & Financials",
        subtitle: "Listing Management & Expense Tracking",
        description: "Granular breakdown of property parameters including bedrooms, neighborhood stats, backup generator details, and expense logs."
      }
    ]
  },
  {
    id: "parking-alert-app",
    title: "PARKING ALERT APP",
    subtitle: "Community-Driven Mobile App for Smart Vehicle Parking Coordination",
    category: "Mobile App",
    client: "Urban Mobility Solutions",
    duration: "2.5 Months",
    role: "Mobile UI/UX Design & FlutterFlow Development",
    summary: "A community-driven mobile app that helps car owners coordinate parking with one another instantly using license plate alerts and real-time push notifications.",
    fullDescription: "Getting stuck because someone's car is blocking your way can throw off your entire routine. To solve this everyday frustration, we've built a community-driven app that helps car owners coordinate parking with one another. Developed using modern technologies like Flutterflow and Firebase, the app ensures seamless communication, real-time vehicle alerts, and smarter parking management across iOS and Android.",
    techStack: ["FlutterFlow", "Firebase", "Flutter", "FCM Push Notifications", "Dart", "Cloud Functions"],
    keyFeatures: [
      "Secure User Registration",
      "Secure Login & Biometric Auth",
      "Admin Access & Supervision",
      "Instant Parking Alerts",
      "Real-Time Push Notifications",
      "Multi-language Support",
      "Clean & Intuitive UI/UX Design",
      "Account & Profile Management",
      "Android & iOS Compatibility",
      "Vehicle Registration & Plate Indexing",
      "Easy to coordinate with other car owners",
      "Interactive Dashboard",
      "Easy to notify other car owners"
    ],
    challenges: [
      "Enabling instant alerts between car owners without publicly exposing personal phone numbers or private user data.",
      "Achieving instant latency for push notifications when a car is blocked during urgent departure situations.",
      "Designing a ultra-simple 2-step alert process so drivers in a rush can dispatch alerts in under 5 seconds."
    ],
    solutions: [
      "Implemented a masked license-plate search protocol backed by Firebase Cloud Messaging for anonymous instant alerts.",
      "Integrated push notification queueing with priority priority channel routing for critical parking block warnings.",
      "Created an intuitive mobile UI with single-tap quick preset notifications ('Blocking Driveway', 'Headlights On', 'Need to Move')."
    ],
    metrics: [
      { label: "Notification Latency", value: "< 1.5 sec" },
      { label: "App Store & Play Rating", value: "4.9 / 5" },
      { label: "Registered Vehicles", value: "25,000+" },
      { label: "Successful Alert Resolutions", value: "98.4%" }
    ],
    accentColor: "from-sky-500 to-indigo-600",
    gradient: "bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600",
    badge: "iOS & Android App",
    platforms: ["appStore", "googlePlay"],
    rolesSupported: ["Vehicle Owner", "Community Admin", "Building Manager"],
    visualImages: {
      card: parkingAlertAppImage,
    },
    mockupScreens: [
      {
        title: "Vehicle Registration & Search",
        subtitle: "License Plate Lookup Screen",
        description: "Clean mobile view allowing users to register their vehicle details and quickly look up plate numbers to dispatch parking alerts."
      },
      {
        title: "Instant Alert Dispatcher",
        subtitle: "1-Tap Parking Notification",
        description: "Preset urgency options and custom note fields that trigger instantaneous high-priority alerts to vehicle owners."
      },
      {
        title: "User Profile & Activity Log",
        subtitle: "Account Setup & History",
        description: "Personalized dashboard displaying registered vehicles, received alerts, language selection, and communication preferences."
      }
    ]
  },
  {
    id: "players-evaluation-system",
    title: "FOOTBALLER",
    subtitle: "Data-Driven Sports Performance & Player Trait Evaluation Platform",
    category: "SaaS & Analytics",
    client: "Apex Sports Academy & League Management",
    duration: "4 Months",
    role: "Full Platform Engineering & Analytics Dashboard",
    summary: "Smart digital platform designed to evaluate player behavior, monitor team performance, and deliver data-driven insights empowering coaches and sports organizations.",
    fullDescription: "A smart digital platform designed to evaluate player behavior, monitor team performance, and deliver data-driven insights that empower coaches, teams, and sports organizations to make informed decisions, optimize strategies, and improve overall performance. Built with advanced data modeling, including Poisson Probability Frameworks and multi-trait rating modules.",
    techStack: ["React", "TypeScript", "Node.js", "Python Data Engine", "MySQL", "Recharts", "Tailwind CSS"],
    keyFeatures: [
      "Player Statistics Tracking & Metric Logging",
      "Team Performance Analytics Dashboard",
      "Player Comparison Module (Head-to-Head)",
      "Past Player Performance History & Trajectory",
      "Coach Management System",
      "Team Management & Squad Overview",
      "Player Registration & Profile Management",
      "Secure User Login & Multi-role Access",
      "Evaluation & Rating System",
      "Match and Squad Management",
      "Meeting Records & Photo Management",
      "Reports Generation & Result Summary",
      "Interactive Dashboard & Visual Charts (Poisson Probability)",
      "Admin Trait Scores Management"
    ],
    challenges: [
      "Synthesizing disparate qualitative coach ratings with quantitative match metrics (goals, speed, physical traits, discipline).",
      "Visualizing statistical predictive models (Poisson distributions) in an intuitive format accessible to non-technical sports staff.",
      "Maintaining confidential historical evaluation logs for talent scouting and transfer market decision-making."
    ],
    solutions: [
      "Designed a normalized trait scoring engine converting subjective evaluations into 0-100 player index scores.",
      "Developed custom interactive charts using Recharts for squad depth analysis and tactical probability calculations.",
      "Built multi-tenant team management with role permissions for Head Coaches, Assistant Analysts, and League Executives."
    ],
    metrics: [
      { label: "Evaluated Athletes", value: "3,500+" },
      { label: "Tactical Decision Time", value: "60% Faster" },
      { label: "Analytical Data Accuracy", value: "99.4%" },
      { label: "Coaching Staff Adoption", value: "100%" }
    ],
    accentColor: "from-emerald-500 to-teal-700",
    gradient: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600",
    badge: "Sports Tech Platform",
    platforms: ["webPortal"],
    rolesSupported: ["Head Coach", "Scouting Administrator", "Assistant Coach", "Sports Director", "Athlete"],
    visualImages: {
      card: playersEvaluationCoverImage,
      detail: playersEvaluationDashboardImage,
    },
    galleryImages: [
      { src: playersEvaluationLoginImage, alt: "Players Evaluation System login screen" },
      { src: playersEvaluationDashboardImage, alt: "Coach performance dashboard" },
      { src: playersEvaluationPlayerCardsImage, alt: "Player evaluation cards" },
      { src: playersEvaluationManagementImage, alt: "Players management table" },
      { src: playersEvaluationAddPlayerImage, alt: "Add player workflow" },
      { src: playersEvaluationTeamsImage, alt: "Teams management table" },
      { src: playersEvaluationTeamRosterImage, alt: "Team player roster" },
      { src: playersEvaluationRadarImage, alt: "Player competency radar chart" },
      { src: playersEvaluationComparisonImage, alt: "Player versus team comparison" },
    ],
    mockupScreens: [
      {
        title: "Squad Analytics & Comparison",
        subtitle: "Player Statistics & Radar Metrics",
        description: "Comparative visual metrics matrix displaying player physical, technical, and mental evaluation scores side-by-side."
      },
      {
        title: "Poisson Probability Framework",
        subtitle: "Tactical Expected Goals & Outcome Modeling",
        description: "Interactive predictive probability dashboard calculating match outcome distributions and squad efficiency."
      },
      {
        title: "Match & Squad Roster Workspace",
        subtitle: "Meeting Logs & Photo Records",
        description: "Central manager hub for tactical meeting records, squad selection, injury logs, and talent evaluation reports."
      }
    ]
  },
  {
    id: "learning-management-system",
    title: "LEARNING MANAGEMENT SYSTEM",
    subtitle: "Study Al-Quran Learning Portal App for Students & Teachers",
    category: "EdTech",
    client: "Al-Quran Global Educational Trust",
    duration: "3 Months",
    role: "Cross-Platform Mobile App & Admin Portal",
    summary: "Intuitive Learning Portal App to support students and teachers in accessing Quran education resources, managing profiles, and enhancing the learning experience.",
    fullDescription: "Developed an intuitive Learning Portal App to support students and teachers in accessing Quran education resources, managing profiles, tracking daily attendance, and enhancing the learning experience. Built for seamless cross-platform performance on Android and iOS with multi-language support (Arabic, English, Urdu) and multi-admin access control.",
    techStack: ["FlutterFlow", "Firebase", "React Native", "Node.js API", "Multi-Language i18n", "Cloud Storage"],
    keyFeatures: [
      "Secure User Registration",
      "Secure Login with Role Detection",
      "Multi Admin Access Control",
      "Seperate Teacher Login Portal",
      "Seperate Admin Portal",
      "Student Profile Management",
      "Multi-language Support (Arabic, English, Urdu)",
      "Clean & Intuitive UI/UX Design",
      "Account & Subscription Management",
      "Android & iOS Compatibility",
      "Secure Role-Based Access Control",
      "Course & Surah Management",
      "Progress Record & Milestone Badges",
      "Assesment Records & Quiz Scores",
      "Daily Attendance Management"
    ],
    challenges: [
      "Handling Right-to-Left (RTL) Arabic typography and audio streaming for Holy Quran recitations alongside English UI.",
      "Providing distinct UI dashboards for young students, adult learners, teachers, and system administrators.",
      "Automating daily attendance tracking and lesson progress records across international timezones."
    ],
    solutions: [
      "Implemented full bi-directional (RTL/LTR) internationalization engine with instant language switching.",
      "Created specialized portal layouts tuned specifically for Teachers (attendance/grading) vs Students (schedule/recitation).",
      "Built offline-first progress synchronization to save student progress even in areas with spotty internet connectivity."
    ],
    metrics: [
      { label: "Active Students & Teachers", value: "15,000+" },
      { label: "Daily Attendance Accuracy", value: "100%" },
      { label: "Course Completion Rate", value: "+38%" },
      { label: "Supported Languages", value: "3 (Ar, En, Ur)" }
    ],
    accentColor: "from-blue-500 to-indigo-600",
    gradient: "bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600",
    badge: "EdTech Mobile App",
    platforms: ["appStore", "googlePlay", "webPortal"],
    rolesSupported: ["Super Administrator", "Teacher / Qari", "Student", "Parent / Guardian"],
    visualImages: {
      card: learningManagementSystemImage,
    },
    mockupScreens: [
      {
        title: "Study Al-Quran Portal Sign-In",
        subtitle: "Multi-Role Teacher & Student Login",
        description: "Minimalist mobile sign-in experience with instant role selector for teachers, students, and administration."
      },
      {
        title: "Student Profile & Progress",
        subtitle: "Lesson Milestones & Badges",
        description: "Student portal showcasing current Surah recitation progress, teacher notes, monthly attendance stats, and assessment scores."
      },
      {
        title: "Teacher Dashboard & Attendance",
        subtitle: "Daily Lesson Management",
        description: "Comprehensive teacher management suite for logging daily attendance, recording audio feedback, and scheduling sessions."
      }
    ]
  },
  {
    id: "hospital-management-system",
    title: "HOSPITAL MANAGEMENT SYSTEM",
    subtitle: "Complete Digital Platform for Patient Visits, Surgical History & Clinical Records",
    category: "Healthcare System",
    client: "Jinnah Eye & General Hospital Network",
    duration: "4 Months",
    role: "Full System Development & Medical Records Architecture",
    summary: "A complete digital platform to manage patients, visits, investigations, clinical records, surgical history, and reports – all in one secure and easy-to-use system.",
    fullDescription: "A complete digital platform to manage patients, visits, investigations, clinical records, surgical history, and reports – all in one secure and easy-to-use system designed to digitalize day-to-day tasks within hospitals. The system is developed using the latest web technologies, including PHP & MySQL, offering high-security clinical record storage, ophthalmology photo slot management, and surgical audit logs.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "TCPDF / Dompdf", "AJAX DataTables"],
    keyFeatures: [
      "Generate Detailed Reports & Discharge Summaries",
      "Multi Admin & Department Access",
      "Store Complete Digital Patient History",
      "Record Surgical Treatment History & Surgeon Notes",
      "Track All Patient Visits & Consultation Types",
      "Investigations & Clinical Records Management",
      "Doctors & Specialist Management",
      "Visit Management & Status Tracking",
      "Patient Analytics & Demographic Reports",
      "Patient Insights & Medical Timeline",
      "Secure Role-Based Access Control",
      "Fast, Secure & Easy to Use Interface",
      "Medical Reports Tracking & Automated PDF Generation"
    ],
    challenges: [
      "Migrating legacy paper patient charts into a digital schema while complying with medical data privacy regulations.",
      "Handling multi-slot clinical photo uploads (e.g. Corneal Topography, Visual Fields, Color Vision) per patient visit.",
      "Ensuring zero latency during peak outpatient clinic hours with hundreds of concurrent doctor consultations."
    ],
    solutions: [
      "Structured a normalized relational database schema in MySQL optimized for sub-millisecond query execution.",
      "Developed a specialized 3-slot clinical picture management gallery for rapid examination photo comparison.",
      "Engineered automated PDF generation for surgical histories, prescriptions, and official medical diagnostic certificates."
    ],
    metrics: [
      { label: "Patient Records Digitized", value: "50,000+" },
      { label: "Consultation Queue Time", value: "-40%" },
      { label: "Paperless Efficiency", value: "95%" },
      { label: "System Reliability", value: "99.99%" }
    ],
    accentColor: "from-cyan-600 to-blue-700",
    gradient: "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700",
    badge: "Enterprise Healthcare",
    platforms: ["webPortal"],
    rolesSupported: ["Hospital Administrator", "Senior Consultant / Doctor", "Surgical Specialist", "Reception / Receptionist", "Lab Technician"],
    visualImages: {
      card: hospitalManagementSystemImage,
    },
    mockupScreens: [
      {
        title: "Outpatient Visits & Filter",
        subtitle: "Patient Consultation Tracking",
        description: "Real-time list of hospital visits with doctor assignments, visit status tags ('Checked-In', 'Expecting'), and quick actions."
      },
      {
        title: "Clinical Records & Photo Slots",
        subtitle: "Corneal Topography & Visual Fields",
        description: "Specialized clinical record sheet with 3-slot image uploads for right eye / left eye examinations and diagnostic notes."
      },
      {
        title: "Surgical History Audit",
        subtitle: "Surgeon Notes & Downloadable Reports",
        description: "Detailed surgical history log listing Surgeon Name, Operation Type, Surgery Date, Location, and one-click PDF download."
      }
    ]
  },
  {
    id: "angelopoulos-loyalty-app",
    title: "ANGELOPOULOS LOYALTY APP",
    subtitle: "Digital Rewards App for Angelopoulos Hair & Beauty Customers",
    category: "Mobile App",
    client: "Angelopoulos Hair & Beauty",
    duration: "Mobile App Delivery",
    role: "Flutter & Firebase Mobile App Development",
    summary: "A modern loyalty rewards app designed to strengthen customer engagement and encourage repeat purchases through a simple, digital points experience.",
    fullDescription: "Developed a modern Loyalty Rewards App for Angelopoulos Hair & Beauty to improve customer engagement and increase repeat purchases through a smart digital rewards system. Built with Flutter and Firebase, the app is well suited to salons, barber shops, restaurants, coffee shops, grocery shops, and similar customer-focused businesses.",
    techStack: ["Flutter", "Firebase", "REST API", "ERP Integration", "Barcode Scanner", "Push Notifications"],
    keyFeatures: [
      "Secure User Registration & Login",
      "Multi-language Support",
      "Remember Me & Auto Login",
      "Android & iOS Compatibility",
      "Gifts & Rewards Section",
      "Dynamic Promotional Banners",
      "Push Notifications & Updates",
      "Transaction & Points History",
      "API & ERP System Integration",
      "Account Management & Profile Editing",
      "Receipt Barcode Scanner for Point Collection",
      "Google Play Store & Apple App Store Deployment"
    ],
    challenges: [
      "Making rewards collection simple for customers at the point of purchase.",
      "Keeping loyalty points and transaction history synchronized with business systems.",
      "Creating a polished, cross-platform customer experience for iOS and Android."
    ],
    solutions: [
      "Built a barcode-based receipt scanning flow for convenient points collection.",
      "Integrated APIs and ERP workflows to keep customer reward data current.",
      "Delivered a Firebase-backed Flutter app with promotional content and timely push notifications."
    ],
    metrics: [
      { label: "Platform", value: "iOS + Android" },
      { label: "Engagement", value: "Rewards" },
      { label: "Sync", value: "Real-Time" },
      { label: "Availability", value: "App Stores" }
    ],
    accentColor: "from-rose-500 to-violet-600",
    gradient: "bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-600",
    badge: "Loyalty Mobile App",
    platforms: ["appStore", "googlePlay"],
    rolesSupported: ["Customer", "Store Manager", "Administrator"],
    visualImages: {
      card: angelopoulosLoyaltyImage,
    },
    mockupScreens: [
      { title: "Rewards Home", subtitle: "Points & Gift Offers", description: "Customer dashboard for viewing available rewards, active points, and promotional offers." },
      { title: "Receipt Scanner", subtitle: "Quick Points Collection", description: "Barcode scanning flow that makes it easy to collect loyalty points after a purchase." },
      { title: "Account & History", subtitle: "Profile & Transactions", description: "Profile management screen with transaction history and loyalty activity." }
    ]
  },
  {
    id: "matchpro-operations-platform",
    title: "MYPLAYS",
    subtitle: "Operations Management Platform for Gaming & Points-Based Businesses",
    category: "SaaS & Analytics",
    client: "MyPlays / MatchPro",
    duration: "Web Platform Delivery",
    role: "Full-Stack Operations Platform Development",
    summary: "Centralized role-based software for managing customers, check-ins, match points, ticket-outs, machines, shifts, expenses, and operational reports.",
    fullDescription: "MyPlays / MatchPro is an operations management software for gaming and points-based businesses. It helps manage customers, check-ins, match points, ticket-outs, machines, shifts, expenses, and reports through a centralized role-based admin platform. Built using React.js, .NET Web APIs, and MySQL.",
    techStack: ["React.js", ".NET Web APIs", "MySQL", "Role-Based Access", "Analytics Dashboard", "REST API"],
    keyFeatures: [
      "Secure Login & Authentication Flow",
      "Customer Check-in & Verification System",
      "Match Points Management & Tracking",
      "Ticket Out Points Recording & History",
      "Machine Management & Machine Readings",
      "Shift Management with Start/End Shift Flow",
      "Bank Deposits & Pull Records Management",
      "Expense & Expense Type Management",
      "User Management with Role-Based Access Control",
      "Admin, Owner & Manager Level Permissions",
      "Dashboard Analytics for Check-ins, Match Points & Ticket-outs"
    ],
    challenges: [
      "Bringing daily gaming-floor operations and financial records into one reliable workflow.",
      "Providing the right level of access to owners, managers, and operational staff.",
      "Giving teams a clear, up-to-date view of points, check-ins, and ticket-outs."
    ],
    solutions: [
      "Created a centralized React and .NET platform covering the full operational workflow.",
      "Implemented role-based access control for Admin, Owner, and Manager responsibilities.",
      "Built dashboard analytics around checked-in customers, match points, and ticket-out points."
    ],
    metrics: [
      { label: "Access", value: "Role-Based" },
      { label: "Operations", value: "Centralized" },
      { label: "Insights", value: "Live Data" },
      { label: "Platform", value: "Web" }
    ],
    accentColor: "from-amber-500 to-orange-600",
    gradient: "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500",
    badge: "Operations Platform",
    platforms: ["webPortal"],
    rolesSupported: ["Owner", "Administrator", "Manager", "Operations Staff"],
    visualImages: {
      card: myPlaysOperationsImage,
    },
    galleryImages: [
      { src: matchProLoginImage, alt: "MyPlays login screen" },
      { src: matchProDashboardImage, alt: "MyPlays dashboard" },
      { src: matchProCustomersImage, alt: "MyPlays customer management screen" }
    ],
    mockupScreens: [
      { title: "Operations Dashboard", subtitle: "Check-ins & Points Overview", description: "At-a-glance analytics for customers, match points, and ticket-out activity." },
      { title: "Machine & Shift Control", subtitle: "Readings & Shift Workflow", description: "Operational workspace for machine records and start/end shift processes." },
      { title: "Financial Records", subtitle: "Expenses & Bank Pulls", description: "Central recordkeeping for expenses, deposits, pull records, and reports." }
    ]
  },
  {
    id: "khyratna-ecommerce-app",
    title: "KHYRATNA",
    subtitle: "Cross-Platform Shopping Experience for Modern Consumers",
    category: "Mobile App",
    client: "Khyratna",
    duration: "Mobile App Delivery",
    role: "Cross-Platform eCommerce App Development",
    summary: "A reliable, intuitive mobile shopping platform offering carefully curated products to meet customers' daily needs with ease and efficiency.",
    fullDescription: "Khyratna is an ecommerce cross-platform Mobile Application designed for modern consumers. The platform delivers a reliable and intuitive shopping experience, offering carefully curated products to meet daily needs with ease and efficiency.",
    techStack: ["Flutter", "Firebase", "Payment Integration", "OTP Authentication", "GPS Tracking", "Push Notifications"],
    keyFeatures: [
      "Extensive Product Listing",
      "User-Friendly Shopping Experience",
      "Flexible Delivery & Pickup Options",
      "Payment Integrations & Checkout System",
      "Secure OTP Generation System",
      "Multi Cart System & Push Notifications",
      "GPS Location Tracking System"
    ],
    challenges: [
      "Keeping product discovery and checkout smooth for mobile shoppers.",
      "Supporting delivery, pickup, payments, and location-aware order journeys.",
      "Protecting customer sign-in and order flows with secure verification."
    ],
    solutions: [
      "Designed an intuitive cross-platform shopping flow with rich product listings and flexible cart options.",
      "Integrated payment and checkout workflows alongside delivery and pickup choices.",
      "Added OTP verification, GPS tracking, and push notifications for a connected order experience."
    ],
    metrics: [
      { label: "Platform", value: "iOS + Android" },
      { label: "Checkout", value: "Secure" },
      { label: "Delivery", value: "GPS Enabled" },
      { label: "Updates", value: "Push Alerts" }
    ],
    accentColor: "from-emerald-500 to-lime-600",
    gradient: "bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500",
    badge: "eCommerce Mobile App",
    platforms: ["appStore", "googlePlay"],
    rolesSupported: ["Customer", "Store Manager", "Delivery Partner", "Administrator"],
    visualImages: {
      card: khyratnaEcommerceImage,
      detail: khyratnaScreensImage,
    },
    galleryImages: [
      { src: khyratnaHomeImage, alt: "Khyratna home and product discovery screen" },
      { src: khyratnaProductImage, alt: "Khyratna product details screen" },
      { src: khyratnaCartImage, alt: "Khyratna shopping cart screen" },
      { src: khyratnaAccountImage, alt: "Khyratna account screen" },
      { src: khyratnaLoginImage, alt: "Khyratna login screen" }
    ],
    mockupScreens: [
      { title: "Product Discovery", subtitle: "Curated Product Listings", description: "Easy-to-browse product catalog designed for quick discovery and shopping." },
      { title: "Cart & Checkout", subtitle: "Payment & Delivery Options", description: "Flexible cart, payment, delivery, and pickup experience for customers." },
      { title: "Order Tracking", subtitle: "GPS & Push Updates", description: "Location-aware order tracking with timely notifications and updates." }
    ]
  },
  {
    id: "notary-management-system",
    title: "NOTARY MANAGEMENT SYSTEM",
    subtitle: "Secure, Centralized Legal Workflow Platform for Notaries and Legal Professionals",
    category: "Web Application",
    client: "Notary System",
    duration: "Web Platform Delivery",
    role: "Full-Stack Development & System Architecture",
    summary: "A centralized Notary Software platform that replaces manual paperwork with secure record management, case workflows, reporting, and role-based access.",
    fullDescription: "Notary Management System is a complete digital solution for notaries, lawyers, and legal professionals. It manages legal documents, clients, agreements, financial records, cases, and reports through a secure, centralized workflow. Developed using React, Laravel, and MySQL.",
    techStack: ["React", "Laravel", "MySQL", "Role-Based Access", "Reporting", "REST API"],
    keyFeatures: [
      "Transfer, Agency, Money, Proof, Guarantee & Agreement Management",
      "Case Registration, Service Management & Fee Calculation",
      "Active and Historical Notary Record Tracking",
      "Detailed Reports with Date, Office & Service Filters",
      "Staff, Roles, Permissions & Secure Access Management",
      "Branding, Contact Details & System Settings Customization",
      "Paperless Legal Workflow with Organized Digital Records"
    ],
    challenges: [
      "Replacing manual legal paperwork with a reliable and organized digital workflow.",
      "Managing sensitive records while giving each staff member appropriate access.",
      "Keeping legal services, fees, documents, and reports connected in one system."
    ],
    solutions: [
      "Built centralized case, agreement, document, and financial management modules.",
      "Implemented role-based access control for administrators, notaries, and staff.",
      "Created flexible reporting and historical record tools for faster legal operations."
    ],
    metrics: [
      { label: "Workflow", value: "Paperless" },
      { label: "Access", value: "Role-Based" },
      { label: "Records", value: "Centralized" },
      { label: "Platform", value: "Web" }
    ],
    accentColor: "from-violet-600 to-indigo-700",
    gradient: "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700",
    badge: "Legal Management Platform",
    platforms: ["webPortal"],
    rolesSupported: ["System Administrator", "Notary", "Legal Assistant", "Office Staff"],
    visualImages: {
      card: notaryManagementSystemImage,
    },
    galleryImages: [
      { src: klsLoginImage, alt: "Notary Management System sign-in screen" },
      { src: klsDashboardImage, alt: "Notary Management System dashboard" },
      { src: klsNotariesImage, alt: "Notary Management System records list" },
      { src: klsReceptionImage, alt: "Notary Management System case registration" },
      { src: klsNotaryDetailsImage, alt: "Notary Management System case details" },
      { src: klsProfileImage, alt: "Notary Management System profile editor" },
      { src: klsAdministrationImage, alt: "Notary Management System administration settings" }
    ],
    mockupScreens: [
      { title: "Notary Dashboard", subtitle: "Legal Workflow Overview", description: "Centralized dashboard for active legal services, records, and administration." },
      { title: "Case Registration", subtitle: "Services & Fee Management", description: "Structured workflow for registering cases, agreements, services, and financial details." },
      { title: "Reports & Records", subtitle: "Historical Legal Data", description: "Searchable digital records with detailed filtering and reporting tools." }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((p) => p.id === id);
};
