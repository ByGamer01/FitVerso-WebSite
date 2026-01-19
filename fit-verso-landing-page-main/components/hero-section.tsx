"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronRight, Sword, Shield, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.25_260/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.65_0.23_280/0.08),transparent_50%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.25_0.03_270/0.3)_1px,transparent_1px),linear-gradient(90deg,oklch(0.25_0.03_270/0.3)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
              Proximamente Disponible
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Entrena.</span>
              <br />
              <span className="text-accent">Evoluciona.</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sube de Nivel.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transforma tu entrenamiento en una aventura épica estilo anime. Gana XP, desbloquea habilidades y
              conviértete en el protagonista de tu propia historia fitness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 animate-pulse-glow"
              >
                Comenzar Aventura
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-foreground hover:bg-accent/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Trailer
              </Button>
            </div>

            {/* Stats Preview */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">RPG</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Sistema</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">Anime</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Estilo</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[var(--xp-cyan)]">Fitness</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Gamificado</p>
              </div>
            </div>
          </div>

          {/* Right Content - Character Card */}
          <div className="relative flex justify-center lg:justify-end px-4 sm:px-0">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Character Card */}
              <div className="bg-card border border-border rounded-2xl p-6 card-glow">
                {/* Character Avatar */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-secondary">
                  <img
                    src="/anime-warrior-character-with-glowing-aura-fitness-.jpg"
                    alt="FitVerso Character"
                    className="w-full h-full object-cover animate-float"
                  />
                  {/* Level Badge */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 border border-primary/50">
                    <span className="text-sm font-bold text-primary">LVL 42</span>
                  </div>
                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--level-gold)]/20 backdrop-blur-sm rounded-full px-3 py-1 border border-[var(--level-gold)]/50">
                    <span className="text-sm font-bold text-[var(--level-gold)]">S-RANK</span>
                  </div>
                </div>

                {/* Character Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">ShadowHunter</h3>
                    <span className="text-sm text-muted-foreground">Gremio: 龍王</span>
                  </div>

                  {/* XP Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experiencia</span>
                      <span className="text-primary">8,450 / 10,000 XP</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full animate-xp-fill"
                        style={{ "--xp-width": "84.5%" } as React.CSSProperties}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-border">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                        <Sword className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                      </div>
                      <span className="text-xs text-muted-foreground">Fuerza</span>
                      <span className="text-sm font-bold text-foreground">87</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[var(--xp-cyan)]/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--xp-cyan)]" />
                      </div>
                      <span className="text-xs text-muted-foreground">Resistencia</span>
                      <span className="text-sm font-bold text-foreground">92</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">Vitalidad</span>
                      <span className="text-sm font-bold text-foreground">78</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
