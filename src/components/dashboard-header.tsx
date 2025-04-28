"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth-provider";
import {
  Bell,
  Menu,
  X,
  User,
  LogOut,
  Settings,
  AlertTriangle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DR</span>
              </div>
              <span className="font-semibold text-lg hidden md:block">
                DisasterResponse
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="px-3 py-2 text-gray-700 hover:text-red-600"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/alerts"
              className="px-3 py-2 text-gray-700 hover:text-red-600"
            >
              Alerts
            </Link>
            <Link
              href="/dashboard/map"
              className="px-3 py-2 text-gray-700 hover:text-red-600"
            >
              Map
            </Link>
            {user?.role === "government" && (
              <Link
                href="/dashboard/predictions"
                className="px-3 py-2 text-gray-700 hover:text-red-600"
              >
                Predictions
              </Link>
            )}
            {(user?.role === "rescuer" || user?.role === "ngo") && (
              <Link
                href="/dashboard/requests"
                className="px-3 py-2 text-gray-700 hover:text-red-600"
              >
                Help Requests
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <Link href="/emergency">
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700 hidden md:flex"
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Emergency
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/dashboard"
                className="px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/alerts"
                className="px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Alerts
              </Link>
              <Link
                href="/dashboard/map"
                className="px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Map
              </Link>
              {user?.role === "government" && (
                <Link
                  href="/dashboard/predictions"
                  className="px-3 py-2 text-gray-700 hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Predictions
                </Link>
              )}
              {(user?.role === "rescuer" || user?.role === "ngo") && (
                <Link
                  href="/dashboard/requests"
                  className="px-3 py-2 text-gray-700 hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Help Requests
                </Link>
              )}
              <Link
                href="/emergency"
                className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Emergency
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
