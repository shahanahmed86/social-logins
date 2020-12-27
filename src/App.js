import { OldSocialLogin as SocialLogin } from 'react-social-login';
import firebase from 'firebase';

import './fb.config';

const provider = {
	FacebookProvider: new firebase.auth.FacebookAuthProvider(),
	GoogleProvider: new firebase.auth.GoogleAuthProvider()
};

function App() {
	function handleLogin(user, error, method) {
		console.log({ user, error, method });
		if (error) return;
		provider[method].setCustomParameters({ display: 'popup' });
		firebase
			.auth()
			.signInWithPopup(provider[method])
			.then(() => {
				firebase
					.auth()
					.currentUser.getIdToken(true)
					.then((idToken) => {
						console.log('idToken', idToken);
					})
					.catch(function(error) {
						// Handle error
						console.log({ error });
					});
			})
			.catch(function(error) {
				// Handle error
				console.log({ error });
			});
	}

	return (
		<div>
			<SocialLogin
				provider="facebook"
				appId="398309011389299"
				redirect="http://localhost:3000"
				callback={(user, error) => handleLogin(user, error, 'FacebookProvider')}
			>
				<button>Login with Facebook</button>
			</SocialLogin>
			<SocialLogin
				provider="google"
				appId="945172289053-jpginkmaeujjj9t5qms9ut1p27kg2e43.apps.googleusercontent.com"
				scope="https://www.googleapis.com/auth/cloud-platform.read-only"
				callback={(user, error) => handleLogin(user, error, 'GoogleProvider')}
			>
				<button>Login with Google</button>
			</SocialLogin>
		</div>
	);
}

export default App;
