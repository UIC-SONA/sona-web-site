import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Mail, Phone, MapPin, Clock} from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      key: 'email',
      icon: Mail,
      title: "Email",
      content: "contacto@sona.ec",
      description: "Escríbenos para más información",
    },
    {
      key: 'phone',
      icon: Phone,
      title: "Línea de Apoyo",
      content: "(02)- 2 2710937",
      description: "Disponible en horarios laborales",
    },
    {
      key: 'location',
      icon: MapPin,
      title: "Ubicación",
      content: "Ecuador - Santo Domingo",
      description: "Nos encontramos en las oficinas de Conagopare Santo Domingo",
    },
    {
      key: 'hours',
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 8:00 - 18:00",
      description: "Línea de apoyo disponible en horarios laborales",
    },
  ]
  
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Estamos aquí para apoyarte. No dudes en contactarnos si necesitas ayuda, información o quieres unirte a
            nuestra causa.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <Card key={info.key} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary"/>
                    </div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre"/>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com"/>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Cuéntanos más sobre tu consulta..." rows={4}/>
              </div>
              <Button className="w-full">Enviar Mensaje</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
