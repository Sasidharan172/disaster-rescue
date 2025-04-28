import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Users, MapPin, Brain, Radio } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GovernmentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">3</CardTitle>
            <CardDescription>Active Disasters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-red-600 font-medium flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>1 Critical Level</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">8</CardTitle>
            <CardDescription>Rescue Teams Deployed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-blue-600 font-medium flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>42 Personnel</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">5</CardTitle>
            <CardDescription>NGOs Coordinating</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-green-600 font-medium flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>Resources Deployed</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">2</CardTitle>
            <CardDescription>Potential Threats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-yellow-600 font-medium flex items-center">
              <Brain className="h-4 w-4 mr-1" />
              <span>AI Monitoring</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Disaster Status Overview</CardTitle>
            <CardDescription>
              Current active disasters and response status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-red-600 mb-2">Critical</Badge>
                    <h3 className="font-semibold text-lg">Downtown Flooding</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Major flooding affecting 12 city blocks. 3 rescue teams
                      deployed.
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Downtown District</span>
                    </div>
                  </div>
                  <Button>Manage Response</Button>
                </div>
              </div>

              <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-yellow-600 mb-2">Moderate</Badge>
                    <h3 className="font-semibold text-lg">
                      Westside Power Outage
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Power outage affecting 5,000 residents. Utility crews
                      working on restoration.
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Westside District</span>
                    </div>
                  </div>
                  <Button variant="outline">Manage Response</Button>
                </div>
              </div>

              <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-yellow-600 mb-2">Moderate</Badge>
                    <h3 className="font-semibold text-lg">Highway Closure</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Major highway closed due to landslide. Alternative routes
                      established.
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Northern Access Route</span>
                    </div>
                  </div>
                  <Button variant="outline">Manage Response</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-red-600" />
              AI Predictions
            </CardTitle>
            <CardDescription>Potential disaster threats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-yellow-600 mb-2">Monitoring</Badge>
                    <h3 className="font-semibold">Potential Landslide</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Heavy rainfall may trigger landslides in hillside areas.
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-yellow-700 font-medium">
                        68% Probability
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Verify
                  </Button>
                </div>
              </div>

              <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-blue-600 mb-2">Watching</Badge>
                    <h3 className="font-semibold">River Level Rising</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Eastern river approaching flood stage in 24-48 hours.
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-blue-700 font-medium">
                        42% Probability
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Verify
                  </Button>
                </div>
              </div>
            </div>

            <Button className="w-full mt-4">View All Predictions</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Radio className="mr-2 h-5 w-5 text-red-600" />
              Emergency Broadcast System
            </CardTitle>
            <CardDescription>Send alerts to affected areas</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active">
              <TabsList className="mb-4">
                <TabsTrigger value="active">Active Alerts</TabsTrigger>
                <TabsTrigger value="draft">Draft Alerts</TabsTrigger>
                <TabsTrigger value="new">New Alert</TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-red-600 mb-2">Emergency</Badge>
                        <h3 className="font-semibold">Evacuation Order</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Downtown residents must evacuate immediately due to
                          rising flood waters.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span>Sent: 2 hours ago</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-yellow-600 mb-2">Warning</Badge>
                        <h3 className="font-semibold">Power Outage Alert</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Westside residents should prepare for extended power
                          outage.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span>Sent: 5 hours ago</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="draft">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-gray-600 mb-2">Draft</Badge>
                        <h3 className="font-semibold">Shelter Information</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Information about available shelters and resources.
                        </p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button size="sm">Send</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="new">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Alert Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Emergency</option>
                      <option>Warning</option>
                      <option>Advisory</option>
                      <option>Information</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Alert Title</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter alert title"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Alert Message</label>
                    <textarea
                      className="w-full p-2 border rounded-md h-24"
                      placeholder="Enter alert message"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Areas</label>
                    <select className="w-full p-2 border rounded-md" multiple>
                      <option>Downtown</option>
                      <option>Westside</option>
                      <option>Eastside</option>
                      <option>Northside</option>
                      <option>Southside</option>
                    </select>
                  </div>

                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline">Save Draft</Button>
                    <Button>Send Alert</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Allocation</CardTitle>
            <CardDescription>
              Manage and track deployed resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Rescue Teams</h3>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">75%</span>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>8/12 teams deployed</span>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Manage
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Emergency Vehicles</h3>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">60%</span>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>18/30 vehicles deployed</span>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Manage
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Medical Resources</h3>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">40%</span>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>4/10 medical teams deployed</span>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Manage
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Shelters</h3>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">85%</span>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>17/20 shelters activated</span>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Manage
                  </Button>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6">Resource Management Center</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Disaster Response Map</CardTitle>
          <CardDescription>
            Overview of all active disasters and response resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative rounded-md overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=1000"
              alt="Disaster response map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
              {/* Red areas for disasters */}
              <div className="absolute top-1/3 left-1/4 h-16 w-16 rounded-full bg-red-600 opacity-30"></div>
              <div className="absolute top-1/2 right-1/3 h-12 w-12 rounded-full bg-red-600 opacity-30"></div>
              <div className="absolute bottom-1/4 left-1/2 h-8 w-8 rounded-full bg-yellow-600 opacity-30"></div>

              {/* Blue dots for rescue teams */}
              <div className="absolute top-1/3 left-1/4 ml-2 mt-2">
                <div className="h-3 w-3 rounded-full bg-blue-600"></div>
              </div>
              <div className="absolute top-1/3 left-1/4 ml-6 mt-4">
                <div className="h-3 w-3 rounded-full bg-blue-600"></div>
              </div>
              <div className="absolute top-1/2 right-1/3 ml-1 mt-1">
                <div className="h-3 w-3 rounded-full bg-blue-600"></div>
              </div>

              {/* Green dots for NGOs */}
              <div className="absolute top-1/3 left-1/4 ml-4 mt-8">
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
              </div>
              <div className="absolute bottom-1/4 left-1/2 ml-2 mt-2">
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-red-600 mr-1"></div>
              <span>Disaster Areas</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-blue-600 mr-1"></div>
              <span>Rescue Teams</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-600 mr-1"></div>
              <span>NGO Resources</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-yellow-600 mr-1"></div>
              <span>Potential Threats</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
