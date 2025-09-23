import Image from "next/image"
import sonaLogo from "@/assets/sona-logo.png"

export function HeroSection() {
  return (
    <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                Empoderando a las <span className="text-primary">Mujeres</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Sona significa "mujer" en tsáfiqui. Somos una organización dedicada a reducir la violencia de género y
                proteger los derechos de la mujer a través del empoderamiento y la educación.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={sonaLogo}
                alt="Sona - Símbolo de empoderamiento femenino"
                width={400}
                height={400}
                className="mx-auto"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}
