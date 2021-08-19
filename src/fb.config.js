import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAt5kCiPCi8QKpLU3G-krvgaGTNrThDUWA',
	authDomain: 'accounts-320913.firebaseapp.com',
	projectId: 'accounts-320913',
	storageBucket: 'accounts-320913.appspot.com',
	messagingSenderId: '904957106082',
	appId: '1:904957106082:web:9e6b8908a71ee9fcbd04fb'
};

firebase.initializeApp(config);
firebase.analytics();
