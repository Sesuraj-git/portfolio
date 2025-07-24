import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      <footer className="bg-muted/50 border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-energy bg-clip-text text-transparent mb-4">
            Sesuraj M
          </div>
          <p className="text-muted-foreground">
            © 2024 Sesuraj M. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
