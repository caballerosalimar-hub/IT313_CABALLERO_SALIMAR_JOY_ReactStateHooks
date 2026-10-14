# IT 313 Laboratory 5: React State & Hooks in Action

## Project Title
Lab Timer & Practice Tracker

## Project Description
This project is a simple mobile application made with React Native and Expo. It helps students track the number of practice problems they solve and monitor their practice time using a stopwatch.

## Features
- Counts solved practice problems.
- Displays "Great job!" when the solved count reaches 5.
- Resets the solved count to zero.
- Starts and pauses the stopwatch.
- Displays the elapsed time in minutes and seconds.
- Resumes the stopwatch from the previous time.
- Uses a custom hook to manage the stopwatch.
- Uses cleanup to stop the timer when paused or when the component is removed.

## Technologies Used
- React Native
- TypeScript
- Expo
- React Hooks (`useState` and `useEffect`)

## Development Approach
The application uses functional components: `LabScreen`, `PracticeTracker`, and `Stopwatch`.

The `LabScreen` component manages the shared state and passes data and event handlers to the other components using props.

The custom `useStopwatch` hook uses `useState` to store the elapsed time and `useEffect` to run the timer every second. The `clearInterval()` cleanup function prevents old timer intervals from continuing when the stopwatch is paused.

## How to Run the App
1. Open the project folder in VS Code.
2. Open the terminal in the project folder.
3. Install the dependencies by running `npm install`.
4. Start Expo by running `npx expo start`.
5. Open Expo Go on your mobile phone.
6. Scan the QR code to open the application.

Make sure your phone and computer are connected to the same Wi-Fi network when using the default connection.

## Author
Salimar Joy A. Caballero

## Course
IT 313 – Mobile Programming
