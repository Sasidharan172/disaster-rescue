import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Disaster Response{" "}
              <span className="text-red-600">When Every Second Counts</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              A comprehensive platform connecting those in need with rescue
              teams, NGOs, and government resources before, during, and after
              disasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700"
                >
                  Register Now
                </Button>
              </Link>
              <Link href="/emergency">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-50"
                >
                  Emergency Help
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Disaster response team in action"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-medium">
                &quot;This platform helped coordinate our rescue efforts during the
                flood and saved countless lives.&quot;
              </p>
              <p className="text-xs text-gray-500 mt-2">- Rescue Team Leader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
