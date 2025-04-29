"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

// Mock alert and shelter data
const mockAlerts = [
  {
    id: 1,
    title: "Flood Warning",
    type: "Emergency",
    status: "Active",
    location: "Downtown",
    severity: "High",
    description: "Heavy rainfall expected. Flooding likely in low-lying areas.",
  },
  {
    id: 2,
    title: "Power Outage",
    type: "Information",
    status: "Resolved",
    location: "Westside",
    severity: "Medium",
    description: "Power outage due to storm. Restoration in progress.",
  },
]

const mockShelters = [
  {
    id: 1,
    name: "Community Center Shelter",
    address: "123 Main St, Downtown",
    lat: 40.7128,
    lon: -74.006,
  },
  {
    id: 2,
    name: "High School Gym Shelter",
    address: "456 School Rd, Downtown",
    lat: 40.7138,
    lon: -74.005,
  },
]

export default function AlertDetailsPage() {
  const params = useParams<{ id: string }>()
  const alert = mockAlerts.find((a) => a.id === Number(params.id))
  const [issue, setIssue] = useState("")
  const [location, setLocation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!alert) {
    return <div className="p-8 text-center text-red-600">Alert not found.</div>
  }

  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <div className="max-w-2xl mx-auto mb-4">
        <Link href="/dashboard/alerts">
          <Button variant="outline" className="mb-4">← Back to Alerts</Button>
        </Link>
      </div>
      <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-white rounded-2xl mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-red-600">{alert.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 text-gray-700">
            <div><span className="font-semibold">Type:</span> {alert.type}</div>
            <div><span className="font-semibold">Status:</span> {alert.status}</div>
            <div><span className="font-semibold">Location:</span> {alert.location}</div>
            <div><span className="font-semibold">Severity:</span> {alert.severity}</div>
            <div className="mt-2"><span className="font-semibold">Description:</span> {alert.description}</div>
          </div>
          <Tabs defaultValue="shelters" className="mt-6">
            <TabsList className="mb-6 flex justify-center gap-2 bg-gray-100 rounded-lg p-2 shadow-sm">
              <TabsTrigger
                value="shelters"
                className="px-4 py-2 rounded-lg font-medium data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow data-[state=active]:scale-105 transition"
              >
                Nearest Shelters
              </TabsTrigger>
              <TabsTrigger
                value="report"
                className="px-4 py-2 rounded-lg font-medium data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow data-[state=active]:scale-105 transition"
              >
                Report an Issue
              </TabsTrigger>
            </TabsList>
            <TabsContent value="shelters">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">Nearest Shelters</h2>
              <ul className="space-y-4">
                {mockShelters.map((shelter) => (
                  <li key={shelter.id} className="p-4 bg-gray-50 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between shadow">
                    <div>
                      <div className="font-semibold text-gray-900">{shelter.name}</div>
                      <div className="text-gray-600 text-sm">{shelter.address}</div>
                    </div>
                    <Link
                      href={`/dashboard/map?shelters=${shelter.lat},${shelter.lon}`}
                      className="mt-2 md:mt-0"
                    >
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
                        View on Map
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="report">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">Report an Issue</h2>
              {submitted ? (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg shadow text-center">
                  Thank you for reporting the issue!
                </div>
              ) : (
                <form
                  className="space-y-4 max-w-md mx-auto"
                  onSubmit={e => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <label className="block font-semibold mb-1">Describe the Issue</label>
                    <textarea
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition"
                      placeholder="e.g. Pothole on Main Street, broken traffic light, etc."
                      value={issue}
                      onChange={e => setIssue(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Location</label>
                    <input
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition"
                      placeholder="e.g. 789 Elm St, Downtown"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">
                    Submit Issue
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 