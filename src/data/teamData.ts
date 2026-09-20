import arbazImage from "@/assets/team/arbaz.png";
import fahadImage from "@/assets/team/fahad.jpeg";
import hunainImage from "@/assets/team/hunain.png";
import talhaImage from "@/assets/team/talha.png";
import sanawarImage from "@/assets/team/sanawar.png";
import mustufaImage from "@/assets/team/MustafaAli.png";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  technologies: string[];
  image?: string;
  imageHasFrame?: boolean;
  imagePosition?: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Arbaz Ali", role: "Founder & Senior Software Developer", bio: "Mr. Arbaz Ali is the Founder and a Senior Software Developer with over 7 years of professional experience in the IT industry. He specializes in designing and developing scalable software solutions, with strong expertise across web technologies, system architecture, and modern development frameworks.", skills: ["Software Architecture", "Scalable Solutions", "Web Development"], technologies: ["Web Technologies", "Modern Frameworks"], image: arbazImage },
  { name: "Fahad Mujtaba", role: "Senior Mobile App Developer | Digital Solutions Consultant", bio: "Fahad Mujtaba is a Software Engineer and Full-Stack Developer with 4+ years of experience in designing and developing scalable software solutions, web applications, APIs, business automation systems, and mobile applications. He specializes in .NET, ASP.NET Core, C#, React.js, React Native, SQL Server, REST APIs, and modern web technologies. He has experience working on POS and retail systems, business management applications, audit and reporting platforms, integrations, dashboards, and custom enterprise solutions. His focus is on building reliable, scalable, and user-friendly applications that automate business processes, improve operational efficiency, and solve real-world business challenges.", skills: ["Mobile App Development", "Full-Stack Development", "Business Automation"], technologies: [".NET", "ASP.NET Core", "C#", "React.js", "React Native", "SQL Server", "REST APIs"], image: fahadImage, imagePosition: "object-top" },
  { name: "Hunain Haider", role: "Full-Stack Developer | Digital Solutions Consultant", bio: "Hunain Haider is a professional full-stack developer who builds modern websites, web applications, and digital solutions for businesses. He specializes in technologies like .NET, MERN Stack, React.js, Node.js, and SQL databases, helping companies improve efficiency through scalable systems, automation tools, dashboards, and AI-based solutions.", skills: ["Full-Stack Development", "Digital Consulting", "Automation"], technologies: [".NET", "MERN Stack", "React.js", "Node.js", "SQL"], image: hunainImage },
  { name: "Talha Khan", role: "Full-Stack Developer & AI Engineer", bio: "Talha is a skilled Software Developer and Founder with expertise in AI-powered applications, modern web technologies, scalable system architecture, and innovative software solutions. He specializes in web development, AI automation, intelligent systems, and creating high-performance digital products for modern businesses.", skills: ["AI Automation", "System Architecture", "Web Development"], technologies: ["AI-Powered Applications", "Modern Web Technologies"], image: talhaImage },
  { name: "Sanawar Hussain Jaffri", role: "MERN Stack Developer", bio: "Sanawar Hussain Jaffri is a dedicated MERN Stack Developer with 1 year of experience in full-stack web development. He specializes in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js, with expertise in frontend and backend development, RESTful APIs, database management, and secure authentication systems.", skills: ["Full-Stack Development", "RESTful APIs", "Secure Authentication"], technologies: ["MongoDB", "Express.js", "React.js", "Node.js"], image: sanawarImage, imageHasFrame: true },
  { name: "Mustufa Ali", role: "Web Application Developer", bio: "Mr. Mustufa Ali is a professional Web Application Developer with expertise in modern website development, responsive UI design, WordPress, and scalable web solutions. He specializes in creating fast, user-friendly, and visually engaging websites using the latest web technologies and development practices.", skills: ["Website Development", "Responsive UI", "Scalable Web Solutions"], technologies: ["WordPress", "Modern Web Technologies"], image: mustufaImage },
];
