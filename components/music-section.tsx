"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react"

export function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)

  const tracks = [
    { title: "Echoes of Tomorrow", duration: "4:32", album: "Synthesis" },
    { title: "Fractured Reality", duration: "5:18", album: "Synthesis" },
    { title: "Digital Horizon", duration: "3:45", album: "Synthesis" },
    { title: "Neon Dreams", duration: "4:56", album: "Synthesis" },
  ]

  const albums = [
    {
      title: "Synthesis",
      year: "2024",
      cover: "/dark-futuristic-album-cover-with-neon-accents-and-.png",
    },
    {
      title: "Fragments",
      year: "2023",
      cover: "/abstract-metal-album-cover-with-geometric-patterns.png",
    },
    {
      title: "Origins",
      year: "2022",
      cover: "/minimalist-dark-album-cover-with-band-logo.png",
    },
  ]

  return (
    <section id="music" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Our Music</h2>

        {/* Music Player */}
        <Card className="bg-card border-border mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
                <img
                  src="/album-artwork-for-synthesis-by-hevorah-dark-futuri.png"
                  alt="Current Album"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{tracks[currentTrack].title}</h3>
                <p className="text-muted-foreground mb-4">
                  From "{tracks[currentTrack].album}" • {tracks[currentTrack].duration}
                </p>

                {/* Player Controls */}
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <Button size="icon" variant="outline" onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}>
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}
                  >
                    <SkipForward className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Album Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-card/80 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="icon" className="bg-primary hover:bg-primary/90">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{album.title}</h3>
                <p className="text-muted-foreground">{album.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
