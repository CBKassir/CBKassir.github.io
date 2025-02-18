import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const projects = [
  { name: "DSP Filter Design", path: "dsp-filter", description: "A project on designing digital filters for signal processing." },
  { name: "Analog Circuit Analysis", path: "analog-circuit", description: "Analysis and optimization of analog electronic circuits." },
  { name: "Embedded Systems", path: "embedded-systems", description: "Development of microcontroller-based applications." }
];

const Home = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold text-blue-600">Christoph Kassir's Engineering Portfolio</h1>
    <p className="text-lg text-gray-700 mt-4">Showcasing my projects in DSP, analog electronics, and embedded systems.</p>
    <p className="text-md text-gray-500 mt-2 italic">"Engineering is the closest thing to magic that exists in the world."</p>
    
    <div className="flex justify-center space-x-6 mt-6">
      <a href="https://www.linkedin.com/in/christophkassir" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
        <FaLinkedin />
      </a>
      <a href="https://github.com/christophkassir" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-2xl">
        <FaGithub />
      </a>
      <a href="mailto:christoph.kassir@example.com" className="text-red-600 text-2xl">
        <FaEnvelope />
      </a>
    </div>
    
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card key={project.path} className="p-4 border-blue-500 border-2">
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-600">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
            <Link to={`/${project.path}`} className="text-blue-500 mt-2 block">View Project</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ProjectPage = ({ name, description }) => (
  <div className="p-10 text-center">
    <h1 className="text-3xl font-bold text-blue-600">{name}</h1>
    <p className="text-lg text-gray-700 mt-4">{description}</p>
    <div className="flex justify-center space-x-6 mt-6">
      <img src={`/images/${name.replace(/\s+/g, '-').toLowerCase()}-1.jpg`} alt={`${name} Image 1`} className="w-1/3 rounded-lg shadow-md" />
      <img src={`/images/${name.replace(/\s+/g, '-').toLowerCase()}-2.jpg`} alt={`${name} Image 2`} className="w-1/3 rounded-lg shadow-md" />
    </div>
    <Link to="/" className="text-blue-500 mt-6 block">Back to Home</Link>
  </div>
);

const App = () => (
  <Router>
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="p-4 bg-blue-100 shadow-md">
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-blue-600 font-semibold">Home</Link></li>
          {projects.map((project) => (
            <li key={project.path}>
              <Link to={`/${project.path}`} className="text-blue-600">{project.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {projects.map((project) => (
          <Route key={project.path} path={`/${project.path}`} element={<ProjectPage name={project.name} description={project.description} />} />
        ))}
      </Routes>
    </div>
  </Router>
);

export default App;
