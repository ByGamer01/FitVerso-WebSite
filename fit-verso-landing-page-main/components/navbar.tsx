"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Fit<span className="text-primary">Verso</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Características
            </a>
            <a href="#quests" className="text-muted-foreground hover:text-foreground transition-colors">
              Misiones
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Comunidad
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Descargar
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 animate-pulse-glow">
              Descargar App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Características
              </a>
              <a href="#quests" className="text-muted-foreground hover:text-foreground transition-colors">
                Misiones
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Comunidad
              </a>
              <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
                Descargar
              </a>
              <a href="../app/policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Políticas
              </a>
              <div className="pt-4 border-t border-border">
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  Descargar App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
