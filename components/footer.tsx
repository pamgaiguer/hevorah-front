import { Facebook, Instagram, Twitter, Youtube, SproutIcon as Spotify, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Hevorah</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Progressive metal band pushing the boundaries of heavy music with atmospheric synths and crushing riffs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Spotify className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#biography" className="text-muted-foreground hover:text-accent transition-colors">
                  Biography
                </a>
              </li>
              <li>
                <a href="#music" className="text-muted-foreground hover:text-accent transition-colors">
                  Music
                </a>
              </li>
              <li>
                <a href="#tour" className="text-muted-foreground hover:text-accent transition-colors">
                  Tour Dates
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Management: management@hevorah.com</li>
              <li>Booking: booking@hevorah.com</li>
              <li>Press: press@hevorah.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Hevorah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
