import { createContext, useState } from 'react';

export const ModalsControllerContext = createContext();

export const ModalsControllerContextProvider = ({ children }) => {
	const [toggleUserBookingsView, setToggleUserBookingsView] = useState(false);
	const [toggleHotelBookView, setToggleHotelBookView] = useState(false);
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
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
