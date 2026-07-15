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

// ---- Password strength check (shared by settings.html and force-password-change.html) ----
const COMMON_PASSWORDS = [
  '12345678','123456789','1234567890','password','password1','password123',
  'qwerty123','qwertyuiop','11111111','00000000','iloveyou','admin123',
  'welcome123','letmein11','abcd1234','abcdefgh','87654321','aastha123',
  'nursing123','student123','12341234','changeme1'
];

function checkPasswordStrength(password) {
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters.' };
  }
  if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
    return { valid: false, message: 'That password is too common — please try something less predictable.' };
  }
  if (password.toLowerCase() === DEFAULT_PASSWORD.toLowerCase()) {
    return { valid: false, message: "You must choose a different password than the default one." };
  }
  return { valid: true, message: '' };
}

// ---- Show/hide password toggle — call this once per page after DOM loads ----
function setupPasswordToggles() {
  document.querySelectorAll('.field-password').forEach(wrap => {
    const input = wrap.querySelector('input');
    const btn = wrap.querySelector('.pw-toggle');
    if (!input || !btn) return;
    btn.addEventListener('click', () => {
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.textContent = show ? 'Hide' : 'Show';
    });
  });
}
