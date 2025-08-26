import { Button } from "@/components/ui/button"
import { Play, Volume2 } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dark-moody-metal-band-performing-on-stage-with-dra.png')`,
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">Hevorah</h1>

        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Heavy riffs. Atmospheric synths. Progressive metal that pushes boundaries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Volume2 className="mr-2 h-5 w-5" />
            Latest Release
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
