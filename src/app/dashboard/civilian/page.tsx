"use client"

import React from "react"
import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, MapPin, Radio, Bell, Shield } from "lucide-react"
import Link from "next/link"
import { EmergencyContactModal } from "@/components/emergency-contact-modal"

interface EmergencyContact {
  name: string
  phone: string
}

export function CivilianDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [contacts, setContacts] = useState<EmergencyContact[]>([
    { name: "Emergency Services", phone: "911" },
    { name: "Local Rescue Team", phone: "555-123-4567" },
    { name: "Medical Assistance", phone: "555-987-6543" },
  ])
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          setGeoError(error.message);
          setCoords({ lat: 0, lon: 0 });
        }
      );
    }
  }, []);

  const handleAddContact = (contact: EmergencyContact) => {
    setContacts([...contacts, contact])
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2 bg-gradient-to-br from-red-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-600" />
              Active Alerts
            </CardTitle>
            <CardDescription>
              Current disaster alerts in your area
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-yellow-300 bg-yellow-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-yellow-500 mb-2">Warning</Badge>
                    <h3 className="font-semibold text-lg">
                      Potential Flooding
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Heavy rainfall expected in your area over the next 48
                      hours.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-blue-500 mb-2">Information</Badge>
                    <h3 className="font-semibold text-lg">Weather Advisory</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Strong winds expected tonight. Secure loose objects
                      outdoors.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              Your Location
            </CardTitle>
            <CardDescription>Current location status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative rounded-md overflow-hidden mb-4">
              {coords ? (
                <img
                  src={`https://staticmap.openstreetmap.de/staticmap.php?center=${coords.lat},${coords.lon}&zoom=14&size=300x300&markers=${coords.lat},${coords.lon},red-pushpin`}
                  alt="Map showing your location"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">Loading map...</div>
              )}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-6 w-6 rounded-full bg-red-600 animate-ping opacity-75"></div>
                <div className="absolute h-4 w-4 rounded-full bg-red-600"></div>
              </div>
              {/* Debug output for coordinates */}
              {coords && (
                <div className="absolute bottom-2 left-2 bg-white/80 text-xs text-gray-700 px-2 py-1 rounded">
                  lat: {coords.lat}, lon: {coords.lon}
                </div>
              )}
              {/* Error output for geolocation */}
              {geoError && (
                <div className="absolute top-2 left-2 bg-red-100 text-xs text-red-700 px-2 py-1 rounded">
                  Geolocation error: {geoError}
                </div>
              )}
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium">123 Main Street, Anytown</p>
              <p>Last updated: 5 minutes ago</p>
            </div>
            <Button className="w-full mt-4">Update Location</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Radio className="mr-2 h-5 w-5 text-red-600" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {contacts.map((contact, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
                >
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Call
                  </Button>
                </li>
              ))}
            </ul>
            <Button
              variant="link"
              className="mt-2 w-full"
              onClick={() => setIsModalOpen(true)}
            >
              Add Emergency Contact
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-red-600" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <p className="font-medium">SMS Alerts</p>
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                </div>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Email Notifications</p>
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                </div>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Push Notifications</p>
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                </div>
              </li>
            </ul>
            <Button variant="link" className="mt-2 w-full">
              Manage Notifications
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-red-600" />
              Safety Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/evacuation"
                  className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100"
                >
                  <p className="font-medium">Evacuation Plans</p>
                  <p className="text-sm text-gray-600">
                    Learn safe evacuation routes
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/emergency-kit"
                  className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100"
                >
                  <p className="font-medium">Emergency Kit Guide</p>
                  <p className="text-sm text-gray-600">
                    Essential supplies checklist
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/first-aid"
                  className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100"
                >
                  <p className="font-medium">First Aid Basics</p>
                  <p className="text-sm text-gray-600">
                    Emergency medical procedures
                  </p>
                </Link>
              </li>
            </ul>
            <Button variant="link" className="mt-2 w-full">
              View All Resources
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-700">Emergency Help Request</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you&apos;re in immediate danger or need urgent assistance, use the
            emergency button below.
          </p>
          <Link href="/emergency">
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <AlertCircle className="mr-2 h-5 w-5" />
              Request Emergency Help
            </Button>
          </Link>
        </CardContent>
      </Card>

      <EmergencyContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddContact}
      />
    </div>
  )
}
