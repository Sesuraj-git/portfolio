import React from 'react';
import { ScrollSection } from './ScrollSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Settings } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Developing robust server-side applications and APIs with scalable architecture.",
    skills: ["Node.js", "Fastify", "PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Managing cloud infrastructure and implementing CI/CD pipelines for seamless deployment.",
    skills: ["AWS", "Docker", "Jenkins", "NGINX", "Microservices"]
  },
  {
    icon: Settings,
    title: "Specialized Technologies",
    description: "Working with IoT systems, enterprise solutions, and emerging technologies.",
    skills: ["IoT", "JDE (ERP)", "ETL", "Industry 4.0", "RBAC"]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-energy bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </ScrollSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollSection key={category.title} delay={index * 0.1}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-energy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {category.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
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