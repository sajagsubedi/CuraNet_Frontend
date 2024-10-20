"use client";

import { useState } from "react";
import {
  Menu,
  Bell,
  Moon,
  ChevronDown,
  Users,
  UserPlus,
  CreditCard,
  Calendar,
  Pill,
  DollarSign,
  Eye,
  Briefcase,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="flex gap-5">
            <div className="w-1/3 flex-col flex gap-5">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Welcome Back !
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Super Admin</h3>
                      <p className="text-sm text-muted-foreground">
                        admin@infycare.com
                      </p>
                      <div className="mt-2 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-bold">83</p>
                          <p className="text-xs text-muted-foreground">
                            Total Active Doctors
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">2912</p>
                          <p className="text-xs text-muted-foreground">
                            Total Patients
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Earning !
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$ 495262</div>
                  <p className="text-xs text-red-500">
                    -29.94% From Previous Month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="w-2/3 flex flex-col gap-5">
              <div className="w-full flex gap-5">
                <Card className="w-1/2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Upcoming Appointments
                    </CardTitle>
                    <button className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center p-2">
                      <Users className="text-white" />
                    </button>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32</div>
                  </CardContent>
                </Card>
                <Card className="w-1/2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Appointments
                    </CardTitle>
                    <button className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center p-2">
                      <Calendar className="text-white" />
                    </button>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4815</div>
                  </CardContent>
                </Card>
              </div>
              <Card className="mt-4 w-full ">
                <CardHeader>
                  <CardTitle>
                    Earnings From Appointments ($ 5859300.98)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    {/* Replace this div with an actual chart component */}
                    <div className="w-full h-full bg-gradient-to-r from-blue-200 to-blue-100 rounded-md flex items-end">
                      <div className="w-1/12 h-1/3 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-1/2 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-2/3 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-full bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-4/5 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-3/5 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-2/5 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-1/2 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-3/5 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-4/5 bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-full bg-blue-500 rounded-t-md"></div>
                      <div className="w-1/12 h-3/4 bg-blue-500 rounded-t-md"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
