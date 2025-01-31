import { Award } from "lucide-react"

export default function AwardsOverview() {
  // Fetch awards data from Prisma here
  const awards = [
    { id: 1, name: "Best Project Award", date: "2023-05-15" },
    { id: 2, name: "Outstanding Volunteer", date: "2023-03-22" },
    { id: 3, name: "Technical Quiz Winner", date: "2023-02-10" },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Awards and Certificates</h3>
      <ul className="space-y-2">
        {awards.map((award) => (
          <li key={award.id} className="flex items-center">
            <Award className="mr-2 h-4 w-4 text-yellow-500" />
            <span>{award.name}</span>
            <span className="ml-auto text-sm text-gray-500">{award.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

