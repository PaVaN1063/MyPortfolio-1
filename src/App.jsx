import { useState } from 'react'
import { Moon, Sun, Menu, Phone, Mail, Linkedin, Download, Briefcase, Code, Wrench, Zap, TrendingUp, Award, Globe, GitBranch, Cpu, Layers, FileCode2, Database, Cloud, Terminal, } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }
  /* ---------- FlipCard Component ---------- */
  function FlipCard({ title, color, icon, frontSkills, backIcons, fullWidth = false, height }) {
    return (
      <div
        className={`relative group perspective ${fullWidth ? "md:col-span-2 lg:col-span-3" : ""
          }`}
      >
        <div className={`relative w-full ${height} transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180`}>

          {/* FRONT SIDE (Default Text) */}
          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg backface-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg`}>
                {icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {frontSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* BACK SIDE (Icons on Hover) */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 rotate-y-180 backface-hidden flex flex-wrap justify-center items-center gap-6">
            {backIcons.map((icon, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center w-20 text-gray-700 dark:text-gray-300"
              >
                <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full text-xl">
                  {icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/Jeeva_Kiran_Adavani_Resume.pdf"; // Path to file inside assets
    link.download = "Jeeva_Kiran_Adavani_Resume.pdf"; // The name it should download as
    link.click();
  };
  const handlePreviewResume = () => {
    // Get current domain + base path
    const baseUrl = window.location.origin; // e.g., http://localhost:5173 or https://myportfolio.com
    const resumeUrl = `${baseUrl}/assets/Jeeva_Kiran_Adavani_Resume.pdf`;

    window.open(resumeUrl, "_blank");
  };

const calculateExperience = (startDate) => {
  const start = new Date(startDate); // e.g., "2018-12-20"
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years${months > 0 ? ` and ${months} months` : ''}`;
};


  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>

                {/* <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button> */}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Jeeva Kiran Adavani
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                Senior Angular Developer | Agile Methodologies | Front-End Expertise
              </p>

              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <a
                  href="tel:+918520946888"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 8520946888</span>
                </a>
                <a
                  href="mailto:venkatajeevakiran@gmail.com"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>venkatajeevakiran@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jeeva-kiran-367bb7179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Button onClick={handleDownloadResume} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
                {/* <Button
                  onClick={handlePreviewResume}
                  variant="outline"
                  className="border-2 border-gray-300 dark:border-gray-600 px-8 py-6 text-lg rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
                >
                  Preview Resume
                </Button> */}
              </div>
            </div>
          </div>
        </section>


        {/* Professional Summary */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Professional Summary
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Creative and result-oriented Senior Angular Developer with over{' '}
                <strong>{calculateExperience("2018-12-20")}</strong> of experience in designing and implementing modern, responsive, and scalable web applications. Specialized in Angular, JavaScript, and RESTful APIs with expertise in Agile methodologies, NgRx, and real-time communication using WebSockets. Proven ability to deliver high-quality UI solutions that enhance user engagement and improve system performance.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Technical Skills
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Technologies */}
              <FlipCard
                title="Frontend Technologies"
                color="blue"
                height="h-[28rem]" // increased height
                icon={<Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                frontSkills={[
                  "Angular (6–16)",
                  "JavaScript",
                  "TypeScript",
                  "HTML5",
                  "CSS3",
                  "SCSS",
                  "PrimeNG",
                  "ANT Design",
                  "Tailwind CSS",
                ]}
                backIcons={[
                  <FileCode2 />,
                  <Terminal />,
                  <Layers />,
                  <Globe />,
                  <Database />,
                  <Cpu />,
                  <GitBranch />,
                  <Wrench />,
                  <Zap />,
                ]}
              />

              {/* Frameworks & Tools */}
              <FlipCard
                title="Frameworks & Tools"
                color="purple"
                height="h-[28rem]" // increased height
                icon={<Wrench className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                frontSkills={[
                  "Angular CLI",
                  "NgRx",
                  "RxJS",
                  "Redux",
                  "Node.js (basic)",
                  "React.js (basic)",
                  "React Native (basic)",
                ]}
                backIcons={[<Code />, <Layers />, <Zap />, <GitBranch />, <Terminal />, <Globe />, <Cpu />]}
              />

              {/* Development Practices */}
              <FlipCard
                title="Development Practices"
                color="green"
                height="h-[28rem]" // increased height
                icon={<Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />}
                frontSkills={[
                  "Agile/Scrum",
                  "RESTful APIs Integration",
                  "Git",
                  "Azure DevOps",
                  "Docker",
                  "JIRA",
                  "Unit Testing",
                ]}
                backIcons={[<Zap />, <Globe />, <GitBranch />, <Cloud />, <Database />, <Briefcase />, <Code />]}
              />

              {/* Other Skills (Shorter Card) */}
              <FlipCard
                title="Other Skills"
                color="orange"
                height="h-[18rem]" // slightly shorter
                icon={<Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />}
                frontSkills={[
                  "WebSocket Integration",
                  "SSO (Azure AD)",
                  "Responsive Web Design",
                  "Multilingual UI Support",
                ]}
                backIcons={[<Globe />, <Database />, <Cpu />, <Layers />]}
                fullWidth
              />
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

              <div className="space-y-12">
                {/* Lead Front-End Developer */}
                <div className="relative pl-0 md:pl-12">
                  <div className="absolute left-0 top-6 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Lead Front-End Developer</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Miracle Software Systems</span> • Visakhapatnam
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-medium">Oct 2024 – Present</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Developed and led UI development for a Contactless Inbound Outbound logistics platform.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Implemented real-time communication using WebSockets for chat between drivers, admins, and supervisors.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Integrated QR code scanning for check-ins, appointment validation, and dock assignments.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Delivered multilingual UI support and responsive designs optimized for performance.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Front-End Developer (Aug 2023 – Sep 2024) */}
                <div className="relative pl-0 md:pl-12">
                  <div className="absolute left-0 top-6 w-8 h-8 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Front-End Developer</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Miracle Software Systems</span> • Visakhapatnam
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-medium">Aug 2023 – Sep 2024</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Developed UI for a Refugee Assistance Application providing digital agent access globally.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Used ANT Design for responsive UI layouts and NgRx for state management.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Ensured consistency with UX wireframes and optimized UI rendering performance.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Front-End Developer (Feb 2021 – Jul 2023) */}
                <div className="relative pl-0 md:pl-12">
                  <div className="absolute left-0 top-6 w-8 h-8 bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Front-End Developer</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Miracle Software Systems</span> • Visakhapatnam
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-medium">Feb 2021 – Jul 2023</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Worked on Global UI Rebuild for a Logistics client with modules like Dispatch Portal and Agent Dashboard.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Integrated SSO using Azure AD and implemented Agile Scrum methodologies.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Created reusable Angular components, services, and directives using Angular CLI.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Junior Front-End Developer */}
                <div className="relative pl-0 md:pl-12">
                  <div className="absolute left-0 top-6 w-8 h-8 bg-blue-300 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Junior Front-End Developer</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Miracle Software Systems</span> • Visakhapatnam
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-medium">Dec 2018 – Feb 2021</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Migrated legacy UIs to Angular for a Logistics Management platform.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Developed responsive web designs and improved front-end efficiency.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>Collaborated with clients for UX improvements and feature optimizations.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Key Achievements
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Achievement 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h4 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-4">50%</h4>
                <p className="text-center text-gray-600 dark:text-gray-400">Improved application load times</p>
              </div>

              {/* Achievement 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-t-4 border-green-600 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Zap className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h4 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-4">40%</h4>
                <p className="text-center text-gray-600 dark:text-gray-400">Increased user engagement</p>
              </div>

              {/* Achievement 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-t-4 border-purple-600 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <Award className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">Excellence</h4>
                <p className="text-center text-gray-600 dark:text-gray-400">Recognition in Front-End Development at Miracle Software Systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Education
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {/* B.Tech */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">B.Tech</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Gayatri Vidya Parishad</p>
                <p className="text-gray-500 dark:text-gray-500">Visakhapatnam</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-4">2012 – 2016</p>
              </div>

              {/* Intermediate */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Intermediate</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Sri Chaitanya College</p>
                <p className="text-gray-500 dark:text-gray-500">Visakhapatnam</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-4">2010 – 2012</p>
              </div>

              {/* SSC */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">SSC</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Visakha Tutorial High School</p>
                <p className="text-gray-500 dark:text-gray-500">Visakhapatnam</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-4">1998 – 2010</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold">Let's Connect</h3>

              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:venkatajeevakiran@gmail.com" className="hover:text-blue-400 transition-colors">
                  venkatajeevakiran@gmail.com
                </a>
                <span className="text-gray-500">•</span>
                <a href="tel:+918520946888" className="hover:text-blue-400 transition-colors">
                  +91 8520946888
                </a>
                <span className="text-gray-500">•</span>
                <span>Visakhapatnam, Andhra Pradesh</span>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/jeeva-kiran-367bb7179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-400">© 2025 Jeeva Kiran Adavani. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

