"use client"

import {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ThemeToggle} from "@/components/theme-toggle"
import {Menu, X} from "lucide-react"
import sonaLogo from "@/assets/sona-logo.png"

const defaultNavs = [
  {name: "Inicio", href: "#inicio"},
  {name: "Nosotras", href: "#nosotras"},
  {name: "Sona App", href: "#app"},
  {name: "Programas", href: "#programas"},
  {name: "Contacto", href: "#contacto"},
  {name: "Soporte", href: "/support"}, // agregando enlace a página de soporte
]

interface HeaderProps {
  navigation?: { name: string; href: string }[]
}

export function Header({navigation = defaultNavs}: Readonly<HeaderProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={sonaLogo} alt="Sona Logo" width={40} height={40} className="rounded-full"/>
              <span className="text-xl font-bold text-primary">Sona</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle/>
            <Button className="hidden md:inline-flex">Únete a Nosotras</Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full">Únete a Nosotras</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
