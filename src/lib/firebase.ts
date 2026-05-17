import { getAnalytics, isSupported } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

function env(name: string, fallback: string) {
  return process.env[name] || fallback;
}

const firebaseConfig = {
  apiKey: env("NEXT_PUBLIC_FIREBASE_API_KEY", "missing-firebase-api-key"),
  authDomain: env("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", "missing.firebaseapp.com"),
  projectId: env("NEXT_PUBLIC_FIREBASE_PROJECT_ID", "missing-project-id"),
  messagingSenderId: env("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID", "000000000000"),
  appId: env("NEXT_PUBLIC_FIREBASE_APP_ID", "1:000000000000:web:missing"),
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp, env("NEXT_PUBLIC_FIREBASE_FIRESTORE_DATABASE_ID", "(default)"));

export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") {
    return null;
  }

  const supported = await isSupported();
  return supported ? getAnalytics(firebaseApp) : null;
}
