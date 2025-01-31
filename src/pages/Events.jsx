import  { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { calendarStyles } from "../utils/calenderStyles";
import { Star } from "lucide-react";
import { DayPicker } from "react-day-picker";
import  Navbar  from "../components/Navbar";
import { EventCard } from "../components/EventCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { StatsCard } from "../components/StatsCard";
import { useEventStore } from "../utils/store";


export const Events =() =>{
  // Add calendar styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = calendarStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const { events, testimonials, stats, selectedDate, setSelectedDate } = useEventStore();
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const gsap = (window).gsap;
      const ScrollTrigger = (window).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // Hero animations
      gsap.to(heroRef.current, {
        duration: 1.5,
        backgroundPosition: '50% 50%',
        ease: 'power2.out',
      });

      gsap.to(heroContentRef.current, {
        duration: 1,
        scale: 1,
        opacity: 1,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Scroll animations
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleClass: "active",
            scrub: 1,
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="bg-custom-gradient pb-5">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] overflow-hidden pt-10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60"
            alt="Hero"
            className="w-full h-full object-cover animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-secondary-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div ref={heroContentRef} className="hero-content text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Discover Amazing Events</h1>
            <p className="text-2xl font-light mb-8">Join us for unforgettable experiences and connect with like-minded individuals.</p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Explore Events
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-gradient-to-br from-white to-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-900">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="card-hover">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Event Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our upcoming events and plan your schedule
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-3 bg-white shadow-xl rounded-2xl p-8">
              <div className="flex items-center justify-center gap-4 mb-8">
                <button 
                  className="px-4 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                  onClick={() => setSelectedDate(new Date())}
                >
                  Today
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span>Event</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary-200" />
                    <span>Selected</span>
                  </div>
                </div>
              </div>

              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={{
                  hasEvent: (date) => events.some(event => new Date(event.date).toDateString() === date.toDateString())
                }}
                modifiersClassNames={{
                  hasEvent: 'relative'
                }}
                components={{
                  DayContent: (date) => {
                    const hasEvent = events.some(event => new Date(event.date).toDateString() === date.toDateString());
                    const dayEvents = events.filter(event => new Date(event.date).toDateString() === date.toDateString());
                    
                    return (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <span>{date.getDate()}</span>
                        {hasEvent && (
                          <>
                            <div className="event-dot" />
                            <div className="event-preview">
                              <div className="text-sm font-medium text-gray-900 mb-1">
                                {dayEvents.length} Event{dayEvents.length > 1 ? 's' : ''}
                              </div>
                              <div className="space-y-1">
                                {dayEvents.map(event => (
                                  <div key={event.id} className="text-xs text-gray-600">
                                    {event.title}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  }
                }}
                className="mx-auto calendar-custom"
                showOutsideDays
              />
            </div>

            {/* Selected Date Events */}
            <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-8 overflow-y-auto max-h-[600px]">
              <h3 className="text-xl font-bold text-primary-900 mb-6">
                {selectedDate ? (
                  <span>Events on {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                ) : (
                  <span>Select a date to view events</span>
                )}
              </h3>

              <div className="space-y-6">
                {selectedDate ? (
                  events.filter(event => new Date(event.date).toDateString() === selectedDate.toDateString()).map(event => (
                    <div 
                      key={event.id} 
                      className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors cursor-pointer"
                      onClick={() => navigate(`/EventDetails?id=${event.id}`)}
                    >
                      <div className="w-full sm:w-24 h-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary-900">{event.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{event.time} • {event.location}</p>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{event.description}</p>
                        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Select a date to view scheduled events</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section id="recent" className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Recent Event Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Relive the moments from our most impactful and engaging events that brought our community together.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 reveal">
            {events.slice(0, 4).map((event) => (
              <div key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Main Event Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">{event.date}</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">{event.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  {/* Event Highlights */}
                  {event.highlights && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary-900 mb-2">Event Highlights</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Event Gallery */}
                  {event.gallery && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary-900 mb-3">Event Gallery</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {event.gallery.map((image, index) => (
                          <div key={index} className="relative h-20 rounded-lg overflow-hidden">
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
                  
                  {/* Event Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {event.attendees && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{event.attendees}+ Attendees</span>
                      </div>
                    )}
                    <button className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                      View Full Gallery
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center reveal">
            <button className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              View All Events
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats and Testimonials Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 reveal">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">What Our Participants Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read authentic feedback from participants who have experienced our events firsthand.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-primary-900">4.9</span>
                <div>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-900">500+</p>
                <p className="text-sm text-gray-600">Reviews</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button className="px-4 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors">
              All Events
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-primary-50 transition-colors">
              Tech Conference
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-primary-50 transition-colors">
              Workshops
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-primary-50 transition-colors">
              Startup Events
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 reveal">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center reveal">
            <button className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300">
              View All Reviews
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}