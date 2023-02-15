// React Hooks
import { useContext } from 'react';

// Images
import Logo from '../assets/images/w2g_logo.png';

// Contexts
import { UserContext } from './../contexts/UserContext';

export const Navbar = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<nav className='mainBg navbar navbar-expand navbar-light'>
			<div className='container'>
				<a href='#home' className='navbar-brand'>
					<div className='w-25'>
						<img src={Logo} alt='W2G Logo' className='w-50' />
					</div>
				</a>
				<button type='button' aria-label='Toggle navigation' className='navbar-toggler collapsed'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='justify-content-end navbar-collapse collapse'>
					<span className='navbar-text'>
						Signed in as: <a href='#login'>{currentUser.userName}</a>
					</span>
				</div>
			</div>
		</nav>
	);
};
