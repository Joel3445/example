import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "AI Hackathon: Future Forecasting",
      date: "July 15, 2025",
      time: "10:00 AM – 4:00 PM",
      description: "A 6-hour sprint to develop predictive AI tools using cutting-edge machine learning techniques.",
      location: "Virtual Event",
      type: "Hackathon",
    },
    {
      title: "Neural Networks Deep Dive",
      date: "July 22, 2025",
      time: "7:00 PM – 9:00 PM",
      description: "Comprehensive workshop on understanding and implementing neural networks from scratch.",
      location: "Tech Hub, Bangalore",
      type: "Workshop",
    },
    {
      title: "AI Ethics Panel Discussion",
      date: "August 5, 2025",
      time: "6:00 PM – 8:00 PM",
      description: "Industry experts discuss the ethical implications and responsible development of AI systems.",
      location: "Virtual Event",
      type: "Panel",
    },
    {
      title: "Computer Vision Masterclass",
      date: "August 12, 2025",
      time: "2:00 PM – 6:00 PM",
      description: "Hands-on session covering image processing, object detection, and facial recognition.",
      location: "Innovation Center, Mumbai",
      type: "Masterclass",
    },
  ]

  return (
    <section id="events" className="py-20 bg-midnight-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-electric-blue">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-light-gray max-w-2xl mx-auto">
              Join our exciting events designed to expand your AI knowledge and connect with fellow innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-deep-space-gray border-electric-blue/30 hover:border-electric-blue/60 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-sm rounded-full font-medium">
                      {event.type}
                    </span>
                    <div className="text-right text-sm text-light-gray">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-electric-blue group-hover:text-neon-purple transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-light-gray">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-light-gray">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <Button
                      size="sm"
                      className="bg-electric-blue hover:bg-electric-blue/80 text-midnight-black font-semibold"
                    >
                      Reserve Spot
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
