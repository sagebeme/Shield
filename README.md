# Shield
## All Shield Projects

# Event Management System

This repository contains the source code for an event management system with multiple components, including a landing page, event creation interface, event management dashboard, and more. The files are organized into different subdirectories, each serving a unique role within the project.

## Project Structure

The project is divided into several directories, each containing HTML, CSS, JavaScript, and other necessary files for the respective features. Below is a breakdown of the project structure:

```
shield/projects/
├── events
│   ├── Event
│   │   ├── create-event.html        # Event creation page
│   │   ├── css
│   │   │   ├── landing.css         # Styles for landing page
│   │   │   └── style.css           # General styles for the event creation page
│   │   ├── firebase                # Firebase configuration and setup
│   │   ├── index.html              # Landing page
│   │   └── js
│   │       ├── landing.js          # JavaScript for landing page interactions
│   │       └── script.js           # General JavaScript for event creation
│   ├── event-management-system
│   │   ├── create-event.html       # Event creation page within the management system
│   │   ├── css
│   │   │   └── styles.css          # Styles for event management system pages
│   │   ├── event-detail.html       # Event details page
│   │   ├── index.html              # Dashboard for event management system
│   │   ├── js
│   │   │   └── script.js           # JavaScript for event management system
│   │   ├── login.html              # User login page
│   │   ├── my-events.html          # User's events management page
│   │   ├── README.md               # README for the event management system section
│   │   └── register.html           # User registration page
│   ├── index.html                  # Overview of events
│   ├── README.md                   # Main README for the events directory
│   └── styles.css                  # General styles for the events page
├── index.html                      # Main entry point for the application
├── README.md                       # Main project README
└── styles.css                      # Global styles for the project
```

## Overview

### Event Creation (`/events/Event`)
- **Purpose**: Allows users to create events and manage them via a simple interface.
- **Key Files**:
  - `create-event.html`: Interface for creating a new event.
  - `landing.html`: Landing page of the event creation section.
  - JavaScript files (`landing.js`, `script.js`): Handle front-end functionality and interactions for the event creation process.
  - Firebase configuration files for handling back-end event data storage.

### Event Management System (`/events/event-management-system`)
- **Purpose**: Provides a complete dashboard for users to manage their events.
- **Key Files**:
  - `create-event.html`: Page for creating new events within the management system.
  - `event-detail.html`: Page to view the details of a particular event.
  - `index.html`: Dashboard overview of events.
  - `login.html` & `register.html`: Pages for user authentication.
  - `my-events.html`: User-specific event management page.
  - JavaScript files (`script.js`): Handle front-end logic for the event management system.

### Global Files
- **`index.html`**: Main entry page of the application.
- **`styles.css`**: General stylesheet used across the project.
  
## How to Use

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/event-management-system.git
   ```

2. Open the `index.html` file in your browser to access the main page of the project.

3. Explore different sections like the event creation page, the event management system, and the landing page to see the various functionalities.

4. Customize and extend the project as needed for your specific use case.

## Firebase Setup

If you wish to integrate Firebase for event data storage, you will need to configure your Firebase settings by adding your Firebase credentials in the `firebase` directory. Ensure that the necessary Firebase SDKs are included in your project.

## Contributing

Feel free to fork the repository and submit pull requests if you would like to contribute to the project. Make sure to follow the standard development practices and ensure the code is well-tested.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
