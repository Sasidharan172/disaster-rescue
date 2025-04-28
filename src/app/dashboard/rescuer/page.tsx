import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Users, MapPin, CheckCircle, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RescuerDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">12</CardTitle>
            <CardDescription>Active Emergencies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-red-600 font-medium flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>3 High Priority</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">8</CardTitle>
            <CardDescription>Team Members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-green-600 font-medium flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>6 Available</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">5</CardTitle>
            <CardDescription>Completed Rescues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-blue-600 font-medium flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>Today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">28 min</CardTitle>
            <CardDescription>Avg. Response Time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-yellow-600 font-medium flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>-12% from yesterday</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Emergency Requests</CardTitle>
            <CardDescription>Prioritized list of help requests</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="high">
              <TabsList className="mb-4">
                <TabsTrigger value="high" className="text-red-600">
                  High Priority
                </TabsTrigger>
                <TabsTrigger value="medium">Medium Priority</TabsTrigger>
                <TabsTrigger value="low">Low Priority</TabsTrigger>
              </TabsList>

              <TabsContent value="high">
                <div className="space-y-4">
                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-red-600 mb-2">Critical</Badge>
                        <h3 className="font-semibold text-lg">
                          Family Trapped in Building
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Family of 4 trapped on 3rd floor, building partially
                          collapsed.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>42 Oak Street, Downtown</span>
                        </div>
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700">
                        Respond
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-red-600 mb-2">Critical</Badge>
                        <h3 className="font-semibold text-lg">
                          Medical Emergency
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Elderly person with medical condition needs immediate
                          evacuation.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>128 Pine Avenue, Westside</span>
                        </div>
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700">
                        Respond
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-red-600 mb-2">Critical</Badge>
                        <h3 className="font-semibold text-lg">
                          Child Separated from Parents
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          8-year-old separated during evacuation, currently at
                          temporary shelter.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Community Center, Eastside</span>
                        </div>
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700">
                        Respond
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="medium">
                <div className="space-y-4">
                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-yellow-600 mb-2">Medium</Badge>
                        <h3 className="font-semibold text-lg">
                          Food and Water Needed
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Group of 10 people need supplies at evacuation center.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>High School Gym, Northside</span>
                        </div>
                      </div>
                      <Button variant="outline">Respond</Button>
                    </div>
                  </div>

                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-yellow-600 mb-2">Medium</Badge>
                        <h3 className="font-semibold text-lg">
                          Transportation Needed
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Family needs transportation to evacuation center.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>15 Maple Road, Southside</span>
                        </div>
                      </div>
                      <Button variant="outline">Respond</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="low">
                <div className="space-y-4">
                  <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="bg-blue-600 mb-2">Low</Badge>
                        <h3 className="font-semibold text-lg">
                          Information Request
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Need information about road closures and safe routes.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Phone Request</span>
                        </div>
                      </div>
                      <Button variant="outline">Respond</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rescue Operations Map</CardTitle>
            <CardDescription>
              Current team locations and emergencies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative rounded-md overflow-hidden mb-4">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Map showing rescue operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0">
                {/* Red dots for emergencies */}
                <div className="absolute top-1/4 left-1/3">
                  <div className="h-4 w-4 rounded-full bg-red-600 animate-ping opacity-75"></div>
                  <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-red-600"></div>
                </div>
                <div className="absolute top-1/2 right-1/4">
                  <div className="h-4 w-4 rounded-full bg-red-600 animate-ping opacity-75"></div>
                  <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-red-600"></div>
                </div>

                {/* Blue dots for team members */}
                <div className="absolute top-1/3 right-1/3">
                  <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                </div>
                <div className="absolute bottom-1/4 left-1/4">
                  <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-600 mr-1"></div>
                <span>Emergencies</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-600 mr-1"></div>
                <span>Team Members</span>
              </div>
            </div>
            <Button className="w-full mt-4">Open Full Map</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Status</CardTitle>
          <CardDescription>
            Current availability and assignments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Team Member</th>
                  <th className="text-left py-2 px-4">Status</th>
                  <th className="text-left py-2 px-4">Location</th>
                  <th className="text-left py-2 px-4">Assignment</th>
                  <th className="text-left py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Sarah Johnson</td>
                  <td className="py-2 px-4">
                    <Badge className="bg-green-600">Available</Badge>
                  </td>
                  <td className="py-2 px-4">Base Station</td>
                  <td className="py-2 px-4">None</td>
                  <td className="py-2 px-4">
                    <Button size="sm">Assign</Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Mike Chen</td>
                  <td className="py-2 px-4">
                    <Badge className="bg-yellow-600">On Route</Badge>
                  </td>
                  <td className="py-2 px-4">Downtown</td>
                  <td className="py-2 px-4">Medical Emergency</td>
                  <td className="py-2 px-4">
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Lisa Wong</td>
                  <td className="py-2 px-4">
                    <Badge className="bg-blue-600">On Mission</Badge>
                  </td>
                  <td className="py-2 px-4">Westside</td>
                  <td className="py-2 px-4">Building Collapse</td>
                  <td className="py-2 px-4">
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">John Smith</td>
                  <td className="py-2 px-4">
                    <Badge className="bg-green-600">Available</Badge>
                  </td>
                  <td className="py-2 px-4">Base Station</td>
                  <td className="py-2 px-4">None</td>
                  <td className="py-2 px-4">
                    <Button size="sm">Assign</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
