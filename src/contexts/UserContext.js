import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	const [userBookingData, setUserBookingData] = useState([]);

	useEffect(() => {
		// LoggedUser Should Be Fetched in Case we have Database
		const loggedUser = { userName: 'Mohammed Nasif', email: 'm.khaled100@ymail.com', phoneNumber: '+20 109 0292 306', bookings: [] };
		setCurrentUser(loggedUser);

		return () => {
			setCurrentUser({});
		};
	}, []);

	useEffect(() => {
		console.log(currentUser);
	}, [currentUser]);

	useEffect(() => {
		// Update Current User Data After Update The Bookings [Should Be Posted To Database]
		setCurrentUser((prev) => {
			return { ...prev, bookings: userBookingData };
		});
	}, [userBookingData]);

	// Fn To Handle The Cancelation of Prev. Booking
	const handleCancelBooking = (cancledHotel) => {
		setUserBookingData((prev) => {
			return prev.filter((booking) => booking.hotel.hotelName !== cancledHotel.hotelName);
		});
	};

	return <UserContext.Provider value={{ currentUser, setUserBookingData, userBookingData, handleCancelBooking }}>{children}</UserContext.Provider>;
};
