import { Flame, TrendingUp, Users, Map, Swords, Trophy } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Kira: Tu Companero",
    description:
      "Kira es tu companero gravitacional que te acompana en cada entrenamiento. Segun tu racha de dias activos, multiplica tu XP hasta x5.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: TrendingUp,
    title: "Sistema de Rachas",
    description:
      "Mantén tu racha de entrenamientos y Kira te recompensará. 7 días = x2 XP, 30 días = x5 XP. No pierdas tu progreso.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Users,
    title: "Batallas de Clanes",
    description: "Únete a un clan y compite contra otros. Las batallas semanales determinan qué clan domina el FitVerso.",
    color: "text-[var(--xp-cyan)]",
    bgColor: "bg-[var(--xp-cyan)]/10",
    borderColor: "border-[var(--xp-cyan)]/30",
  },
  {
    icon: Map,
    title: "Territorios de Clan",
    description: "Conquista territorios completando entrenamientos. Cada territorio da bonificaciones especiales a tu clan.",
    color: "text-[var(--level-gold)]",
    bgColor: "bg-[var(--level-gold)]/10",
    borderColor: "border-[var(--level-gold)]/30",
  },
  {
    icon: Swords,
    title: "Guerras Territoriales",
    description:
      "Defiende tus territorios o ataca los del enemigo. Como Clash of Clans, pero cada ejercicio es un ataque.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
  {
    icon: Trophy,
    title: "Ranking Global",
    description: "Compite en rankings individuales y de clan. Los mejores guerreros obtienen recompensas exclusivas cada temporada.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.25_260/0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Características <span className="text-primary text-glow">Principales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para convertir tu entrenamiento en la mejor experiencia RPG fitness
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-card border ${feature.borderColor} hover:border-opacity-100 transition-all duration-300 hover:scale-[1.02] card-glow`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
