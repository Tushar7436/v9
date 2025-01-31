import { Line, LineChart, ResponsiveContainer, Tooltip, Legend, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", revenue: 10400, expenditure: 8000 },
  { month: "Feb", revenue: 14405, expenditure: 12000 },
  { month: "Mar", revenue: 9400, expenditure: 9000 },
  { month: "Apr", revenue: 8200, expenditure: 7800 },
  { month: "May", revenue: 7000, expenditure: 6000 },
  { month: "Jun", revenue: 9600, expenditure: 8500 },
  { month: "Jul", revenue: 11244, expenditure: 9500 },
  { month: "Aug", revenue: 26475, expenditure: 22000 },
];

export default function FinanceOverview() {
  return (
    <div className="bg-white p-4 rounded-lg shadow lg:col-span-3">
      <h3 className="text-lg font-semibold mb-4">Finance Overview</h3>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => [`${value}`, name === "revenue" ? "Revenue" : "Expenditure"]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="expenditure" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
