import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from './config';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const config = getConfig();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain={'dev-fyvsioohfbyldx01.us.auth0.com'}
			clientId={'YFGQ5FxLgjS7MGN9lJLVD0J5ePWl03Nw'}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
			useRefreshTokens={true}
			cacheLocation="localstorage"
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
