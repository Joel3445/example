import { Brain, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-deep-space-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-electric-blue">About Blackbox AI Mavericks Club</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-light-gray leading-relaxed">
                The Blackbox AI Mavericks Club is dedicated to exploring the frontiers of Artificial Intelligence. Our
                mission is to build a strong community of AI enthusiasts and professionals who share knowledge, build
                solutions, and inspire innovation.
              </p>

              <p className="text-lg text-light-gray leading-relaxed">
                From beginners to experts, everyone is welcome to join this transformative journey. We foster learning,
                experimentation, and networking by hosting events, sharing resources, and promoting real-world AI
                projects.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-8 w-8 text-midnight-black" />
                  </div>
                  <h3 className="font-semibold text-electric-blue mb-2">Innovation</h3>
                  <p className="text-sm text-light-gray">Pushing AI boundaries</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-midnight-black" />
                  </div>
                  <h3 className="font-semibold text-electric-blue mb-2">Community</h3>
                  <p className="text-sm text-light-gray">Connect with peers</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-8 w-8 text-midnight-black" />
                  </div>
                  <h3 className="font-semibold text-electric-blue mb-2">Learning</h3>
                  <p className="text-sm text-light-gray">Continuous growth</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 rounded-2xl p-8 backdrop-blur-sm border border-electric-blue/30">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI Brain Network"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
