// React Hooks
import { useContext } from 'react';

// Contexts
import { ModalsControllerContext } from '../contexts/ModalsControllerContext';
import { UserContext } from './../contexts/UserContext';

export const UserIcon = () => {
	const { currentUser } = useContext(UserContext);
	const { setToggleUserBookingsView } = useContext(ModalsControllerContext);

	return (
		<div className='nav-item dropdown'>
			<div className='nav-link dropdown-toggle' data-bs-toggle='dropdown' role='button' aria-expanded='false'>
				{currentUser.userName}
			</div>
			<ul className='dropdown-menu' style={{ minWidth: 'fit-content' }}>
				<li>
					<a
						className='dropdown-item'
						href='#bookingsList'
						onClick={() => {
							setToggleUserBookingsView(true);
						}}>
						Bookings list
					</a>
				</li>
			</ul>
		</div>
	);
};
