import React from 'react';
import { ScrollSection } from './ScrollSection';
import { Button } from '@/components/ui/button';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-energy bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a Senior Full-Stack Developer with 3+ years of experience, currently working at Bookwater 
              Tech Pvt Ltd. I specialize in building scalable web applications using React.js, Next.js, and Node.js, 
              with expertise in SaaS platforms, admin dashboards, and embedded systems integrations.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My experience spans cloud-based infrastructure management using AWS (EC2, S3, CodeCommit), 
              implementing CI/CD pipelines with Docker and Jenkins, and leading development teams while 
              ensuring high code quality and performance optimization.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I have a proven track record in IoT-based systems, e-commerce platforms, and Industry 4.0 
              applications, with a strong emphasis on reliability, scalability, and exceptional user experience.
            </p>
            <Button variant="energy" size="lg">
              Get In Touch
            </Button>
          </ScrollSection>
          
          <ScrollSection delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-orb rounded-3xl animate-glow-pulse"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};