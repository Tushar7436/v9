import { Suspense } from "react"
import DashboardLayout from "../Layout/DashboardLayout"
import { Users, Award, DollarSign } from "lucide-react"
import ProfileDetails from "./components/ProfileDetails"
import AwardsOverview from "./components/AwardsOverview"
import PaymentHistory from "./components/PaymentHistory"

export default function UserDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Events Participated</h3>
            <Users className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-gray-500">3 upcoming events</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Awards Earned</h3>
            <Award className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-gray-500">2 new this month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Payment Status</h3>
            <DollarSign className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-green-500">Paid</div>
          <p className="text-xs text-gray-500">Last payment: 05/15/2023</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <Suspense fallback={<div className="h-64 bg-gray-200 rounded-lg animate-pulse" />}>
          <ProfileDetails />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-200 rounded-lg animate-pulse" />}>
          <AwardsOverview />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-200 rounded-lg animate-pulse" />}>
          <PaymentHistory />
        </Suspense>
      </div>
    </DashboardLayout>
  )
}

