"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

export function MediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null)

  const mediaItems = [
    {
      type: "image",
      src: "/hevorah-band-performing-live-on-stage-with-dramati.png",
      alt: "Live Performance",
      title: "Live at The Metal Forge",
    },
    {
      type: "video",
      src: "/music-video-still-frame-dark-atmospheric-metal-ban.png",
      alt: "Music Video",
      title: "Echoes of Tomorrow - Official Video",
    },
    {
      type: "image",
      src: "/band-members-in-studio-recording-session-dark-mood.png",
      alt: "Studio Session",
      title: "Recording Synthesis Album",
    },
    {
      type: "image",
      src: "/concert-crowd-at-metal-show-with-stage-lights.png",
      alt: "Concert Crowd",
      title: "Sold Out Chicago Show",
    },
    {
      type: "video",
      src: "/behind-the-scenes-band-documentary-style-footage.png",
      alt: "Behind the Scenes",
      title: "Making of Synthesis - Documentary",
    },
    {
      type: "image",
      src: "/band-portrait-dark-artistic-metal-band-photography.png",
      alt: "Band Portrait",
      title: "Official Band Photo 2024",
    },
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Media Gallery</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-card/80 transition-all duration-300 group cursor-pointer overflow-hidden"
              onClick={() => setSelectedMedia(item)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === "video" ? (
                      <Button size="icon" className="bg-primary hover:bg-primary/90">
                        <Play className="h-6 w-6" />
                      </Button>
                    ) : (
                      <div className="bg-primary/80 px-4 py-2 rounded-lg">
                        <span className="text-primary-foreground font-semibold">View</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{item.type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                size="icon"
                variant="outline"
                className="absolute -top-12 right-0 z-10 bg-transparent"
                onClick={() => setSelectedMedia(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Card className="bg-card border-border">
                <CardContent className="p-0">
                  <img
                    src={selectedMedia.src || "/placeholder.svg"}
                    alt={selectedMedia.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground">{selectedMedia.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
