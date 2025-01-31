import { create } from 'zustand';
import { mockEvents, mockTestimonials, mockStats } from './mockData';

export const useEventStore = create((set) => ({
  events: mockEvents,
  testimonials: mockTestimonials,
  stats: mockStats,
  selectedDate: undefined,
  setSelectedDate: (date) => set({ selectedDate: date }),
}));