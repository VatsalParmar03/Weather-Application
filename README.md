WeatherNow
WeatherNow is a simple, responsive weather application for outdoor enthusiasts, enabling users to quickly check the current weather conditions of any city. The app utilizes the Open-Meteo API to fetch real-time weather data, with a focus on clean UI/UX and responsive design, allowing for an optimal experience on both desktop and mobile.

Table of Contents
Features
Technologies Used
Setup and Installation
Usage
API Reference
Contributing
License

Features
Real-Time Weather Data: Fetches and displays current weather conditions, including temperature, humidity, and other relevant metrics.
Responsive Design: Designed to work seamlessly on both desktop and mobile devices.
Error Handling: Handles API errors and displays appropriate user-friendly messages.
User-Friendly Interface: Simple and clean UI/UX, making it easy for users to navigate.

Technologies Used
Frontend: React
API: Open-Meteo API for weather data
Styling: CSS
Hosting: Deployed on StackBlitz (for demo purposes)

To run the project locally, follow these steps:
1. Clone the Repository:
git clone https://github.com/your-username/WeatherNow.git
cd WeatherNow

2. Install Dependencies: Make sure you have Node.js and npm installed, then install dependencies:
npm install

3. API Key Configuration:
This app uses the Open-Meteo API, which doesn’t require an API key.
If you’re using a service that requires one, create a .env file in the root directory and add the following:
REACT_APP_WEATHER_API_KEY=your_api_key_here

4. Start the Development Server:
npm start

5. Usage
Open the app in a web browser.
Enter the name of any city in the search bar.
View the current weather details, including temperature, humidity, and other key information.

6. API Reference
Open-Meteo API: Open-Meteo.
The API provides real-time weather data for cities worldwide.
No API key is required.

7. Contributing
Contributions are welcome! Please open an issue or submit a pull request.

Fork the project.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
