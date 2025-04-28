# Event Management System

## Overview

The **Event Management System** allows users to easily browse, create, and register for events such as concerts, corporate events, and sports activities. This is a front-end project built using **HTML**, **CSS**, and **JavaScript**. The system includes basic functionality such as event creation, event registration, and user authentication. Firebase will be integrated later to handle backend data storage and real-time event management.

---

## Features

### 1. **Event Creation**
   - Organizers can create new events by filling out a form with the following details:
     - Event name
     - Event type (e.g., concert, corporate, sports)
     - Event description
     - Date and time
     - Location
     - Image (optional)
     - Pricing (free or paid)
   - The form validates that all required fields are filled before submitting.

### 2. **Event Listings**
   - Users can view a list of all available events, displayed as cards with essential details such as:
     - Event title
     - Type
     - Date and location
   - Users can filter and search for events by type, location, or date.

### 3. **Event Registration**
   - Users can click on an event to view its detailed information.
   - A registration form allows users to sign up for the event (name and email required).
   - Upon registration, users will receive a confirmation message.

### 4. **User Authentication**
   - Basic login and registration functionality is included (using form validation).
   - The system uses `sessionStorage` or `localStorage` to simulate a login session.
   - A user can create an account and log in to manage their events and registrations.

### 5. **Responsive Design**
   - The system is designed to be fully responsive, supporting mobile, tablet, and desktop views.
   - The layout adapts to different screen sizes using **Flexbox** and **CSS Grid**.
   - Hover effects, transitions, and modern typography enhance the user experience.

---

## Tech Stack

- **HTML**: The structure of the event management system.
- **CSS**: Styling using modern CSS techniques, including Flexbox and Grid for responsive layouts.
- **JavaScript**: Handles front-end interactivity, such as form validation, event registration, and navigation.
- **Firebase** (Future Integration): Will be used for back-end storage, user authentication, and real-time updates.

---

## Folder Structure

event-management-system/ ├── index.html # Home Page (lists events) ├── create-event.html # Create Event Page (form for event creation) ├── my-events.html # User's Events Page (list of events created by user) ├── event-detail.html # Event Detail Page (view details and register) ├── login.html # Login Page (login form) ├── register.html # Registration Page (register form) │ ├── assets/ # Folder containing images and static assets │ ├── event1.jpg # Example event image │ ├── event2.jpg # Another event image │ └── logo.png # Logo │ ├── css/ # Folder for CSS stylesheets │ └── styles.css # Main stylesheet for styling the system │ ├── js/ # Folder for JavaScript files │ └── script.js # JavaScript for handling form validation and interactions │ └── README.md # Project overview and setup instructions


---

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/event-management-system.git
    cd event-management-system
    ```

2. **Open the project**:
    - Open `index.html` in your browser to view the project.
    - The pages should be fully responsive and interactive.
  
3. **Technologies Used**:
    - **HTML**: Provides the structure for all pages.
    - **CSS**: Styled using **Flexbox** for layouts and modern UI/UX principles.
    - **JavaScript**: Handles front-end interactivity like form validation, event registration, and data management.
  
4. **Firebase Integration** (Coming soon):
    - Firebase will be used for the following backend functionality:
      - **Event Data**: Store and retrieve events dynamically using Firebase Firestore.
      - **User Authentication**: Use Firebase Authentication to manage user sign-ups and logins.
      - **Real-Time Data**: Utilize Firebase Realtime Database to display and manage events in real-time.
      - **User Event Management**: Track which users have registered for which events.

---

## Future Enhancements

1. **Firebase Backend Integration**:
   - **Event Data**: Store and retrieve events dynamically using Firebase Firestore.
   - **User Registration/Login**: Replace localStorage with Firebase Authentication for secure sign-ins.
   - **Event Registration**: Users can register for events, and the data will be stored in Firebase.
   - **Real-time Updates**: Event details and user registrations will be updated in real-time using Firebase Realtime Database.

2. **Event Filtering**:
   - Implement more advanced filtering and search features using Firebase queries to search by location, type, and date.

3. **Admin Dashboard**:
   - Build an admin panel for event organizers to manage their events more efficiently.

4. **Payment Integration**:
   - Integrate a payment gateway for paid events (e.g., Stripe or PayPal).

5. **Mobile App**:
   - Build a companion mobile app using **React Native** or **Flutter** that communicates with the Firebase backend.

---

## License

This project is licensed under the **MIT License**.

---

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request. We welcome suggestions and improvements!

---
