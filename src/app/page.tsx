import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, Award, MapPin, Calendar, ArrowUpRight, Code, Brain, Cloud, FileText, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.02]" 
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '60px 60px'
           }}>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center py-6">
              <div className="text-xl font-medium tracking-tight">
                William <span className="text-blue-400">Westerkamp</span>
              </div>
              <div className="hidden md:flex space-x-8 text-sm">
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
                <a href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors">Experience</a>
                <a href="#research" className="text-slate-300 hover:text-blue-400 transition-colors">Research</a>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
              </div>
              {/* Mobile menu button */}
              <button className="md:hidden flex items-center justify-center w-10 h-10 text-slate-300 hover:text-blue-400">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="space-y-8">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 font-medium">Available for opportunities</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl font-light leading-none">
                    <span className="block">Software</span>
                    <span className="block text-slate-400">Engineer</span>
                    <span className="block text-2xl md:text-3xl text-blue-400 font-normal mt-4">
                      AI/ML • Cloud • Full-Stack
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                    Computer Science graduate from JMU, incoming at Booz Allen Hamilton. 
                    Building intelligent systems that scale and solve real-world problems.
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/willweste" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://github.com/willweste" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                      <Github className="w-4 h-4" />
                      GitHub
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="mailto:willweste74@gmail.com" 
                       className="flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                      <Mail className="w-4 h-4" />
                      Contact
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-3 mb-3">
                        <Cloud className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium text-blue-400">AWS Certified</span>
                      </div>
                      <p className="text-slate-300 text-sm">Cloud Practitioner</p>
                    </div>
                    
                    <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-3 mb-3">
                        <Brain className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">AI/ML Focus</span>
                      </div>
                      <p className="text-slate-300 text-sm">5+ Projects Delivered</p>
                    </div>
                    
                    <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-3 mb-3">
                        <Code className="w-5 h-5 text-violet-400" />
                        <span className="text-sm font-medium text-violet-400">Full-Stack</span>
                      </div>
                      <p className="text-slate-300 text-sm">React • Python • Cloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <h2 className="text-4xl font-light mb-8">
                    About <span className="text-blue-400">Me</span>
                  </h2>
                  <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mb-8"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
                  <p className="text-xl">
                    I am a Computer Science graduate from James Madison University with a Mathematics minor, 
                    passionate about building intelligent systems that solve real-world problems.
                  </p>
                  <p>
                    Currently joining Booz Allen Hamilton's AI team in Washington, DC, where I'll be 
                    developing innovative solutions for government and enterprise clients. My experience 
                    spans from managing $50k AWS budgets to building AI pipelines that process years 
                    of archived data in minutes.
                  </p>
                  <p>
                    I thrive on the intersection of artificial intelligence, cloud architecture, and 
                    user experience - creating systems that are not just technically sophisticated, 
                    but genuinely useful and scalable.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">Location</h4>
                      <p className="text-slate-300 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        Arlington, Virginia
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">Focus Areas</h4>
                      <p className="text-slate-300">AI/ML & Cloud Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-light mb-6">Technical <span className="text-blue-400">Expertise</span></h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  category: "Languages", 
                  skills: ["Python", "JavaScript", "TypeScript", "PHP", "SQL"],
                  icon: Code,
                  color: "blue"
                },
                { 
                  category: "Cloud & DevOps", 
                  skills: ["AWS", "Azure", "Docker", "CI/CD", "Terraform"],
                  icon: Cloud,
                  color: "emerald"
                },
                { 
                  category: "AI & ML", 
                  skills: ["Machine Learning", "AWS Bedrock", "NLP", "RAG", "Computer Vision"],
                  icon: Brain,
                  color: "violet"
                },
                { 
                  category: "Frameworks", 
                  skills: ["React/Next.js", "Flask", "Node.js", "WordPress", "FastAPI"],
                  icon: Code,
                  color: "orange"
                }
              ].map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                const colorClasses = {
                  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
                  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40",
                  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20 hover:border-violet-500/40",
                  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40"
                };
                
                return (
                  <div key={index} className={`bg-slate-900/30 border rounded-2xl p-8 hover:bg-slate-900/50 transition-all duration-300 ${colorClasses[skillGroup.color as keyof typeof colorClasses].split(' ').slice(2).join(' ')}`}>
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[skillGroup.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-medium mb-4 text-white">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-slate-400 text-sm">{skill}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl font-light mb-8">
                Professional <span className="text-blue-400">Experience</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mb-8"></div>
            </div>
            
            <div className="space-y-20">
              {[
                {
                  title: "Software Engineer",
                  company: "Booz Allen Hamilton",
                  period: "Starting October 2025",
                  location: "Washington, DC",
                  type: "Full-time",
                  description: "Joining the Artificial Intelligence team to develop cutting-edge AI solutions for government and enterprise clients. Focus on machine learning systems, cloud architecture, and scalable applications.",
                  highlights: ["AI/ML Development", "Government Solutions", "Cloud Architecture", "Team Leadership"],
                  accent: "blue",
                  featured: true
                },
                {
                  title: "Cloud Engineer Intern",
                  company: "OneTier",
                  period: "Mar 2025 - Present",
                  location: "Arlington, VA",
                  type: "Internship",
                  description: "Implemented automated Panzura node deployments in Azure as part of Zero Trust platform. Optimized API deployments using Azure API Management, reducing overhead by 12%.",
                  highlights: ["Azure Automation", "Zero Trust Security", "API Optimization", "Dashboard Development"],
                  accent: "emerald"
                },
                {
                  title: "AI/ML Engineer Intern",
                  company: "MWVA Tech",
                  period: "Nov 2024 - Mar 2025",
                  location: "Arlington, VA",
                  type: "Internship",
                  description: "Engineered AWS-based AI newsletter pipeline processing 3 years of archived content. Managed $50k AWS budget and built agentic workflows with Bedrock, boosting engagement by 12%.",
                  highlights: ["AWS Bedrock", "Budget Management", "ML Pipelines", "Content Automation"],
                  accent: "violet"
                },
                {
                  title: "Software Engineer Intern",
                  company: "Booz Allen Hamilton",
                  period: "Jun 2024 - Aug 2024",
                  location: "McLean, VA",
                  type: "Internship",
                  description: "Developed medical AI NLP chatbot using Python, Flask, React.js, and AWS Services. Implemented RAG architecture achieving 15% improved accuracy in medical query responses.",
                  highlights: ["Medical AI", "RAG Systems", "Full-Stack Development", "AWS Integration"],
                  accent: "orange"
                },
                {
                  title: "Software Engineer Intern",
                  company: "Chameleon Technology Partners",
                  period: "May 2023 - Jun 2024",
                  location: "Oakton, VA",
                  type: "Internship",
                  description: "Developed custom Learning Management System (LMS) using PHP, JavaScript, and MySQL. Integrated LMS with WordPress enabling SSO and WooCommerce, managing Apache servers and achieving 20% decrease in relational throughput rates.",
                  highlights: ["LMS Development", "WordPress Integration", "Database Optimization", "Team Collaboration"],
                  accent: "emerald"
                }
              ].map((job, index) => {
                const accentColors = {
                  blue: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50",
                  emerald: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50",
                  violet: "border-violet-500/30 bg-violet-500/5 hover:border-violet-500/50",
                  orange: "border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50"
                };
                
                return (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                      <div className="space-y-3">
                        {job.featured && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 text-xs uppercase tracking-wide rounded-full">
                            <Briefcase className="w-3 h-3" />
                            Incoming Position
                          </div>
                        )}
                        <h3 className="text-2xl font-medium text-white">{job.title}</h3>
                        <p className="text-xl text-blue-400">{job.company}</p>
                        <div className="space-y-1 text-sm text-slate-400">
                          <p className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {job.period}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            {job.location} • {job.type}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <div className={`border rounded-2xl p-8 transition-all duration-300 ${accentColors[job.accent as keyof typeof accentColors]}`}>
                        <p className="text-slate-300 mb-6 leading-relaxed text-lg">{job.description}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {job.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              <span className="text-slate-400 text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Section - Moved after Experience */}
        <section id="research" className="py-32 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-light mb-6">Research & <span className="text-blue-400">Publications</span></h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Academic research in AI safety and intelligent transportation systems, with published work and patent applications.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs uppercase tracking-wide rounded">
                        IEEE Published
                      </div>
                      <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs uppercase tracking-wide rounded">
                        Patent Filed
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-medium text-white mb-4">
                      Horizontal Gaze Nystagmus Transmission Interlock System
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Developed an AI-powered system to prevent impaired driving using Horizontal Gaze Nystagmus (HGN) 
                      detection. The system employs machine learning algorithms and computer vision to detect driver 
                      impairment while protecting user privacy through advanced encryption.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-2">Publication</h4>
                        <p className="text-slate-300">
                          <span className="font-medium">2023 IEEE Systems and Information Engineering Design Symposium (SIEDS)</span>
                        </p>
                        <p className="text-slate-400 text-sm">DOI: 10.1109/SIEDS58326.2023.10137888</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-2">Patent Application</h4>
                        <p className="text-slate-300">
                          <span className="font-medium">Enhancing Road Safety with AI: A Secure, Personalized System for Detecting Impairment through Horizontal Gaze Nystagmus</span>
                        </p>
                        <p className="text-slate-400 text-sm">Patent No. 63/632,716 • Filed April 11, 2024</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-2">Co-Authors</h4>
                        <p className="text-slate-400 text-sm">
                          Chase Coleman, Matthew Jenkins, William Roberts, Charlie Thomas, Rod MacDonald, Ahmad Salman
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Machine Learning", "Computer Vision", "Privacy AI", "OpenCV", "Raspberry Pi", "AES Encryption"].map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-emerald-400 text-sm font-medium">
                        88% accuracy in impairment detection • Privacy-preserving design
                      </div>
                      <div className="text-slate-500 text-xs">
                        Funded by Commonwealth Cyber Initiative (CCI) Research Program
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-48 space-y-4">
                    <a href="https://ieeexplore.ieee.org/document/10137888" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 transition-colors group">
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">View Publication</span>
                    </a>
                    
                    <a href="/Horizontal_Gaze_Nystagmus_Transmission_Interlock_System (1).pdf" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-colors group">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300 text-sm font-medium">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-light mb-6">Featured <span className="text-blue-400">Projects</span></h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A selection of projects showcasing my expertise in AI/ML, cloud computing, and full-stack development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Newsletter Generation Pipeline",
                  description: "Comprehensive AWS-based system that processes 3 years of archived newsletters and real-time web content, reducing manual compilation from 2 days to under 15 minutes.",
                  tech: ["AWS Bedrock", "Kendra", "Python", "Web Scraping", "Automation"],
                  impact: "12% increase in email engagement",
                  metrics: "3 years of data • $50k AWS budget • 15min processing",
                  year: "2024",
                  featured: true
                },
                {
                  title: "Medical AI NLP Chatbot",
                  description: "Healthcare-focused chatbot with advanced RAG implementation using Python, Flask, and React.js, designed for improved medical query accuracy and patient interaction.",
                  tech: ["Python", "Flask", "React.js", "NLP", "RAG", "AWS"],
                  impact: "15% improvement in response accuracy",
                  metrics: "Medical-grade NLP • RAG architecture • Cloud deployment",
                  year: "2024",
                  featured: true
                },
                {
                  title: "Road Safety AI System",
                  description: "Patented Horizontal Gaze Nystagmus detection system for preventing impaired driving using personalized machine learning algorithms and privacy-preserving techniques.",
                  tech: ["Machine Learning", "Computer Vision", "Privacy AI", "Patent"],
                  impact: "IEEE Publication & Patent Filed",
                  metrics: "88% accuracy • Privacy-preserving • Real-time detection",
                  year: "2023",
                  featured: false
                },
                {
                  title: "Zero Trust Cloud Platform",
                  description: "Automated Panzura node deployments with comprehensive Azure API Management integration and real-time monitoring dashboards built with Next.js.",
                  tech: ["Azure", "API Management", "Next.js", "Zero Trust", "Automation"],
                  impact: "12% reduction in deployment overhead",
                  metrics: "Enterprise security • Automated deployment • Real-time monitoring",
                  year: "2025",
                  featured: false
                }
              ].map((project, index) => (
                <div key={index} className={`group cursor-pointer ${project.featured ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
                  <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 h-full hover:border-blue-500/30 hover:bg-slate-900/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        {project.featured && (
                          <div className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs uppercase tracking-wide rounded">
                            Featured
                          </div>
                        )}
                        <span className="text-xs text-slate-500">{project.year}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-medium text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-emerald-400 text-sm font-medium">{project.impact}</div>
                        <div className="text-slate-500 text-xs">{project.metrics}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & International Experience */}
        <section className="py-32 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-light mb-6">Education & <span className="text-blue-400">International Experience</span></h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Education */}
              <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium text-blue-400 mb-2">James Madison University</h4>
                    <p className="text-slate-300 mb-1">Bachelor of Science, Computer Science</p>
                    <p className="text-slate-300 mb-2">Minor in Mathematics</p>
                    <p className="text-sm text-slate-400">Aug 2021 - May 2025</p>
                    <p className="text-sm text-slate-500 mt-2">Activities: Competitive Programming</p>
                  </div>
                </div>
              </div>

              {/* Study Abroad */}
              <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300">
                <h3 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  Study Abroad
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-emerald-400 mb-2">MacroActive</h4>
                    <p className="text-slate-300 mb-1">Full-Stack Web Developer Intern</p>
                    <p className="text-sm text-slate-400 mb-3">Auckland, New Zealand • Jun 2022 - Aug 2022</p>
                    
                    <div className="space-y-2 text-sm text-slate-300">
                      <p>• Contributed to 5,000-file codebase for improved user registration system</p>
                      <p>• Increased user engagement by 15% using React, TypeScript, Node.js</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["React", "TypeScript", "Node.js", "MySQL", "Docker", "SCRUM"].map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300">
                <h3 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-violet-400" />
                  </div>
                  Certifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">AWS Certified Cloud Practitioner</h4>
                      <p className="text-slate-400">Amazon Web Services</p>
                      <p className="text-sm text-slate-500">Valid Jul 2024 - Jul 2027</p>
                      <p className="text-xs text-slate-600 mt-1">Credential ID: c6238cf117574cf2a056bb08e27f694c</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-6">
                <h2 className="text-4xl font-light mb-8">
                  Let's <span className="text-blue-400">Connect</span>
                </h2>
                <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mb-8"></div>
                
                <div className="space-y-6 text-lg text-slate-300">
                  <p>
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and emerging technologies in AI and cloud computing.
                  </p>
                  <p>
                    Whether you're looking to collaborate on cutting-edge AI solutions or 
                    discuss the future of technology, I'd love to hear from you.
                  </p>
                </div>
                
                <div className="mt-12 space-y-4">
                  <div className="text-sm text-slate-400">
                    <span className="text-slate-500">Location:</span> Arlington, Virginia
                  </div>
                  <div className="text-sm text-slate-400">
                    <span className="text-slate-500">Status:</span> <span className="text-emerald-400">Open to opportunities</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6">
                <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8">
                  <h3 className="text-xl font-medium mb-6">Get in touch</h3>
                  
                  <div className="space-y-6">
                    <a href="mailto:willweste74@gmail.com" 
                       className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 transition-all duration-300 group">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="text-white font-medium">Send Email</div>
                          <div className="text-slate-400 text-sm">willweste74@gmail.com</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/willweste" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="text-white font-medium">LinkedIn</div>
                          <div className="text-slate-400 text-sm">Professional network</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    
                    <a href="https://github.com/willweste" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
                      <div className="flex items-center gap-3">
                        <Github className="w-5 h-5 text-slate-400" />
                        <div>
                          <div className="text-white font-medium">GitHub</div>
                          <div className="text-slate-400 text-sm">Code repositories</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-slate-400 text-sm">
                © 2025 William Westerkamp. All rights reserved.
              </div>
              <div className="text-slate-500 text-sm">
                Built with Next.js, TypeScript & Tailwind CSS
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}