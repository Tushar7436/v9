import { Users } from "lucide-react"

export default function EventParticipation() {
  // Fetch data from Prisma here
  const participantCount = 85 // Example data

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">Last Event Participants</h3>
        <Users className="h-4 w-4 text-gray-400" />
      </div>
      <div className="text-2xl font-bold">{participantCount}</div>
      <p className="text-xs text-gray-500">+10.1% from previous event</p>
    </div>
  )
}

