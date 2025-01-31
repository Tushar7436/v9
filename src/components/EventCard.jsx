import { Calendar, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function EventCard(event  ) {
  const navigate = useNavigate();

  const {
    image = "",
    title = "No Title",
    description = "No description available.",
    date = "N/A",
    time = "N/A",
    location = "Unknown location",
    id = "",
  } = event;

  const handleRegister = (e) => {
    e.stopPropagation(); // Prevent card click
    alert(`Registered for ${title}`);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation(); // Prevent card click
    navigate(`/EventDetails?id=${id}`);
  };

  return (
    <div 
      className="group relative backdrop-blur-md bg-white/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 cursor-pointer border border-white/20"
      onClick={handleViewDetails}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="relative p-6 backdrop-blur-sm bg-white/70">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            className="flex-1 bg-primary-500 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
            onClick={handleRegister}
          >
            Register Now
          </button>
          <button 
            className="flex-1 bg-white text-primary-500 border-2 border-primary-500 py-2.5 px-4 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
