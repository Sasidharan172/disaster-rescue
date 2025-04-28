"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false })

// Default mock shelters if none in query
const mockShelters = [
  { lat: 13.059052668215553, lon: 80.23351321421373, name: "Community Center Shelter" },
  { lat: 40.7138, lon: -74.005, name: "High School Gym Shelter" },
]

export default function MapPage() {
  const searchParams = useSearchParams()
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
    <div className="w-full h-[80vh] flex flex-col items-center justify-center pt-8">
      <div className="w-full max-w-4xl h-full rounded-lg overflow-hidden shadow-lg border">
        <MapView userPos={userPos} shelters={shelters} />
      </div>
      <div className="mt-4 text-gray-600 text-sm">Shelters are shown as markers. Your location is also shown if available.</div>
    </div>
  )
}
