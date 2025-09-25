import {Card, CardContent} from "@/components/ui/card"
import {Heart, Shield, Users, Lightbulb} from "lucide-react"

const values = [
  {
    key: 'empathy',
    icon: Heart,
    title: "Empatía",
    description: "Entendemos y compartimos las experiencias de cada mujer que busca apoyo.",
  },
  {
    key: 'protection',
    icon: Shield,
    title: "Protección",
    description: "Defendemos activamente los derechos y la seguridad de todas las mujeres.",
  },
  {
    key: 'community',
    icon: Users,
    title: "Comunidad",
    description: "Creamos espacios seguros donde las mujeres pueden conectar y crecer juntas.",
  },
  {
    key: 'education',
    icon: Lightbulb,
    title: "Educación",
    description: "Proporcionamos conocimiento y herramientas para el empoderamiento personal.",
  },
]

export function AboutSection() {
  
  return (
    <section id="nosotras" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Nuestra Misión</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Trabajamos incansablemente para crear un mundo donde cada mujer pueda vivir libre de violencia, con plenos
            derechos y oportunidades para desarrollar su máximo potencial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(value => (
            <Card key={value.key} className="text-center group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
