"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {CheckCircle, Send} from "lucide-react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Checkbox} from "@/components/ui/checkbox"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"

// Schema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.email("Debe ser un correo electrónico válido"),
  category: z.string().min(1, "Selecciona una categoría"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  urgent: z.boolean(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
})

type FormData = z.infer<typeof formSchema>

export function SupportForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: "",
      urgent: false,
      privacy: false,
    },
  })
  
  const onSubmit = async (data: FormData) => {
    console.log(data)
    const response = await fetch('https://api.sona.ec/app-support', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      // Manejar error de envío
      console.error("Error al enviar el formulario");
      form.setError("root", {message: "Error al enviar el formulario. Por favor, intenta más tarde."});
      throw new Error("Error al enviar el formulario");
    } else {
      // Resetea el formulario después de un envío exitoso
      form.reset();
    }
  }
  
  const categories = [
    {value: "app-technical", label: "Problemas Técnicos de la App"},
    {value: "calendar", label: "Calendario Menstrual"},
    {value: "professional-chat", label: "Chat con Profesionales"},
    {value: "content", label: "Contenido Educativo"},
    {value: "account", label: "Cuenta y Perfil"},
    {value: "emergency", label: "Situación de Emergencia"},
    {value: "other", label: "Otro"},
  ]
  
  if (form.formState.isSubmitSuccessful) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="text-center">
            <CardContent className="pt-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-foreground mb-2">¡Mensaje Enviado!</h3>
              <p className="text-muted-foreground mb-6">
                Hemos recibido tu mensaje. Nuestro equipo te responderá en las próximas 24 horas.
              </p>
              <Button
                onClick={() => form.reset()}
                variant="outline"
              >
                Enviar Otro Mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
            <CardDescription>
              Proporciona la mayor información posible para poder ayudarte mejor.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Categoría de Consulta</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una categoría"/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe tu consulta o problema en detalle..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="urgent"
                  render={({field}) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          Esta es una consulta urgente
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({field}) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          Acepto la política de privacidad y el tratamiento confidencial de mis datos
                        </FormLabel>
                        <FormMessage/>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full gap-2"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                >
                  <Send className="h-5 w-5"/>
                  {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}