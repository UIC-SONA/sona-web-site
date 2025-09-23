import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import sonaLogo from "@/assets/sona-logo.png"

export function Footer() {
  const links = {
    organization: [
      { name: "Nosotras", href: "#nosotras" },
      { name: "Programas", href: "#programas" },
      { name: "Transparencia", href: "#" },
      { name: "Informes Anuales", href: "#" },
    ],
    support: [
      { name: "Línea de Apoyo", href: "#" },
      { name: "Recursos", href: "#" },
      { name: "Preguntas Frecuentes", href: "#" },
      { name: "Centros de Ayuda", href: "#" },
    ],
    legal: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos de Uso", href: "#" },
      { name: "Código de Ética", href: "#" },
    ],
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={sonaLogo} alt="Sona Logo" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold text-primary">Sona</span>
            </div>
            <p className="text-muted-foreground text-pretty max-w-md">
              Empoderando a las mujeres y construyendo un futuro libre de violencia de género. Sona significa "mujer" en
              tsáfiqui, y representa nuestra misión de proteger y empoderar a todas las mujeres.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Organización</h3>
            <ul className="space-y-2">
              {links.organization.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Apoyo</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Sona. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Hecho con <Heart className="h-4 w-4 text-primary fill-current" /> para empoderar mujeres
          </div>
        </div>
      </div>
    </footer>
  )
}
