import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "AI Research Engineer",
      company: "TechCorp",
      quote:
        "Being part of this club transformed my learning experience. The events and resources are top-notch! The community support has been invaluable for my career growth.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Priya Sharma",
      role: "Machine Learning Specialist",
      company: "DataVision",
      quote:
        "The networking opportunities here are incredible. I've connected with industry leaders and found mentors who've guided my AI journey. Highly recommend joining!",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Rajesh Kumar",
      role: "AI Product Manager",
      company: "InnovateTech",
      quote:
        "From beginner workshops to advanced research discussions, this club caters to all levels. The exclusive content and expert insights are worth their weight in gold.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-deep-space-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-electric-blue">What Our Members Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-light-gray max-w-2xl mx-auto">
              Hear from our community members about their transformative experiences with the Blackbox AI Mavericks
              Club.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-midnight-black border-electric-blue/30 hover:border-electric-blue/60 transition-all duration-300 group hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-electric-blue" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-electric-blue text-electric-blue" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-light-gray mb-6 italic leading-relaxed">"{testimonial.quote}"</blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-electric-blue/50"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-blue/20 to-neon-purple/20"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-electric-blue">{testimonial.name}</div>
                      <div className="text-sm text-light-gray">{testimonial.role}</div>
                      <div className="text-xs text-neon-purple">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-light-gray mb-4">Ready to join our community of AI innovators?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-electric-blue hover:bg-electric-blue/80 text-midnight-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 inline-block text-center"
              >
                Join WhatsApp Group
              </a>
              <a
                href="https://instagram.com/blackboxaimavericks"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-semibold rounded-lg transition-all duration-300 inline-block text-center"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
