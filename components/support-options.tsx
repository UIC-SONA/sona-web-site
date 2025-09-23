import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {MessageCircle, Phone, Calendar, Heart, Shield, Clock} from "lucide-react"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Chat con Profesionales",
    description: "Consulta gratuita con ginecólogas y especialistas en derechos de la mujer",
    availability: "Lun-Vie 8:00-18:00",
    action: "Iniciar Chat",
    urgent: false,
  },
  {
    icon: Phone,
    title: "Línea de Emergencia",
    description: "Apoyo inmediato para situaciones de violencia de género",
    availability: "24/7 Disponible",
    action: "Llamar Ahora",
    urgent: true,
  },
  {
    icon: Calendar,
    title: "Soporte Calendario Menstrual",
    description: "Ayuda con el seguimiento de tu ciclo y configuración de alertas",
    availability: "Lun-Sab 9:00-17:00",
    action: "Obtener Ayuda",
    urgent: false,
  },
  {
    icon: Heart,
    title: "Bienestar Emocional",
    description: "Apoyo psicológico y recursos para tu salud mental",
    availability: "Lun-Vie 10:00-16:00",
    action: "Contactar",
    urgent: false,
  },
]

export function SupportOptions() {
  
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Opciones de Soporte</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tu necesidad. Nuestro equipo está capacitado para brindarte el apoyo
            que mereces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {supportOptions.map((option, index) => (
            <Card key={index} className={`relative ${option.urgent ? "border-destructive/50 bg-destructive/5" : ""}`}>
              {option.urgent && (
                <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
                  Urgente
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${option.urgent ? "bg-destructive/20" : "bg-primary/20"}`}>
                    <option.icon className={`h-6 w-6 ${option.urgent ? "text-destructive" : "text-primary"}`}/>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Clock className="h-4 w-4"/>
                      {option.availability}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-base">{option.description}</CardDescription>
                <Button className="w-full" variant={option.urgent ? "destructive" : "default"}>
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary"/>
                <h3 className="text-lg font-semibold text-foreground">Confidencialidad Garantizada</h3>
              </div>
              <p className="text-muted-foreground">
                Toda la información que compartas con nosotras es completamente confidencial. Tu privacidad y seguridad
                son nuestra prioridad.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
