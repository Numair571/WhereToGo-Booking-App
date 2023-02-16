// Images
import Logo from '../assets/images/w2g_logo.png';

// Components
import { UserIcon } from './UserIcon';

export const Navbar = () => {
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
					<UserIcon />
				</div>
			</div>
		</nav>
	);
};
