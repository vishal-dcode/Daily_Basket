# Daily Basket 🛒

A quick and easy-to-use modern UI React app that helps you manage your grocery list. Powered by Firebase, this app allows you to add, view, and delete grocery items from your list effortlessly.

## Features

- 📋 **Add items**: Quickly add grocery items to your list.
- 🔄 **Real-time updates**: Your list syncs automatically with Firebase in real-time.
- ❌ **Delete items**: Remove items from the list with a single click.
- 🌐 **Modern UI**: Clean and responsive user interface.

## Tech Stack

- **React**: Frontend JavaScript library for building the user interface.
- **Firebase**: Real-time database to store and manage your grocery list.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for blazing fast development.

## Installation & Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/daily-basket.git
   ```
2. Navigate to the project directory:
   ```bash
   cd daily-basket
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up your Firebase credentials by creating a .env file in the root of your project and adding your Firebase databaseURL:
   ```bash
   VITE_FIREBASE_DATABASE_URL=https://your-firebase-database-url
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

How to Use
Enter the name of the grocery item in the input field.
Click the "+" button to add the item to your list.
Click on an item to delete it from the list.
