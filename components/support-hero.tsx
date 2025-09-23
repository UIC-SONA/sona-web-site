import {Button} from "@/components/ui/button"
import {MessageCircle, Mail} from "lucide-react"

export function SupportHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-sona-purple-light/10">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6"/>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Soporte para Sona App</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos aquí para ayudarte. Encuentra respuestas a tus preguntas o contacta directamente con nuestro equipo
            de soporte especializado en salud femenina.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/*<Button size="lg" className="gap-2">*/}
          {/*  <MessageCircle className="h-5 w-5"/>*/}
          {/*  Chat en Vivo*/}
          {/*</Button>*/}
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <a
              href="mailto:contact@sona.ec?subject=Soporte%20App&body=Escribe%20tu%20mensaje%20aquí"
            >
              <Mail className="h-5 w-5"/>
              Enviar Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
