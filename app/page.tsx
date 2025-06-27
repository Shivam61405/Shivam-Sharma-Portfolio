"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  BookOpen,
  Send,
  Trophy,
  Calendar,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const handleResumeDownload = () => {
  // Sample Google Drive direct download link - replace with your actual resume link
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"

  // Create a temporary anchor element to trigger download
  const link = document.createElement("a")
  link.href = resumeUrl
  link.download = "Shivam_Sharma_Resume.pdf" // This will be the downloaded file name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Optional: Track download event (for analytics)
  console.log("Resume download initiated")
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Shivam Sharma
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                About
              </a>
              <a href="#experience" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Experience
              </a>
              <a href="#skills" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Skills
              </a>
              <a href="#projects" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Projects
              </a>
              <a href="#education" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Education
              </a>
              <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Shivam Sharma
                  </span>
                </h1>
                <h2 className="text-2xl text-blue-700 font-medium">Computer Science Student</h2>
                <p className="text-lg text-blue-600 leading-relaxed">
                  Motivated Computer Science student with solid grounding in OOP, Data Structures, and full-stack
                  development. Skilled in Python, SQL, and JavaScript, with growing interest in data science and
                  analytics. Eager to apply technical and analytical abilities to real-world problems through
                  innovative, data-driven solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={handleResumeDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="https://github.com/shivamsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                >
                  <Github className="h-5 w-5 text-blue-700" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shivam-sharma-65192a332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                >
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </Link>
                <Link
                  href="mailto:shivambhaiya1020@gmail.com"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                >
                  <Mail className="h-5 w-5 text-blue-700" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 rounded-full blur-2xl opacity-30"></div>
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Shivam Sharma Profile"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-blue-600">My journey in web development and competitive programming</p>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-blue-900">Web Development Intern</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-700">IIT Kharagpur</CardDescription>
                  </div>
                  <div className="text-right text-blue-600">
                    <p className="font-medium">May 2023 - June 2023</p>
                    <p className="text-sm">Remote</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Learned Front-end Web developing at industrial level
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Created a prototype using Node.js for the front-end
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-blue-900">Web Development & Design Finalist</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-700">NIT Hackathon</CardDescription>
                  </div>
                  <div className="text-right text-blue-600">
                    <p className="font-medium">December 2023</p>
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                      <Trophy className="w-3 h-3 mr-1" />
                      Finalist
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Developed Anti-doping violation System website
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Created a platform for government to track athletes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Utilized HTML, CSS, JavaScript and ReactJS
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-blue-600">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Python</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">C</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">C++</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Java</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Globe className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Web Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">HTML</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">CSS</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">ReactJS</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">NodeJS</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">ExpressJS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Database className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Frameworks & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200">Bootstrap</Badge>
                  <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200">SQL</Badge>
                  <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200">Git</Badge>
                  <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Leadership</Badge>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Event Management</Badge>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Time Management</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-blue-600">Some of my recent work and personal projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-indigo-100 hover:border-indigo-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Tailone - Street Animals App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white text-indigo-900 hover:bg-indigo-50"
                      onClick={() => window.open("https://tailone-demo.vercel.app", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white text-indigo-900 hover:bg-indigo-50"
                      onClick={() => window.open("https://github.com/shivamsharma/tailone", "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-900">Tailone</CardTitle>
                <CardDescription>Application aimed at improving the lives of street animals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Transforming street animals' lives through technology and collaboration
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-indigo-100 text-indigo-800">React.js</Badge>
                  <Badge className="bg-indigo-100 text-indigo-800">Node.js</Badge>
                  <Badge className="bg-indigo-100 text-indigo-800">Social Impact</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-blue-100 hover:border-blue-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Portfolio Website"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white text-blue-900 hover:bg-blue-50"
                      onClick={() => window.open("https://shivam-portfolio.vercel.app", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white text-blue-900 hover:bg-blue-50"
                      onClick={() => window.open("https://github.com/shivamsharma/portfolio", "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-900">Portfolio Website</CardTitle>
                <CardDescription>A personal portfolio website showcasing projects and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Created using HTML, CSS (Tailwind), and JavaScript (React.js)</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">React.js</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Tailwind CSS</Badge>
                  <Badge className="bg-blue-100 text-blue-800">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-sky-100 hover:border-sky-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Shopping Platform"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white text-sky-900 hover:bg-sky-50"
                      onClick={() => window.open("https://shivam-shop.vercel.app", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white text-sky-900 hover:bg-sky-50"
                      onClick={() => window.open("https://github.com/shivamsharma/shopping-platform", "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-900">Shopping Platform</CardTitle>
                <CardDescription>E-commerce web application for shopping various products</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Full-featured shopping platform built with React.js</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">React.js</Badge>
                  <Badge className="bg-sky-100 text-sky-800">E-commerce</Badge>
                  <Badge className="bg-sky-100 text-sky-800">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-cyan-100 hover:border-cyan-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="National Anti-Doping Agency Platform"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white text-cyan-900 hover:bg-cyan-50"
                      onClick={() => window.open("https://nada-platform.vercel.app", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white text-cyan-900 hover:bg-cyan-50"
                      onClick={() => window.open("https://github.com/shivamsharma/nada-platform", "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-900">National Anti-Doping Agency Platform</CardTitle>
                <CardDescription>NADA platform frontend for athlete data management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-blue-700 mb-4 space-y-1 text-sm">
                  <li>• Designed clean UI for athlete data access</li>
                  <li>• Integrated APIs for testing and report tracking</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-100 text-cyan-800">React.js</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800">API Integration</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800">Government Platform</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() => window.open("https://github.com/shivamsharma", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Education & Certifications</h2>
            <p className="text-lg text-blue-600">My academic journey and professional certifications</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle className="text-blue-900">Bachelor of Technology</CardTitle>
                    <CardDescription className="text-blue-700">Computer Science Engineering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="font-semibold text-blue-900">Dronacharya College of Engineering</p>
                  <p className="text-blue-600 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    August 2022 - May 2026 (Expected)
                  </p>
                  <p className="text-blue-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Haryana, India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-cyan-600" />
                  <div>
                    <CardTitle className="text-blue-900">School Education</CardTitle>
                    <CardDescription className="text-blue-700">Academic Foundation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-900">Class XII - Delhi Public School, Sonipat</p>
                    <p className="text-sm text-blue-600">April 2021 - May 2022</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Class X - Delhi Public School, Sonipat</p>
                    <p className="text-sm text-blue-600">April 2018 - March 2019</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Grid */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Trophy className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900">Smart India Hackathon 2024</p>
                      <p className="text-sm text-blue-600">Finalist - Government Problem Solving</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-l-4 border-l-cyan-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Code className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900">Web Development Course</p>
                      <p className="text-sm text-blue-600">Full-stack development training</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-l-4 border-l-sky-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Database className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900">Python Bootcamp</p>
                      <p className="text-sm text-blue-600">Python fundamentals and scripting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-l-4 border-l-indigo-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900">Build RAG Chatbot with Python</p>
                      <p className="text-sm text-blue-600">AI chatbot development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900">Data Science Orientation</p>
                      <p className="text-sm text-blue-600">Introduction to data science concepts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-l-4 border-l-cyan-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900">People Skills Bootcamp</p>
                      <p className="text-sm text-blue-600">Communication & collaboration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-blue-100">Let's discuss opportunities and collaborations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span>shivambhaiya1020@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-cyan-400" />
                    <span>+91 9050276204</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                    <span>Haryana, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/shivamsharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/shivam-sharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:shivambhaiya1020@gmail.com"
                    className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="bg-blue-800/50 border-blue-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-blue-200">I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-200"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-200"
                  />
                </div>
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-200"
                />
                <Input
                  placeholder="Subject"
                  className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-200"
                />
                <Textarea
                  placeholder="Your message..."
                  rows={4}
                  className="bg-blue-700/50 border-blue-600 text-white placeholder:text-blue-200"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-blue-950 text-blue-200 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Shivam Sharma. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
