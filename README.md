import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-8">
      <header className="text-center text-4xl font-bold text-blue-600">Christoph's EE Portfolio</header>
      <section className="mt-6 text-center text-gray-700">
        <p>Welcome! This is my portfolio showcasing my Electrical Engineering projects and skills.</p>
      </section>
      
      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Semiconductor_Chip.jpg" alt="Project 1" className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600">Description of an awesome EE project.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Silicon_wafer_with_microchips.jpg" alt="Project 2" className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold">Project 2</h2>
            <p className="text-gray-600">Description of another cool EE project.</p>
          </CardContent>
        </Card>
      </section>
      
      <footer className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Connect with me</h3>
        <div className="mt-4 flex justify-center gap-4">
          <Button variant="outline"><Mail className="mr-2" /> Email</Button>
          <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
          <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
        </div>
      </footer>
    </div>
  );
}
