import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// App Main Component
import App from './App';

// Contexts Providers
import { UserContextProvider } from './contexts/UserContext';
import { ModalsControllerContextProvider } from './contexts/ModalsControllerContext';

// CSS Styles
import './index.css';

// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ModalsControllerContextProvider>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</ModalsControllerContextProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
