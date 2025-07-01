import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MessageCircle } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919876543210" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/blackboxaimavericks" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ]

  return (
    <footer id="contact" className="bg-midnight-black border-t border-deep-space-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center">
                  <span className="text-midnight-black font-bold text-xl">B</span>
                </div>
                <span className="text-xl font-bold text-electric-blue">Blackbox AI Mavericks Club</span>
              </div>

              <p className="text-light-gray mb-6 max-w-md">
                Join our community of AI innovators, researchers, and enthusiasts. Together, we're shaping the future of
                artificial intelligence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-light-gray">
                  <Mail className="h-5 w-5 text-electric-blue" />
                  <span>contact@blackboxai.club</span>
                </div>
                <div className="flex items-center space-x-3 text-light-gray">
                  <Phone className="h-5 w-5 text-electric-blue" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-electric-blue mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-deep-space-gray hover:bg-electric-blue/20 rounded-full flex items-center justify-center text-light-gray hover:text-electric-blue transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <p className="text-light-gray text-sm mt-6">
                Follow us on social media for the latest updates, AI insights, and community discussions.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-deep-space-gray mt-12 pt-8">
            <div className="text-center">
              <div className="text-light-gray text-sm">
                <p>&copy; 2025 Blackbox AI Mavericks Club. All rights reserved.</p>
                <p className="mt-1">Empowering AI Innovation Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
