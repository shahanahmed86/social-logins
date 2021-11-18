import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCXOG8kZttJqeABEKh5yr8aDgInRsTrCsM',
	authDomain: 'khabri-app.firebaseapp.com',
	projectId: 'khabri-app',
	storageBucket: 'khabri-app.appspot.com',
	messagingSenderId: '950194342213',
	appId: '1:950194342213:web:890d5caf4246df11e1562c',
	measurementId: 'G-DJBG63BMS2',
};

firebase.initializeApp(config);
firebase.analytics();
