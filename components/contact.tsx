import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                    <Input placeholder="Your name" className="bg-input border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-input border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <Input placeholder="What's this about?" className="bg-input border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea placeholder="Tell us what's on your mind..." rows={5} className="bg-input border-border" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-secondary border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Management</p>
                      <p className="text-muted-foreground">management@hevorah.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Booking</p>
                      <p className="text-muted-foreground">booking@hevorah.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Press</p>
                      <p className="text-muted-foreground">press@hevorah.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-secondary border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    YouTube
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest news, tour dates, and exclusive content delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="bg-input border-border flex-1" />
                  <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
