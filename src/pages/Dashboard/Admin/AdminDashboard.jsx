import { Suspense } from "react"
import DashboardLayout from "../Layout/DashboardLayout"
import { Users, FileText } from "lucide-react"
import VisitorStatistics from "./components/VisitorStatistics"
import EventParticipation from "./components/EventParticipation"
import UserOverview from "./components/UserOverview"
import FinanceOverview from "./components/FinanceOverview"

export default function AdminDashboard() {
  return (
    <DashboardLayout isAdmin>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<div className="h-24 bg-gray-200 rounded-lg animate-pulse" />}>
          <VisitorStatistics />
        </Suspense>
        <Suspense fallback={<div className="h-24 bg-gray-200 rounded-lg animate-pulse" />}>
          <EventParticipation />
        </Suspense>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
            <FileText className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-gray-500">+201 from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Active Members</h3>
            <Users className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-gray-500">+180 from last month</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Suspense fallback={<div className="h-96 bg-gray-200 rounded-lg animate-pulse lg:col-span-4" />}>
          <UserOverview />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-200 rounded-lg animate-pulse lg:col-span-3" />}>
          <FinanceOverview />
        </Suspense>
      </div>
    </DashboardLayout>
  )
}

