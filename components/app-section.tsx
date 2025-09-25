import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Calendar, BookOpen, MessageCircle} from "lucide-react"
import {Icon} from "@iconify/react";
import googlePlayIcon from "@iconify/icons-logos/google-play-icon";
import appleAppStoreIcon from "@iconify/icons-logos/apple-app-store";
import sonaLogo from "@/assets/sona-logo.png"

const features = [
  {
    key: 'menstrual-calendar',
    icon: Calendar,
    title: "Calendario Menstrual",
    description: "Lleva un registro preciso de tu ciclo menstrual con alertas personalizadas sobre días fértiles y ovulación.",
  },
  {
    key: 'educational-content',
    icon: BookOpen,
    title: "Contenido Didáctico",
    description: "Accede a artículos, videos y recursos educativos sobre salud femenina, sexualidad y derechos.",
  },
  {
    key: 'chat-professionals',
    icon: MessageCircle,
    title: "Chat con Profesionales",
    description: "Encuentra asesoría gratuita con profesionales en ginecología y derechos de la mujer.",
  },
]


export function AppSection() {
  return (
    <section id="app" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Sona App: Tu Compañera Digital</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Una herramienta pensada especialmente para ti, con el objetivo de ofrecerte apoyo y recursos enfocados
                en tu salud, bienestar y educación.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.key} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary"/>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              
              <Button size="lg" className="group" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=ec.gob.conagopare.app.sona"
                  target="_blank"
                >
                  <Icon
                    icon={googlePlayIcon}
                    className="mr-2 h-4 w-4"
                  />
                  Descargar en Google Play
                </a>
              </Button>
              
              <Button size="lg" className="md:ml-4 group" asChild>
                <a
                  href="https://apps.apple.com/us/app/sona-la-app-de-las-chicas/id6752864619?l=es"
                  target="_blank"
                >
                  <Icon
                    icon={appleAppStoreIcon}
                    className="mr-2 h-4 w-4"
                  />
                  Descargar en App Store
                </a>
              </Button>
            
            </div>
          
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="text-center space-y-4">
                <Image src={sonaLogo} alt="Sona App" width={200} height={200} className="mx-auto"/>
                <h3 className="text-xl font-semibold">Sona App</h3>
                <p className="text-muted-foreground">Disponible para iOS y Android</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
