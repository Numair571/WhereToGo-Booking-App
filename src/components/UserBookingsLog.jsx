// BootStrap Component
import Modal from 'react-bootstrap/Modal';

// React Hooks
import { useState, useContext, useEffect } from 'react';

// Contexts
import { UserContext } from '../contexts/UserContext';
import { ModalsControllerContext } from './../contexts/ModalsControllerContext';

export const UserBookingsLog = () => {
	const [userBookingsList, setUserBookingList] = useState([]);

	const { currentUser } = useContext(UserContext);
	const { toggleUserBookingsView, setToggleUserBookingsView } = useContext(ModalsControllerContext);

	// Fn To Reformat Date To DD/MM/YYYY
	const reformatDate = (bookedDate) => {
		const months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
		const reservationDate = new Date(bookedDate);
		return `${reservationDate?.getDate()} ${months[reservationDate.getMonth()]} ${reservationDate.getFullYear()}`;
	};

	useEffect(() => {
		setUserBookingList(currentUser.bookings);
	}, [currentUser.bookings]);

	return (
		<>
			<Modal show={toggleUserBookingsView} fullscreen={true} onHide={() => setToggleUserBookingsView(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{currentUser.userName}, bookings details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<table className='table'>
						<thead className='table-light'>
							<tr>
								<th scope='col'>No.</th>
								<th scope='col'>Booking Name</th>
								<th scope='col'>Hotel Name</th>
								<th scope='col'>Booking Date</th>
								<th scope='col'>Booking ID</th>
							</tr>
						</thead>

						<tbody>
							{userBookingsList?.map((booking, i) => {
								return (
									<tr key={booking.bookingId}>
										<th scope='row'>{i + 1}</th>
										<td className='text-truncate' title={booking.bookedBy.userName}>
											{booking.bookedBy.userName}
										</td>
										<td className='text-truncate' title={booking.hotel.hotelName}>
											{booking.hotel.hotelName}
										</td>
										<td className='text-truncate' title={reformatDate(booking.bookedDate)}>
											{reformatDate(booking.bookedDate)}
										</td>
										<td className='text-truncate' title={booking.bookingId}>
											{booking.bookingId}
										</td>
									</tr>
								);
							})}
							{userBookingsList?.length === 0 && (
								<tr>
									<td colSpan='5'>
										<h2 className='text-center fw-bold text-muted my-5 w-100'>There are No Bookings Yet!</h2>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</Modal.Body>
			</Modal>
		</>
	);
};
