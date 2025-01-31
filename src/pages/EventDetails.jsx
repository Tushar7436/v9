import { useNavigate, useSearchParams } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, ArrowLeft } from "lucide-react";
import { useEventStore } from "../utils/store";
import  Navbar  from "../components/Navbar";

export default function EventDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("id");
  const { events } = useEventStore();
  
  const event = events.find(e => e.id === eventId);
  
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h1>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 inline-flex items-center gap-2 text-white hover:text-primary-200 font-medium z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Events
        </button>
      </div>

      {/* Event Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto">
            {/* Event Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>{event.location}</span>
                </div>
                {event.attendees && (
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-500" />
                    <span>{event.attendees}+ Attendees</span>
                  </div>
                )}
              </div>
            </div>

            {/* Event Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600 text-lg">{event.description}</p>
            </div>

            {/* Event Highlights */}
            {event.highlights && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Highlights</h2>
                <ul className="space-y-3">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Event Gallery */}
            {event.gallery && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${event.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Registration Button */}
            <div className="flex justify-center">
              <button className="bg-primary-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-600 transition-all duration-300 transform hover:scale-105">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
