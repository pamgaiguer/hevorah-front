import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

export function TourDates() {
  const shows = [
    {
      date: "2024-03-15",
      venue: "The Metal Forge",
      city: "Los Angeles, CA",
      status: "available",
    },
    {
      date: "2024-03-22",
      venue: "Underground Arena",
      city: "Chicago, IL",
      status: "limited",
    },
    {
      date: "2024-03-29",
      venue: "Steel Factory",
      city: "New York, NY",
      status: "sold-out",
    },
    {
      date: "2024-04-05",
      venue: "Voltage Club",
      city: "Austin, TX",
      status: "available",
    },
    {
      date: "2024-04-12",
      venue: "Electric Ballroom",
      city: "Seattle, WA",
      status: "available",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "text-accent"
      case "limited":
        return "text-yellow-500"
      case "sold-out":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <section id="tour" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Tour Dates</h2>

        <div className="space-y-4">
          {shows.map((show, index) => (
            <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span className="text-lg font-semibold text-foreground">{formatDate(show.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{show.venue}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{show.city}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`font-semibold capitalize ${getStatusColor(show.status)}`}>
                      {show.status === "sold-out"
                        ? "Sold Out"
                        : show.status === "limited"
                          ? "Few Tickets Left"
                          : "Tickets Available"}
                    </span>
                    <Button className="bg-primary hover:bg-primary/90" disabled={show.status === "sold-out"}>
                      {show.status === "sold-out" ? "Sold Out" : "Get Tickets"}
                      {show.status !== "sold-out" && <ExternalLink className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to be notified about new tour dates?</p>
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            Join Our Mailing List
          </Button>
        </div>
      </div>
    </section>
  )
}
