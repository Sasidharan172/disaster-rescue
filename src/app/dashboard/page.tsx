"use client"

import React from "react";
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { DashboardHeader } from "@/components/dashboard-header"
import { CivilianDashboard } from "@/app/dashboard/civilian/page"
import { NgoDashboard } from "@/app/dashboard/ngo/page"
import { GovernmentDashboard } from "@/app/dashboard/government/page"
import { RescuerDashboard } from "@/app/dashboard/rescuer/page"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}</h1>

        {user.role === "civilian" && <CivilianDashboard />}
        {user.role === "rescuer" && <RescuerDashboard />}
        {user.role === "ngo" && <NgoDashboard />}
        {user.role === "government" && <GovernmentDashboard />}
      </main>
    </div>
  )
}

