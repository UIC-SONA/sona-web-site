import {Header} from "@/components/header"
import {HeroSection} from "@/components/hero-section"
import {AboutSection} from "@/components/about-section"
import {AppSection} from "@/components/app-section"
import {ProgramsSection} from "@/components/programs-section"
import {ContactSection} from "@/components/contact-section"
import {Footer} from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <AppSection/>
        <ProgramsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  )
}
