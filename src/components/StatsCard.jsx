export const StatsCard = (stat) =>{
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
      <div className="text-gray-600">{stat.label}</div>
    </div>
  );
}
