# EchoMart - E-commerce Web Application

## **Project Overview**

**EchoMart** is a modern, fully functional e-commerce web application designed to provide users with a seamless shopping experience. The platform allows users to browse products, manage their cart, calculate the distance between the user and the product's location, and place orders. With real-time updates powered by **Firebase** and dynamic interaction features, **EchoMart** offers a responsive and intuitive interface, built with **React** and **Material UI**. 

### **Core Features**
- **Product Browsing & Detailed View**: Users can browse through a wide variety of products, each with detailed descriptions, prices, and images. Products can be easily added to the cart or wishlist for later purchase.
- **Cart Management**: Users can add/remove products, adjust quantities, and view the total price in real-time.
- **Wishlist Management**: Users can add products to a wishlist to keep track of items for future purchase.
- **Geolocation Integration**: The application uses the **Geolocation API** to calculate and display the distance from the user’s location to the product’s location, using the **Haversine Formula**.
- **Real-Time Updates**: Integrated with **Firebase Firestore**, real-time data synchronization ensures that product details, cart contents, and user actions are updated across different sessions.
- **User Notifications**: A notification system informs users of successful or failed actions, such as adding/removing items from the cart.

## **Technologies Used**

### **Frontend:**
- **React.js**: For building the user interface with components and state management.
- **Material UI**: A robust design system that provides a polished, responsive layout with pre-built components.

### **Backend:**
- **Firebase Firestore**: A cloud-based NoSQL database used for real-time data storage and management.
- **Firebase Authentication**: Handles user authentication securely.
- **Firebase Functions**: For managing server-side logic like data processing.

### **Geolocation & Distance Calculation:**
- **HTML5 Geolocation API**: Retrieves the user's current location (latitude and longitude).
- **Haversine Formula**: Used to calculate the shortest distance between the user's location and the product's location on Earth.

### **State Management:**
- **React Hooks**: `useState`, `useEffect` for managing dynamic data and side effects.
- **useContext**: Provides global state management for shared data like cart contents and user session status.

## **Approach & Algorithms**

### **1. State Management with React**
- **`useState` & `useEffect`**: These React hooks are used to manage dynamic data such as product listings, cart contents, and user geolocation, ensuring that the app responds to changes in real-time.
- **`useContext`**: Provides a global state for shared data like the cart, enabling consistent updates across multiple components.

### **2. Geolocation API**
- **`navigator.geolocation.getCurrentPosition`**: Fetches the user's current location (latitude and longitude), which is then used to calculate the distance between the user and the product.
- **Haversine Formula**: This formula is implemented to calculate the great-circle distance between the user's and the product’s location. It takes into account the curvature of the Earth, ensuring an accurate distance calculation.

### **3. Firebase Integration**
- **Firestore**: Manages real-time data, including:
  - **User Profiles**: Stores user-specific data such as cart, wishlist, and order history.
  - **Products**: Stores product data including descriptions, prices, and images.
  - **Cart & Wishlist**: Stores user-specific cart and wishlist data.
- **Firestore Functions**: Operations such as **setDoc**, **getDoc**, **updateDoc**, and **deleteDoc** are used to add, retrieve, update, and delete data from the database.

### **4. Distance Calculation (Haversine Formula)**
- **Distance Formula**: The **Haversine formula** calculates the distance between two points on the Earth’s surface, given their latitude and longitude. This formula is essential for providing an accurate calculation of the distance from the user’s location to the product's location.

### **5. User Interaction & Real-Time Updates**
- **Real-Time Cart Updates**: As users add or remove products from the cart, the application dynamically updates the cart's content, showing the correct quantities and prices. These updates are reflected immediately, thanks to Firebase's real-time data capabilities.
- **Product Details**: Clicking on a product will display a detailed view with product images, price, and description. Users can add items to the cart or wishlist directly from the product page.

## **Test Procedures**

### **Test Case 1: Product Browsing**
- **Objective**: Test the accuracy of product data displayed to users.
  - Verify that products are loaded from Firebase and displayed correctly on the UI.
  - Ensure product details (name, price, description, and image) are accurate.

### **Test Case 2: Cart Management**
- **Objective**: Ensure the cart functionality works seamlessly.
  - Test adding/removing products from the cart.
  - Verify that the cart updates in real-time with the correct quantity and total price.

### **Test Case 3: Geolocation Feature**
- **Objective**: Ensure the geolocation feature calculates the distance correctly.
  - Test if the user's current location is accurately captured using `navigator.geolocation.getCurrentPosition`.
  - Verify if the distance to the product’s location is calculated correctly using the **Haversine Formula**.

### **Test Case 4: Wishlist Management**
- **Objective**: Ensure wishlist management is functional.
  - Test adding/removing products to/from the wishlist.
  - Verify if wishlist data is correctly stored and updated in Firebase.

### **Test Case 5: User Notifications**
- **Objective**: Test the notification system.
  - Verify that users receive notifications upon successful actions (e.g., adding/removing items from the cart).
  - Ensure error messages are displayed when an action fails.

**EchoMart** demonstrates the seamless integration of modern web technologies like **React.js**, **Firebase**, and **Geolocation** to create a robust e-commerce platform. Key features such as dynamic cart management, real-time product updates, geolocation-based distance calculations, and an intuitive UI make it an exceptional user experience. The application is scalable, secure, and efficient, making it an ideal solution for online shopping platforms.

This project provides valuable insights into working with **Firebase** for real-time data management, integrating geolocation features, and building a responsive e-commerce platform with **React.js**.

## **How to Run the Project Locally**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/EchoMart.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd EchoMart
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up Firebase**:
    - Create a Firebase project in the **Firebase Console**.
    - Set up Firestore and Authentication.
    - Copy your Firebase config keys into a `.env` file in the root directory of the project.

5. **Run the development server**:
    ```bash
    npm start
    ```


