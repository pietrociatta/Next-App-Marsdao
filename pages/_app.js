import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
import Header from "../components/Header";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBabijjdLD4c9_KcvVcR0OrzcTszKRA9SM",
  authDomain: "mars-dao.firebaseapp.com",
  projectId: "mars-dao",
  storageBucket: "mars-dao.appspot.com",
  messagingSenderId: "427532319615",
  appId: "1:427532319615:web:0c8c6bb8fd230f95f7384a",
  measurementId: "G-1TG45GDLPM",
};

let analytics;
let db;

if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  db = getFirestore(app);
}

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://u523xnt4tdsw.usemoralis.com:2053/server"
      appId="wAf1jovgfwudwTz9zP2BIvOoZXxP9bA541QeeHLk"
    >
      <div className="">
        <Header />
      </div>

      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
export { analytics, db };
