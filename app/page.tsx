import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import Achievements from '@/components/achievements'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Achievements />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Johaan Liju James. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
