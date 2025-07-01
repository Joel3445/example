import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, Download, Code, FileText, Wrench } from "lucide-react"

export function ResourcesSection() {
  const resourceCategories = [
    {
      title: "Articles",
      icon: FileText,
      items: ["Understanding Neural Networks", "The Ethics of AI", "Machine Learning Fundamentals", "AI in Healthcare"],
    },
    {
      title: "Tutorials",
      icon: Code,
      items: [
        "Hands-on with TensorFlow",
        "Prompt Engineering Basics",
        "Computer Vision with OpenCV",
        "Natural Language Processing",
      ],
    },
    {
      title: "Webinars",
      icon: Video,
      items: [
        "Future of AI - Industry Panel",
        "Deep Learning Architectures",
        "AI Startup Success Stories",
        "Responsible AI Development",
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      items: ["Recommended AI Libraries", "Development Platforms", "Dataset Collections", "Model Training Resources"],
    },
  ]

  const downloadableContent = [
    {
      title: "Getting Started with AI",
      type: "E-book",
      description: "Comprehensive guide for AI beginners covering fundamentals and practical applications.",
      icon: BookOpen,
    },
    {
      title: "AI Trends 2025",
      type: "Whitepaper",
      description: "In-depth analysis of emerging AI trends and their potential impact on various industries.",
      icon: FileText,
    },
  ]

  return (
    <section id="resources" className="py-20 bg-deep-space-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-electric-blue">Resources</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-light-gray max-w-2xl mx-auto">
              Access our curated collection of AI resources to accelerate your learning journey.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resourceCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-midnight-black border-electric-blue/30 hover:border-electric-blue/60 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-8 w-8 text-midnight-black" />
                  </div>
                  <CardTitle className="text-xl text-electric-blue">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-light-gray text-sm hover:text-electric-blue cursor-pointer transition-colors"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Downloadable Content */}
          <div className="bg-midnight-black rounded-2xl p-8 border border-electric-blue/30">
            <h3 className="text-2xl font-bold text-electric-blue mb-8 text-center">Downloadable Content</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {downloadableContent.map((content, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-deep-space-gray rounded-xl hover:bg-deep-space-gray/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <content.icon className="h-6 w-6 text-midnight-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-electric-blue">{content.title}</h4>
                      <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs rounded-full">
                        {content.type}
                      </span>
                    </div>
                    <p className="text-light-gray text-sm mb-4">{content.description}</p>
                    <Button size="sm" className="bg-electric-blue hover:bg-electric-blue/80 text-midnight-black">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
