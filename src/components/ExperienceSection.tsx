import React from 'react';
import { ScrollSection } from './ScrollSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Bookwater Tech Pvt Ltd",
    period: "Nov 2023 – Present",
    location: "Chennai, India",
    achievements: [
      "Spearheaded major architectural improvements, redefining database structure to boost performance and flexibility",
      "Led code quality reforms, introducing microservices-based structure and improving maintainability",
      "Designed and implemented robust Role-Based Access Control (RBAC) system",
      "Guided integration of embedded systems with web platforms, enabling real-time IoT connectivity",
      "Managed AWS infrastructure (EC2, S3, CodeCommit) and CI/CD pipelines with Docker and Jenkins"
    ],
    stack: ["React.js", "Node.js", "AWS", "Docker", "Jenkins", "PostgreSQL", "IoT"]
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Mistnove",
    period: "Jul 2023 – Oct 2023",
    location: "Remote",
    achievements: [
      "Led a team of 4 developers to build a full-stack web application",
      "Managed end-to-end delivery including requirement gathering, wireframing, development, and deployment",
      "Successfully delivered the project on time and within budget, meeting all client requirements"
    ],
    stack: ["React.js", "Node.js", "Strapi", "PostgreSQL"]
  },
  {
    title: "Associate Software Engineer",
    company: "Bayoftech Pvt Ltd",
    period: "May 2022 – Jun 2023",
    location: "Chennai, India",
    achievements: [
      "Contributed to Production Tracking System aligning with Industry 4.0 standards",
      "Built and maintained ETL processes for integrating data from JDE (ERP) into the application",
      "Resolved critical production issues with precision, earning recognition for performance",
      "Visited client sites to gain hands-on insights and successfully addressed project blockers"
    ],
    stack: ["Node.js", "React.js", "MySQL", "JDE (ERP)", "ETL"]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-energy bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey as a software engineer, building scalable solutions and leading development teams.
          </p>
        </ScrollSection>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ScrollSection key={experience.company} delay={index * 0.1}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-2">{experience.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {experience.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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