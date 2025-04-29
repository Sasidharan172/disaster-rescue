"use client"

import { Button } from "@/components/ui/button"
import "leaflet/dist/leaflet.css"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false })

// Default mock shelters if none in query
const mockShelters = [
  { lat: 13.059052668215553, lon: 80.23351321421373, name: "Community Center Shelter" },
  { lat: 40.7138, lon: -74.005, name: "High School Gym Shelter" },
]

export default function MapPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [userPos, setUserPos] = useState<{ lat: number; lon: number } | null>(null)
  const [shelters, setShelters] = useState<{ lat: number; lon: number; name: string }[]>(mockShelters)

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => setUserPos({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => setUserPos(null)
      )
    }
  }, [])

  // Parse shelters from query string
  useEffect(() => {
    const sheltersParam = searchParams.get("shelters")
    if (sheltersParam) {
      const parsed = sheltersParam.split(";").map((s, i) => {
        const [lat, lon] = s.split(",").map(Number)
        return { lat, lon, name: `Shelter ${i + 1}` }
      })
      setShelters(parsed)
    }
  }, [searchParams])

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center p-4">
      {/* Back button container */}
      <div className="w-full max-w-4xl mb-4">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>

      {/* Map container */}
      <div className="w-full max-w-4xl h-[70vh] rounded-lg overflow-hidden shadow-lg border">
        <MapView userPos={userPos} shelters={shelters} />
      </div>
      
      {/* Info text */}
      <div className="mt-4 text-gray-600 text-sm text-center">
        Shelters are shown as markers. Your location is also shown if available.
      </div>
    </div>
  )
}
