import { Badge } from "@/components/ui/badge"
import { Clock, Swords, Map, Trophy } from "lucide-react"

const quests = [
  {
    title: "Batalla de Clanes",
    type: "Semanal",
    difficulty: "PvP",
    xp: 500,
    description: "Compite contra otros clanes. Cada entrenamiento suma puntos para tu equipo.",
    reward: "Puntos de Clan x100",
    icon: Swords,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    title: "Conquista Territorial",
    type: "Evento",
    difficulty: "Clan",
    xp: 750,
    description: "Tu clan ataca un territorio enemigo. Completa ejercicios para debilitar sus defensas.",
    reward: "Territorio + Bonificacion",
    icon: Map,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    title: "Defensa del Reino",
    type: "Urgente",
    difficulty: "Dificil",
    xp: 1000,
    description: "Tu territorio esta bajo ataque. Entrena para defender y mantener tus bonificaciones.",
    reward: "Escudo Legendario",
    icon: Trophy,
    color: "text-[var(--level-gold)]",
    bgColor: "bg-[var(--level-gold)]/10",
    borderColor: "border-[var(--level-gold)]/30",
  },
]

export function QuestsSection() {
  return (
    <section id="quests" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.65_0.2_30/0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
            Guerras de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clanes</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Unite a un clan, conquista territorios y compite contra otros guerreros. Tu entrenamiento es tu arma.
          </p>
        </div>

        {/* Quests Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {quests.map((quest, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-card border ${quest.borderColor} hover:border-opacity-100 transition-all duration-300 hover:scale-[1.02] overflow-hidden`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 ${quest.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${quest.bgColor} flex items-center justify-center`}>
                    <quest.icon className={`w-6 h-6 ${quest.color}`} />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {quest.type}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${quest.color}`}>
                      {quest.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{quest.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{quest.description}</p>

                {/* Rewards */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{quest.reward}</span>
                  </div>
                  <div className={`font-bold ${quest.color}`}>+{quest.xp} XP</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clan Wars Preview */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-card border border-border text-center">
          <p className="text-muted-foreground mb-4">
            Como <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">Clash of Clans</span>, pero haciendo ejercicio
          </p>
          <p className="text-sm text-muted-foreground">
            Conquista territorios, defiende tu reino y lleva a tu clan a la gloria
          </p>
        </div>
      </div>
    </section>
  )
}
