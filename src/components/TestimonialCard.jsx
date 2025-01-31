import { Star, BadgeCheck } from "lucide-react";

export function TestimonialCard( testimonial ) {
  const {
    avatar = "",
    name = "Anonymous",
    date = "N/A",
    role = "N/A",
    isVerified = false,
    rating = 0,
    quote = "No testimonial available.",
    eventAttended = "N/A",
  } = testimonial;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-14 h-14 rounded-full object-cover ring-4 ring-primary-100"
            />
            {isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <BadgeCheck className="w-5 h-5 text-primary-500" />
              </div>
            )}
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-gray-900">{name}</h4>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{date}</span>
            </div>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 italic leading-relaxed">"{quote}"</p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-sm font-medium text-gray-900">Event Attended</p>
          <p className="text-sm text-primary-600">{eventAttended}</p>
        </div>
        <button className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
          Read more
        </button>
      </div>
    </div>
  );
}
