import { Card, CardContent } from "@/components/ui/card"

export function Biography() {
  return (
    <section id="biography" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">The Story Behind the Sound</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Born from the fusion of crushing metal riffs and atmospheric synthesizers, Hevorah emerged as a force
                  that defies conventional boundaries. Drawing inspiration from the progressive complexity of Periphery
                  and Architects, while channeling the symphonic darkness of Epica and Within Temptation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our sound represents the evolution of modern metal - where technical precision meets emotional depth,
                  where heavy breakdowns coexist with ethereal melodies, creating an experience that's both brutal and
                  beautiful.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-secondary border-border hover:bg-secondary/80 transition-colors duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2 text-accent">Musical Influences</h4>
                <p className="text-secondary-foreground">
                  Periphery • Architects • Epica • Evanescence • Within Temptation • Sieges Even
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-border hover:bg-secondary/80 transition-colors duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2 text-accent">Sound Signature</h4>
                <p className="text-secondary-foreground">
                  Heavy riffs • Atmospheric synths • Progressive structures • Dynamic vocals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-border hover:bg-secondary/80 transition-colors duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2 text-accent">Vision</h4>
                <p className="text-secondary-foreground">
                  Pushing the boundaries of modern metal while staying true to our progressive roots
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
