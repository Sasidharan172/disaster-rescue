"use client"

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"

interface Shelter {
  lat: number
  lon: number
  name: string
}

function RecenterMap({ center }: { center: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.setView(center)
  }, [center, map])
  return null
}

export default function MapView({
  userPos,
  shelters,
}: {
  userPos: { lat: number; lon: number } | null
  shelters: Shelter[]
}) {
  const center: [number, number] = userPos
    ? [userPos.lat, userPos.lon]
    : shelters.length > 0
    ? [shelters[0].lat, shelters[0].lon]
    : [40.7128, -74.006]

  return (
    <MapContainer center={center} zoom={14} style={{ width: "100%", height: "60vh" }} scrollWheelZoom={true}>
      <RecenterMap center={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {userPos && (
        <Marker position={[userPos.lat, userPos.lon]}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
      {shelters.map((shelter, i) => (
        <Marker key={i} position={[shelter.lat, shelter.lon]}>
          <Popup>{shelter.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
} 