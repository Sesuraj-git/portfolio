import React from 'react';
import { ScrollSection } from './ScrollSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "BookWater",
    description: "IoT-based water supply system featuring Connected-Cans (Trademarked) for real-time, automated water level monitoring and distribution.",
    technologies: ["React.js", "Node.js", "IoT", "AWS", "MongoDB"],
    category: "IoT System",
    period: "May 2019 - Jul 2022"
  },
  {
    title: "BookWater-SAAS",
    description: "Platform as a Service (PaaS) built to streamline water supply system management for clients, including administrative control, monitoring, and analytics.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "AWS", "Microservices"],
    category: "SaaS Platform",
    period: "2023"
  },
  {
    title: "MistNove",
    description: "Multi-purpose e-commerce platform enabling users to book rooms and order food from a single app, improving user experience and operational efficiency.",
    technologies: ["React.js", "Node.js", "Strapi", "PostgreSQL"],
    category: "E-commerce",
    period: "Jul 2023 - Oct 2023"
  },
  {
    title: "Production Tracking System",
    description: "Web-based Industry 4.0 solution developed to define, monitor, and automate production processes in manufacturing environments, improving traceability and efficiency.",
    technologies: ["React.js", "Node.js", "MySQL", "JDE (ERP)", "ETL"],
    category: "Industry 4.0",
    period: "2022 - 2023"
  },
  {
    title: "Smart CRM",
    description: "All-in-one CRM tool for managing projects, clients, and employees, enhancing productivity and data centralization within organizations.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "TypeScript"],
    category: "CRM System",
    period: "2023"
  },
  {
    title: "IIoT Cloud",
    description: "Cloud-native software for Industrial IoT management, enabling efficient data ingestion, processing, and analytics from edge devices in real time.",
    technologies: ["React.js", "Node.js", "AWS", "IoT", "Microservices"],
    category: "IoT Platform",
    period: "2023"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-energy bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning IoT systems, SaaS platforms, e-commerce solutions, and Industry 4.0 applications.
          </p>
        </ScrollSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollSection key={project.title} delay={index * 0.1}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="secondary" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};