"use client"

import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

interface Shelter {
  lat: number
  lon: number
  name: string
}

// Define icons at the top level
const userIcon = L.icon({
  iconUrl: '/images/user-marker.png',
  iconSize: [20, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
  shadowUrl: '/images/marker-shadow.png',
  shadowSize: [41, 41]
})

const shelterIcon = L.icon({
  iconUrl: '/images/shelter-marker.png',
  iconSize: [20, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
  shadowUrl: '/images/marker-shadow.png',
  shadowSize: [41, 41]
})

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
        <Marker 
          position={[userPos.lat, userPos.lon]}
          icon={userIcon}
        >
          <Popup>Your Location</Popup>
        </Marker>
      )}
      {shelters.map((shelter, i) => (
        <Marker 
          key={i} 
          position={[shelter.lat, shelter.lon]}
          icon={shelterIcon}
        >
          <Popup>{shelter.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
} 