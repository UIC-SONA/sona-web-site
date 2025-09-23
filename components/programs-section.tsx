import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, GraduationCap, Phone, Heart } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: Users,
      title: "Talleres de Empoderamiento",
      description: "Espacios seguros donde las mujeres pueden compartir experiencias, aprender sobre sus derechos y desarrollar habilidades de liderazgo.",
      features: ["Autoestima y confianza", "Liderazgo femenino", "Derechos legales", "Redes de apoyo"],
    },
    {
      icon: GraduationCap,
      title: "Educación en Salud Sexual",
      description: "Programas educativos integrales sobre salud reproductiva, planificación familiar y prevención de enfermedades.",
      features: ["Salud reproductiva", "Planificación familiar", "Prevención de ETS", "Autocuidado"],
    },
    {
      icon: Phone,
      title: "Línea de Apoyo 24/7",
      description: "Servicio de atención telefónica disponible las 24 horas para mujeres en situación de violencia o que necesiten orientación.",
      features: ["Atención inmediata", "Orientación legal", "Apoyo psicológico", "Derivación a servicios"],
    },
    {
      icon: Heart,
      title: "Acompañamiento Integral",
      description: "Seguimiento personalizado para mujeres que han vivido situaciones de violencia, brindando apoyo psicológico y legal.",
      features: ["Apoyo psicológico", "Asesoría legal", "Seguimiento personalizado", "Reinserción social"],
    },
  ]

  return (
    <section id="programas" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Nuestros Programas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Desarrollamos programas integrales que abordan las diferentes necesidades de las mujeres en su camino hacia
            el empoderamiento y la autonomía.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">Conoce Más Sobre Nuestros Programas</Button>
        </div>
      </div>
    </section>
  )
}
