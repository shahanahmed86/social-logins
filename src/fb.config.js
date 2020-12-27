import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyBlQ9i8ROOzBzAdjpKa2QUrIBKSxYPuYS4',
	authDomain: 'go-carts.firebaseapp.com',
	databaseURL: 'https://go-carts-default-rtdb.firebaseio.com',
	projectId: 'go-carts',
	storageBucket: 'go-carts.appspot.com',
	messagingSenderId: '945172289053',
	appId: '1:945172289053:web:a15a2d368a68bf634418f4',
	measurementId: 'G-CKER6TL3TG'
};

firebase.initializeApp(config);
firebase.analytics();
