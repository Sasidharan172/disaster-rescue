"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const mockAlerts = [
  {
    id: 1,
    title: "Flood Warning",
    type: "Emergency",
    status: "Active",
    location: "Downtown",
    severity: "High",
  },
  {
    id: 2,
    title: "Power Outage",
    type: "Information",
    status: "Resolved",
    location: "Westside",
    severity: "Medium",
  },
]

export default function AlertsPage() {
  const router = useRouter()
  const [role] = useState<"ngo" | "government">("ngo") // Change as needed for demo
  const [aiInput, setAiInput] = useState("")
  const [aiResponse, setAiResponse] = useState("")

  // Placeholder for alert creation
  const handleCreateAlert = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add API call to create alert
    alert("Alert created (API integration pending)")
  }

  // Placeholder for AI recommendation
  const handleAIRecommend = async () => {
    // TODO: Integrate with OpenAI or other AI API
    setAiResponse("[AI Recommendation will appear here after integration]")
  }

  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      {/* Back button */}
      <div className="max-w-3xl mx-auto mb-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>

      {/* Page header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Alerts & Recommendations</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Create, track, and get AI-powered recommendations for disaster alerts. Designed for NGOs and Government agencies.</p>
      </div>
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="mb-8 flex justify-center gap-2 bg-gray-100 rounded-lg p-2 shadow-sm">
          <TabsTrigger value="create" className="px-4 py-2 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition">Create Alert</TabsTrigger>
          <TabsTrigger value="track" className="px-4 py-2 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition">Track Alerts</TabsTrigger>
          <TabsTrigger value="ai" className="px-4 py-2 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition">AI Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="create">
          {(role === "ngo" || role === "government") && (
            <Card className="max-w-xl mx-auto shadow-lg border-0 bg-white rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-red-600">Create New Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateAlert} className="space-y-5">
                  <input className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition" placeholder="Title" required />
                  <textarea className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition" placeholder="Description" required />
                  <select className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition" required>
                    <option value="">Type</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Information">Information</option>
                  </select>
                  <input className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition" placeholder="Location" required />
                  <select className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition" required>
                    <option value="">Severity</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">Create Alert</Button>
                </form>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="track">
          <Card className="max-w-3xl mx-auto shadow-lg border-0 bg-white rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-red-600">Track Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 rounded-l-lg">Title</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Location</th>
                      <th className="p-3 rounded-r-lg">Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAlerts.map((alert) => (
                      <tr 
                        key={alert.id} 
                        className="bg-white shadow rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => window.location.href = `/dashboard/alerts/${alert.id}`}
                      >
                        <td className="p-3 font-medium text-gray-800">{alert.title}</td>
                        <td className="p-3">{alert.type}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${alert.status === "Active" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>{alert.status}</span>
                        </td>
                        <td className="p-3">{alert.location}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            alert.severity === "High" 
                              ? "bg-red-200 text-red-800" 
                              : alert.severity === "Medium" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-green-100 text-green-800"
                          }`}>{alert.severity}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card className="max-w-xl mx-auto shadow-lg border-0 bg-white rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-red-600">AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-200 transition mb-3"
                placeholder="Describe your issue or alert..."
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                rows={4}
              />
              <Button className="w-full mb-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition" onClick={handleAIRecommend}>
                Get Recommendation
              </Button>
              <div className="bg-gray-50 p-3 rounded-lg min-h-[60px] text-gray-700 shadow-inner">
                {aiResponse || "AI suggestions will appear here."}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 