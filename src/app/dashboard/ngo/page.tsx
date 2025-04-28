import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Package, Users, MapPin, BarChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function NgoDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">24</CardTitle>
            <CardDescription>Active Volunteers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-green-600 font-medium flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>+8 since yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">3</CardTitle>
            <CardDescription>Distribution Centers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-blue-600 font-medium flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>All operational</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">156</CardTitle>
            <CardDescription>Aid Packages Delivered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-green-600 font-medium flex items-center">
              <Package className="h-4 w-4 mr-1" />
              <span>+42 today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">18</CardTitle>
            <CardDescription>Pending Requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-yellow-600 font-medium flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>5 high priority</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Resource Distribution</CardTitle>
            <CardDescription>
              Current inventory and distribution status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Food Supplies</div>
                  <div className="text-sm text-gray-500">68% remaining</div>
                </div>
                <Progress value={68} className="h-2" />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <div>0 packages</div>
                  <div>500 packages</div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Water</div>
                  <div className="text-sm text-gray-500">42% remaining</div>
                </div>
                <Progress value={42} className="h-2" />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <div>0 gallons</div>
                  <div>1000 gallons</div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Medical Supplies</div>
                  <div className="text-sm text-gray-500">83% remaining</div>
                </div>
                <Progress value={83} className="h-2" />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <div>0 kits</div>
                  <div>200 kits</div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Blankets & Clothing</div>
                  <div className="text-sm text-gray-500">35% remaining</div>
                </div>
                <Progress value={35} className="h-2" />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <div>0 sets</div>
                  <div>300 sets</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <Button variant="outline">Request Supplies</Button>
              <Button>Manage Inventory</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribution Centers</CardTitle>
            <CardDescription>Status and capacity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-green-600 mb-2">Active</Badge>
                    <h3 className="font-semibold">Community Center</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      42 Oak Street, Downtown
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
                <div className="mt-3">
                  <div className="text-sm flex justify-between mb-1">
                    <span>Capacity:</span>
                    <span>78% (156/200)</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-green-600 mb-2">Active</Badge>
                    <h3 className="font-semibold">High School Gym</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      15 Maple Road, Northside
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
                <div className="mt-3">
                  <div className="text-sm flex justify-between mb-1">
                    <span>Capacity:</span>
                    <span>92% (230/250)</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-green-600 mb-2">Active</Badge>
                    <h3 className="font-semibold">Church Hall</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      78 Pine Avenue, Westside
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
                <div className="mt-3">
                  <div className="text-sm flex justify-between mb-1">
                    <span>Capacity:</span>
                    <span>45% (68/150)</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </div>

            <Button className="w-full mt-4">Add Distribution Center</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Volunteer Management</CardTitle>
            <CardDescription>Active volunteers and assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Name</th>
                    <th className="text-left py-2 px-4">Status</th>
                    <th className="text-left py-2 px-4">Location</th>
                    <th className="text-left py-2 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">Maria Garcia</td>
                    <td className="py-2 px-4">
                      <Badge className="bg-green-600">Active</Badge>
                    </td>
                    <td className="py-2 px-4">Community Center</td>
                    <td className="py-2 px-4">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">David Kim</td>
                    <td className="py-2 px-4">
                      <Badge className="bg-green-600">Active</Badge>
                    </td>
                    <td className="py-2 px-4">High School Gym</td>
                    <td className="py-2 px-4">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">James Wilson</td>
                    <td className="py-2 px-4">
                      <Badge className="bg-yellow-600">On Break</Badge>
                    </td>
                    <td className="py-2 px-4">Church Hall</td>
                    <td className="py-2 px-4">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Emily Chen</td>
                    <td className="py-2 px-4">
                      <Badge className="bg-blue-600">In Transit</Badge>
                    </td>
                    <td className="py-2 px-4">To Community Center</td>
                    <td className="py-2 px-4">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between">
              <Button variant="outline">View All</Button>
              <Button>Add Volunteer</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2 h-5 w-5 text-red-600" />
              Aid Distribution Analytics
            </CardTitle>
            <CardDescription>Last 7 days of activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              <div className="flex flex-col items-center">
                <div
                  className="bg-red-600 w-8 rounded-t-sm"
                  style={{ height: "40%" }}
                ></div>
                <span className="text-xs mt-1">Mon</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="bg-red-600 w-8 rounded-t-sm"
                  style={{ height: "65%" }}
                ></div>
                <span className="text-xs mt-1">Tue</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="bg-red-600 w-8 rounded-t-sm"
                  style={{ height: "50%" }}
                ></div>
                <span className="text-xs mt-1">Wed</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="bg-red-600 w-8 rounded-t-sm"
                  style={{ height: "75%" }}
                ></div>
                <span className="text-xs mt-1">Thu</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="bg-red-600 w-8 rounded-t-sm"
                  style={{ height: "90%" }}
                ></div>
                <span className="text-xs mt-1">Fri</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="bg-red-600 w-8 rounded-t-sm"
                  style={{ height: "80%" }}
                ></div>
                <span className="text-xs mt-1">Sat</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="bg-red-600 w-8 rounded-t-sm"
                  style={{ height: "60%" }}
                ></div>
                <span className="text-xs mt-1">Sun</span>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Total packages distributed this week: 432</p>
              <p className="text-green-600 font-medium">
                +28% from previous week
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
