# Overview
This is a modern, responsive IP Address Tracker application built with React, TypeScript, Leaflet, and the IPify Geolocation API. It allows users to search for any IP address or domain and instantly view key information (IP, location, timezone, ISP) along with an interactive map showing the exact location.

# Features

- Instant IP Lookup on Load – Displays the user's own IP address and location immediately on page load.

- Search Any IP or Domain – Full support for IPv4, IPv6 addresses, and domain names (e.g., google.com, facebook.com).

- Accurate Geolocation Data – Shows:
   - IP Address
   - Location (City, Region, Postcode, Country)
   - Timezone (UTC offset)
   - ISP

- Interactive Map – Powered by Leaflet + OpenStreetMap, with a marker and popup showing the city name.
- Pixel-Perfect Design – Matches the Frontend Mentor design exactly on both desktop and mobile.
- Fully Responsive – Beautiful layout on all screen sizes, including stacked info card on mobile.
- Dark / Light Theme Toggle – Smooth, modern green toggle switch with:
    - System preference detection
    - Preference saved in localStorage
    - Full dark mode styling (background, cards, inputs, text)

- Error Handling – Clear, styled error messages for invalid inputs or API issues.
- Loading State – Clean loading indicator during API requests.

# IP Address Tracker
Live Demo: (https://ipdomainaddress-tracker.netlify.app/)

# Reflection

This project was an excellent opportunity to practice several key frontend skills:

1. API Integration – Learned how to properly handle async requests, loading states, and error boundaries.
2. Complex Layout Challenges – Mastering negative margins, z-index, and flexbox to achieve the overlapping info card on the map.
3. Mobile Responsiveness – Deepened understanding of media queries, viewport units, and Leaflet resize issues on mobile.
4. State Management – Used React Context effectively for global theme state without overkill libraries.
5. TypeScript – Gained confidence in typing API responses, props, and context.
6. Advanced Styling – Practiced creating a custom toggle switch, dark mode theming, and smooth transitions.

The biggest challenge was making the map fully visible and scrollable on mobile while maintaining the overlapping card design and solved through careful height management and Leaflet resize handling.


