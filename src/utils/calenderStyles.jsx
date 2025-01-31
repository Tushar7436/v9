export const calendarStyles = `

/* Calendar Custom Styles */
.calendar-custom {
  --rdp-accent-color: rgb(var(--color-primary-500));
  --rdp-background-color: rgb(var(--color-primary-50));
  width: 100%;
  margin: 0;
}

.calendar-custom .rdp-months {
  justify-content: center;
}

.calendar-custom .rdp-month {
  width: 100%;
  max-width: none;
}

.calendar-custom .rdp-table {
  width: 100%;
  max-width: none;
}

.calendar-custom .rdp-head_cell {
  font-weight: 600;
  color: rgb(var(--color-primary-900));
  text-transform: uppercase;
  font-size: 0.875rem;
}

.calendar-custom .rdp-cell {
  height: 3rem;
}

.calendar-custom .rdp-day {
  width: 3rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.75rem;
  transition: all 0.2s;
}

.calendar-custom .rdp-day:hover {
  background-color: rgb(var(--color-primary-100));
}

.calendar-custom .rdp-day_selected {
  background-color: rgb(var(--color-primary-500)) !important;
  color: white !important;
  font-weight: bold;
}

.calendar-custom .rdp-day_selected:hover {
  background-color: rgb(var(--color-primary-600)) !important;
}

.calendar-custom .rdp-day_outside {
  opacity: 0.5;
}

.calendar-custom .rdp-nav {
  padding: 0.5rem;
}

.calendar-custom .rdp-nav_button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background-color: rgb(var(--color-primary-50));
  color: rgb(var(--color-primary-700));
  transition: all 0.2s;
}

.calendar-custom .rdp-nav_button:hover {
  background-color: rgb(var(--color-primary-100));
  color: rgb(var(--color-primary-900));
}

.calendar-custom .rdp-caption {
  padding: 0.75rem;
}

.calendar-custom .rdp-caption_label {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--color-primary-900));
  text-transform: capitalize;
}

/* Event Dot Indicators */
.event-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgb(var(--color-primary-500));
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
}

/* Event Preview Tooltip */
.event-preview {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 0.75rem;
  width: max-content;
  max-width: 300px;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
}

.calendar-custom .rdp-day:hover .event-preview {
  opacity: 1;
  visibility: visible;
}
`;
