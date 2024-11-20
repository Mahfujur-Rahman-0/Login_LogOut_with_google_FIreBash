// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDnxU36-IQ1aUR1eMkCZTrMms206Bp7riI",
	authDomain: "guestbook-c1e27.firebaseapp.com",
	projectId: "guestbook-c1e27",
	storageBucket: "guestbook-c1e27.firebasestorage.app",
	messagingSenderId: "274068227728",
	appId: "1:274068227728:web:bdb943cfc6b2e0d4e1ba15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const registerWithEmailAndPassword = async (email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		return user;
	} catch (errr) {
		throw error;
	}
};
const logInwithEmailPass = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password);
		return response;
	} catch (errr) {
		throw error;
	}
};
const sendresetPass = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
	} catch (error) {
		throw error;
	}
};
const signinWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleAuthProvider);
		const user = res.user;
		return user;
	} catch (error) {
		throw error;
	}
};
export {
	registerWithEmailAndPassword,
	logInwithEmailPass,
	auth,
	sendresetPass,
	signinWithGoogle,
};
