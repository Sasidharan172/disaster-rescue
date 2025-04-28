import { AlertTriangle, Radio, MapPin, Users, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
    title: "Early Warning System",
    description: "AI-powered disaster prediction and verification to provide timely alerts to communities at risk.",
  },
  {
    icon: <Radio className="h-10 w-10 text-red-600" />,
    title: "Emergency Broadcasting",
    description: "Reliable communication channels that work even with limited connectivity during disasters.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-red-600" />,
    title: "Location Tracking",
    description: "Precise location tracking with offline capabilities to help rescue teams find those in need.",
  },
  {
    icon: <Users className="h-10 w-10 text-red-600" />,
    title: "Volunteer Coordination",
    description: "Efficient management of volunteers and NGOs to maximize impact during response efforts.",
  },
  {
    icon: <Shield className="h-10 w-10 text-red-600" />,
    title: "Spam Prevention",
    description: "AI-powered filtering to prioritize legitimate help requests and optimize resource allocation.",
  },
  {
    icon: <Clock className="h-10 w-10 text-red-600" />,
    title: "Real-time Updates",
    description: "Continuous status updates for victims awaiting rescue and coordination for response teams.",
  },
]

export function FeatureSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Disaster Response</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform works across all disaster phases - preparation, response, and recovery - connecting those who
            need help with those who can provide it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

