import { BarChart } from "lucide-react"

export default function VisitorStatistics() {
  // Fetch data from Prisma here
  const visitorCount = 150 // Example data

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">Today's Visitors</h3>
        <BarChart className="h-4 w-4 text-gray-400" />
      </div>
      <div className="text-2xl font-bold">{visitorCount}</div>
      <p className="text-xs text-gray-500">+0.0% from yesterday</p>
    </div>
  )
}

