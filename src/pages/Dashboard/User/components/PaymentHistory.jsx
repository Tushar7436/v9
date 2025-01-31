import { DollarSign } from "lucide-react"

export default  function PaymentHistory() {
  // Fetch payment history from Prisma here
  const payments = [
    { id: 1, amount: 50, description: "Membership Fee", date: "2023-05-01", status: "Paid" },
    { id: 2, amount: 25, description: "Workshop Registration", date: "2023-04-15", status: "Paid" },
    { id: 3, amount: 30, description: "Event Ticket", date: "2023-03-22", status: "Pending" },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Payment History</h3>
      <ul className="space-y-2">
        {payments.map((payment) => (
          <li key={payment.id} className="flex items-center">
            <DollarSign className="mr-2 h-4 w-4 text-green-500" />
            <span>
              ${payment.amount} - {payment.description}
            </span>
            <span className="ml-auto text-sm text-gray-500">{payment.date}</span>
            <span className={`ml-2 text-sm ${payment.status === "Paid" ? "text-green-500" : "text-yellow-500"}`}>
              {payment.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

