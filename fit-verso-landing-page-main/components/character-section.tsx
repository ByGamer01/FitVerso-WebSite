"use client"

import { useState } from "react"
import { Flame, Zap, Shield, Star } from "lucide-react"

const streakLevels = [
  {
    days: 3,
    multiplier: "x1.5",
    kiraState: "Despertando",
    description: "Kira comienza a brillar. Tu dedicacion lo activa.",
    color: "var(--xp-cyan)",
  },
  {
    days: 7,
    multiplier: "x2",
    kiraState: "Energizado",
    description: "Una semana de constancia. Kira duplica tu poder.",
    color: "var(--primary)",
  },
  {
    days: 14,
    multiplier: "x3",
    kiraState: "Poderoso",
    description: "Dos semanas imparables. Tu companero brilla con fuerza.",
    color: "var(--accent)",
  },
  {
    days: 30,
    multiplier: "x5",
    kiraState: "Legendario",
    description: "Un mes de disciplina. Kira alcanza su maximo poder.",
    color: "var(--level-gold)",
  },
]

export function CharacterSection() {
  const [activeLevel, setActiveLevel] = useState(1)
  const currentLevel = streakLevels[activeLevel]

  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conoce a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kira</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Tu companero gravitacional que evoluciona con tu constancia. Mantén tu racha y Kira multiplicara tu XP.
          </p>
        </div>

        {/* Kira Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Kira Visualization */}
          <div className="relative flex justify-center px-4 sm:px-8">
            <div className="relative">
              {/* Kira Orb */}
              <div 
                className="w-56 h-56 sm:w-72 sm:h-72 rounded-full flex items-center justify-center relative"
                style={{ 
                  background: `radial-gradient(circle, ${currentLevel.color}40 0%, ${currentLevel.color}10 50%, transparent 70%)`,
                  boxShadow: `0 0 60px ${currentLevel.color}30, 0 0 120px ${currentLevel.color}15`
                }}
              >
                {/* Inner Orb */}
                <div 
                  className="w-32 h-32 sm:w-44 sm:h-44 rounded-full flex items-center justify-center animate-pulse"
                  style={{ 
                    background: `radial-gradient(circle, ${currentLevel.color} 0%, ${currentLevel.color}80 100%)`,
                    boxShadow: `0 0 40px ${currentLevel.color}60`
                  }}
                >
                  <Flame className="w-16 h-16 sm:w-20 sm:h-20 text-background" />
                </div>

                {/* Orbiting particles */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: currentLevel.color }} />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full" style={{ backgroundColor: currentLevel.color }} />
                </div>
              </div>

              {/* State Badge */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold"
                style={{ backgroundColor: currentLevel.color, color: "var(--background)" }}
              >
                {currentLevel.kiraState}
              </div>

              {/* Multiplier Badge */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xl sm:text-2xl font-bold border-2"
                style={{ borderColor: currentLevel.color, color: currentLevel.color, backgroundColor: 'var(--background)' }}
              >
                {currentLevel.multiplier} XP
              </div>
            </div>
          </div>

          {/* Kira Info */}
          <div className="space-y-6 px-4 sm:px-0">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Racha de {currentLevel.days} dias</h3>
              <p className="text-base sm:text-lg text-muted-foreground">{currentLevel.description}</p>
            </div>

            {/* Streak Levels */}
            <div className="space-y-3">
              {streakLevels.map((level, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLevel(index)}
                  className={`w-full p-3 sm:p-4 rounded-xl border transition-all duration-300 text-left ${
                    index === activeLevel 
                      ? 'border-opacity-100 scale-[1.02]' 
                      : 'border-border hover:border-opacity-50'
                  }`}
                  style={index === activeLevel ? { borderColor: level.color, backgroundColor: `${level.color}10` } : {}}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${level.color}20` }}
                      >
                        {index === 0 && <Zap className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: level.color }} />}
                        {index === 1 && <Flame className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: level.color }} />}
                        {index === 2 && <Shield className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: level.color }} />}
                        {index === 3 && <Star className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: level.color }} />}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm sm:text-base">{level.days} dias consecutivos</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{level.kiraState}</p>
                      </div>
                    </div>
                    <span 
                      className="text-lg sm:text-xl font-bold"
                      style={{ color: level.color }}
                    >
                      {level.multiplier}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
