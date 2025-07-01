import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Instagram, Users, Calendar, FileText, Star } from "lucide-react"

export function MembershipSection() {
  const benefits = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with AI professionals, researchers, and enthusiasts from around the world.",
    },
    {
      icon: FileText,
      title: "Exclusive Content",
      description: "Access premium articles, research papers, and insider insights not available elsewhere.",
    },
    {
      icon: Calendar,
      title: "Access to Events & Webinars",
      description: "Free access to all club events, workshops, and expert-led webinars.",
    },
    {
      icon: Star,
      title: "Community Support",
      description: "Get support and guidance from our active community of AI enthusiasts.",
    },
  ]

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/919876543210",
      description: "Join our WhatsApp community for daily discussions and updates",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/blackboxaimavericks",
      description: "Follow us for behind-the-scenes content and AI insights",
      color: "from-pink-500 to-purple-600",
    },
  ]

  return (
    <section id="membership" className="py-20 bg-midnight-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-electric-blue">Join Our Community</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-light-gray max-w-2xl mx-auto">
              Connect with us on social media to become part of our growing AI community and stay updated with the
              latest developments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-electric-blue mb-8">Community Benefits</h3>

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-deep-space-gray rounded-xl hover:bg-deep-space-gray/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-midnight-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-electric-blue mb-2">{benefit.title}</h4>
                    <p className="text-light-gray text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-electric-blue mb-8 text-center">Connect With Us</h3>

              {socialLinks.map((social, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-deep-space-gray to-midnight-black border-electric-blue/50 hover:border-electric-blue transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <social.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-electric-blue">{social.name}</CardTitle>
                    <CardDescription className="text-light-gray">{social.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-electric-blue hover:bg-electric-blue/80 text-midnight-black font-semibold py-3 transition-all duration-300 hover:scale-105"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        Join {social.name}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center mt-8">
                <p className="text-light-gray text-sm mb-4">Ready to be part of the AI revolution?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-electric-blue/80 hover:to-neon-purple/80 text-midnight-black font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      Join WhatsApp Group
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-semibold transition-all duration-300 bg-transparent"
                  >
                    <a href="https://instagram.com/blackboxaimavericks" target="_blank" rel="noopener noreferrer">
                      Follow on Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
