import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyA4rJ6GROO7GPP5tVCVoHlymOSKe2JGC2c",
//     authDomain: "otp-assignment-8e1a3.firebaseapp.com",
//     projectId: "otp-assignment-8e1a3",
//     storageBucket: "otp-assignment-8e1a3.appspot.com",
//     messagingSenderId: "152804673269",
//     appId: "1:152804673269:web:c85314f7516af3d1eaa7bc",
//     measurementId: "G-VGTG7Z4K8P"
// };
// const firebaseConfig = {
//     apiKey: "AIzaSyDkARftu1l1QQSDPee1e3mHY6UipKyUjGs",
//     authDomain: "finishing-5e69a.firebaseapp.com",
//     projectId: "finishing-5e69a",
//     storageBucket: "finishing-5e69a.appspot.com",
//     messagingSenderId: "487770297857",
//     appId: "1:487770297857:web:3058b3052c18d6927c5200",
//     measurementId: "G-LFBM6LG95Y"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyBpWRssEdPhYJX_NX-3YOTL9-egnIviS-8",
  authDomain: "ass-otp.firebaseapp.com",
  projectId: "ass-otp",
  storageBucket: "ass-otp.appspot.com",
  messagingSenderId: "387708691196",
  appId: "1:387708691196:web:c2b9955d9522a329786d79",
  measurementId: "G-W04B3XKW19"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBVN2ECeznP8jvThqdevsVDsBGHn2fdP4Y",
//   authDomain: "dudhi-testing-sms.firebaseapp.com",
//   projectId: "dudhi-testing-sms",
//   storageBucket: "dudhi-testing-sms.appspot.com",
//   messagingSenderId: "438218657511",
//   appId: "1:438218657511:web:368197bfd44fff7d4b9c42"
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
