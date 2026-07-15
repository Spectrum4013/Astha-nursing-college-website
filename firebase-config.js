// Firebase project config — the apiKey here is safe to be public.
// Real security comes from Firestore rules (see firestore.rules.txt), not from hiding this.
const firebaseConfig = {
  apiKey: "AIzaSyAztF9vQyz1Z1aRS0_x-4-tTPnVVA0Y1Yo",
  authDomain: "aastha-nursing-website.firebaseapp.com",
  projectId: "aastha-nursing-website",
  storageBucket: "aastha-nursing-website.firebasestorage.app",
  messagingSenderId: "3901350533",
  appId: "1:3901350533:web:0143902deccd73543effec"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ---- Shared constants ----
const ADMIN_EMAIL = "aasthanursingosmanabad@gmail.com";
const STUDENT_EMAIL_DOMAIN = "@aasthanursing.local";
const DEFAULT_PASSWORD = "Aastha@123";

// Roll number (what students type) -> internal pseudo-email (what Firebase needs)
function rollToEmail(roll) {
  return roll.trim() + STUDENT_EMAIL_DOMAIN;
}

// Internal pseudo-email -> roll number, for reading the current user's roll back out
function emailToRoll(email) {
  return email.replace(STUDENT_EMAIL_DOMAIN, "");
}
