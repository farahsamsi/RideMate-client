# RideMate

## Project Overview

The RideMate is a feature-rich, user-centric platform designed to facilitate seamless car bookings, user authentication, and efficient car inventory management. It provides a responsive and user-friendly interface for customers to rent cars effortlessly while ensuring secure and efficient backend operations.

## Live URL

[Deployed Website](https://ride-mate.netlify.app) https://ride-mate.netlify.app or https://ridemate-5d791.web.app

## Server Side Repository Link

[Deployed Website](https://github.com/farahsamsi/RideMate-server) https://github.com/farahsamsi/RideMate-server

## Purpose

To revolutionize car rentals through a modern, user-friendly platform that leverages advanced technologies for secure, efficient, and enjoyable user experiences.

---

## Key Features

### General Features

- **Responsive Design:** Fully functional across mobile, tablet, and desktop.
- **Environment Variables:** Firebase configuration keys and MongoDB credentials secured using environment variables.
- **Real-Time Updates:** Availability and booking statuses updated in real-time.
- **User-Friendly UI:** Pleasing color contrasts, proper alignment, and clutter-free design.

### Pages and Functionalities

#### **Add Car Page** (Private)

- Form fields for:
  - Car Model, Daily Rental Price, Availability, Features, Description, etc.
- Saves user details and defaults `bookingCount` to 0.
- Notifies users upon successful addition.

#### **My Cars Page** (Private)

- Tabular format displaying cars added by the user.
- Actions:
  - **Update Button**: Opens a modal for editing car details.
  - **Delete Button**: Confirmation modal before deletion.
  - **Sorting Options**: Sort by Date Added or Price.
- Prompts users to add cars if the list is empty.

#### **Available Cars Page**

- Search functionality based on car model or location.
- Toggle between grid and list views.
- Sorting options for Date Added and Price.
- "See Details" button redirects to car details.

#### **Car Details Page**

- Detailed car information:
  - Model, Price Per Day, Availability, Features, Images, Description.
- "Book Now" button opens a confirmation modal.

#### **Login and Registration**

- **Login Page:**
  - Firebase Email/Password and Google Authentication.
  - Redirects to homepage upon success.
- **Registration Page:**
  - Fields: Name, Email, Password, Photo URL.
  - Validates inputs and redirects to home page upon success.

#### **My Bookings Page** (Private)

- **Table Layout:**
  - Displays car image, model, booking date, total price, booking status.
- **Actions:**
  - **Cancel Booking**: Updates status and reflects in the table.
  - **Modify Booking Date**: Allows users to pick new start and end dates.
- **Data Visualization:**
  - Charts for daily rental price analysis using `recharts`.

#### **Error Page**

- A 404 page with gif and a "Back to Home" button.

---

## Core Technologies

### Frontend

- HTML, CSS, JavaScript
- React.js (with React Router for navigation)
- Tailwind CSS (for responsive and modern design)

### Backend

- Node.js, Express.js (for API development)
- MongoDB (as the database)

### Authentication

- Firebase Authentication (Email/Password and Google Login)

### Deployment

- Deployed server side in Vercel.
- Deployed client side in Netlify .
- Frontend and backend both deployed to ensure smooth navigation.

---

## NPM Packages Used

- **Frontend**:
  - `react`
  - `react-router-dom`
  - `tailwindcss`
  - `daisyUI`
  - `swiper`
  - `sweetalert2`
  - `react-toastify`
  - `react-rating-stars-component`
  - `react-icons`
  - `lottie-react`
  - `firebase`
- **Backend**:
  - `express`
  - `mongodb`
  - `jsonwebtoken`
  - `dotenv`
  - `cors`

---

## Additional Features

- **Real-Time Booking Count Updates:** MongoDB operators like `$inc` to track bookings.
- **Animations:** Enhance user experience with hover and scroll animations.

---

## Installation and Setup

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/farahsamsi/RideMate-client.git
    ```

2.  **Navigate to the Project Directory:**

    ```bash
    cd RideMate-client
    ```

3.  **Install Dependencies:**

    - Client:
      ```bash
      npm install
      ```

4.  **Set Environment Variables:**

    - Create a `.env` file in `client` directories.
    - Add the following variables: - For the client:

      ```env
      VITE_API_URL=your_backend_api_url
      VITE_FIREBASE_API_KEY=your_firebase_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
      VITE_FIREBASE_PROJECT_ID=your_project_id
      VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
      VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
      VITE_FIREBASE_APP_ID=your_app_id
      ```

5.  **Run the Application:**

    - Start the client:
      ```bash
      npm run dev
      ```

---

## Contact Information

For any issues or inquiries, please contact the developer.
