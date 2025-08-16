# 🚌 Bus Ticket Booking App - (2025)

## 📝 Introduction 
In 2025, I developed a **Bus Ticket Booking App** to simulate real-world bus ticket booking systems. The goal was to practice working with React, strengthen my Tailwind CSS skills, and implement engaging features like QR tickets and animations.  

## 🛠️ Tech Stack
- **React JS** – for building dynamic UI components  
- **Tailwind CSS** – for responsive layouts and modern styling  
- **JavaScript (ES6)** – for booking logic and interactivity  
- **QR Code Generator** – for ticket confirmations  
- **CSS/JS Animations** – for engaging effects like paper shower  

## 🔨 How I Built It 
1. **UI Design** – Designed a clean, responsive interface using React components and Tailwind’s utility-first styling.  
2. **Seat Selection System** – Implemented real-time seat booking with dynamic state updates and visual feedback.  
3. **Bus Schedules & Types** – Added filtering options for bus types, timings, and availability.  
4. **Booking Confirmation** – Integrated QR code generation for confirmed bookings.  
5. **Animations** – Added interactive effects like animated paper shower and smooth About section transitions.  
6. **Offers Section** – Created a dedicated section to display discounts and deals.

## 🔧 Challenges & Solutions  

- **Challenge: Handling Real-Time Seat Selection**  
  Managing multiple seat states (booked, available, selected) was tricky.  
  ✅ **Solution:** Used React `useState` and conditional rendering to dynamically update seat availability.  

- **Challenge: Responsive UI on Different Devices**  
  The seat map and booking cards didn’t align properly on smaller screens.  
  ✅ **Solution:** Applied Tailwind’s responsive classes (`sm:`, `md:`, `lg:`) to optimize layouts for all screen sizes.  

- **Challenge: QR Code Ticket Generation**  
  Generating unique QR codes for each booking initially caused rendering issues.  
  ✅ **Solution:** Integrated the `qrcode.react` library to generate dynamic QR codes reliably.  

- **Challenge: Adding Animated Paper Shower Effect**  
  The animation caused performance lags on low-end devices.  
  ✅ **Solution:** Optimized animations by reducing particle count and using CSS transitions instead of heavy JS.  

- **Challenge: Managing Offers & Discounts Section**  
  Displaying offers dynamically without cluttering the UI was difficult.  
  ✅ **Solution:** Created a structured card-based layout for offers using Tailwind’s grid system.
  
## 🎯 Outcome
This project improved my ability to build **real-world applications** with React and Tailwind CSS. By integrating QR codes, offers, and interactive animations, I gained hands-on experience in developing **user-friendly, visually engaging booking systems**.  

## 🚀 Live Demo & Repository  
🔗 [Live Demo] : ("https://rs-bus-ticket-booking.netlify.app/")  
💻 [GitHub Repository]: ("https://github.com/sudhar04/Bus-Ticket-Booking-App")  

---
