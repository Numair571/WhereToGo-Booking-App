// React Hooks and Fn
import { createContext, useState } from 'react';

export const ModalsControllerContext = createContext();

export const ModalsControllerContextProvider = ({ children }) => {
	// State To Toggle The Show/UnShow of User Booking List
	const [toggleUserBookingsView, setToggleUserBookingsView] = useState(false);

	// State To Toggle The Show/UnShow of Hotel Booking Form
	const [toggleHotelBookView, setToggleHotelBookView] = useState(false);

	// State To Check If User Confirmed His Booking [For Optimistic Rendring Of Hotel Card In Case We Have Real API]
	const [bookingConfirmed, setBookingConfirmed] = useState(false);

	// State To Hold The Hotel Selected By The User [Took It As Reffrence]
	const [currentSelectedHotel, setCurrentSelectedHotel] = useState({});

	return (
		<ModalsControllerContext.Provider
			value={{
				toggleUserBookingsView,
				setToggleUserBookingsView,
				toggleHotelBookView,
				setToggleHotelBookView,
				currentSelectedHotel,
				setCurrentSelectedHotel,
				bookingConfirmed,
				setBookingConfirmed,
			}}>
			{children}
		</ModalsControllerContext.Provider>
	);
};
