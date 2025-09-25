import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

const faqs = [
  {
    question: "¿Cómo puedo descargar la app Sona?",
    answer: "Sona App está disponible actualmente en Google Play Store y próximamente en Apple App Store. Actualmente nos encontramos en proceso de revisión por parte de Apple.",
  },
  {
    question: "¿Es gratuito el chat con profesionales?",
    answer: "Sí, ofrecemos consultas gratuitas con ginecólogas y especialistas en derechos de la mujer. Esto forma parte de nuestra misión de empoderar a las mujeres y garantizar el acceso a información de salud, en colaboración con Conagopare Santo Domingo.",
  },
  {
    question: "¿Qué información guarda el calendario menstrual?",
    answer: "El calendario registra las fechas de tu periodo y utiliza regresión lineal simple para predecir futuros ciclos. Actualmente solo predice periodos regulares, pero estamos desarrollando modelos de machine learning para cubrir la mayor cantidad de casos posibles.",
  },
  {
    question: "¿Qué hago en caso de violencia de género?",
    answer: "Si estás en peligro inmediato, llama al 911. Para orientación y apoyo, puedes contactarte con nuestros profesionales a través del formulario de soporte de la app.",
  },
  {
    question: "¿Cómo puedo cambiar mi información personal?",
    answer: "Puedes actualizar tu información personal desde la configuración de tu perfil en la app. Si necesitas ayuda, nuestro equipo de soporte técnico está disponible para asistirte. También puedes solicitar formalmente que tus datos sean eliminados de nuestros servidores.",
  },
  {
    question: "¿La app funciona sin conexión a internet?",
    answer: "Actualmente la app requiere conexión a internet para garantizar la seguridad de los usuarios y utilizar protocolos y estándares de seguridad basados en la web.",
  },
  {
    question: "¿Cómo puedo reportar contenido inapropiado?",
    answer: "Puedes reportar contenido inapropiado directamente desde la app o a través del formulario de soporte. Todos los reportes son revisados en un plazo máximo de 24 horas.",
  },
  {
    question: "¿Puedo usar la app si soy menor de edad?",
    answer: "Sí, la app está diseñada para mujeres de todas las edades. Para menores de 18 años, recomendamos la supervisión de un adulto responsable. Además, hemos diseñado secciones de contenido didáctico especialmente para niñas.",
  },
]

export function Faq() {
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground">
            Encuentra respuestas rápidas a las consultas más comunes sobre Sona App.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>FAQ - Sona App</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
