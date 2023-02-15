// React Hooks
import { useContext, useEffect, useState } from 'react';

// Components
import { ImagesSlider } from './shared/ImagesSlider';

// Icons
import { BsPinMapFill, BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// Contexts
import { ModalsControllerContext } from './../contexts/ModalsControllerContext';
import { UserContext } from './../contexts/UserContext';

export const HotelCard = ({ hotel, id }) => {
	// State Of Hotel according To User Reservations
	const [alreadyBooked, setAlreadyBooked] = useState(false);

	const { setToggleHotelBookView, setCurrentSelectedHotel } = useContext(ModalsControllerContext);
	const { currentUser, handleCancelBooking } = useContext(UserContext);

	useEffect(() => {
		// Check If the Current Hotel Card is Already Booked by user
		if (currentUser.bookings.some((book) => book.hotel.hotelName === hotel.hotelName)) {
			setAlreadyBooked(true);
		}
	}, [currentUser.bookings, hotel.hotelName]);

	// Fn to convert rate Number To Stars
	const convertToRatingStar = (rate) => {
		return Math.round(rate * 2) / 2;
	};

	// Fn To Reformat Date To DD/MM/YYYY
	const reformatDate = () => {
		const months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
		if (alreadyBooked) {
			const reservationDate = new Date(currentUser.bookings.find((booking) => booking.hotel.hotelName === hotel.hotelName).bookedDate);
			return `${reservationDate?.getDate()} ${months[reservationDate.getMonth()]}  ${reservationDate.getFullYear()}`;
		}
	};
	return (
		<div className='card mb-3 col-lg-5 p-0'>
			<div className='row g-0'>
				<div className='col-md-5 img-fluid rounded-start'>
					{hotel.images.length !== 0 && (
						<ImagesSlider sliderId={`hotel${id}`} imgSrc1={hotel.images[0]} imgSrc2={hotel.images[1]} isAutomated={false} classes=' h-100 ' />
					)}
				</div>
				<div className='col-md-7 pt-3'>
					<div className='card-body p-0'>
						<div className='text-start w-100 mb-2 d-flex align-items-start px-3'>
							{Array(5)
								.fill(0)
								.map((_, index) => {
									if (convertToRatingStar(hotel.hotelRating) >= index + 1) {
										return <BsStarFill className='text-warning' size={20} key={index} />;
									} else if (convertToRatingStar(hotel.hotelRating) - index === 0.5) {
										return <BsStarHalf className='text-warning' size={20} key={index} />;
									} else {
										return <BsStar className='text-warning' size={20} key={index} />;
									}
								})}
							<span className='text-muted ms-1'>{hotel.hotelRating}</span>
						</div>
						<h5 className='card-title text-truncate text-start w-100 px-3' data-bs-toggle='tooltip' title={hotel.hotelName}>
							{hotel.hotelName}
						</h5>
						<p className='card-text text-truncate text-info mt-3 text-start w-100 px-3' data-bs-toggle='tooltip' title={hotel.hotelAdress}>
							<BsPinMapFill className='hotel-location-icon text-danger' />
							<span>{hotel.hotelAdress}</span>
						</p>
						<p className='card-text mb-3 px-3 d-flex justify-content-between align-items-end'>
							<small className='badge text-secondary'>{hotel.price} EGP / Day</small>
							{alreadyBooked ? (
								<button
									type='button'
									className='btn btn-danger btn-sm'
									onClick={() => {
										handleCancelBooking(hotel);
										setAlreadyBooked(false);
									}}>
									Cancel Your Booking
								</button>
							) : (
								<button
									type='button'
									className='btn btn-warning btn-sm'
									onClick={() => {
										setToggleHotelBookView(true);
										setCurrentSelectedHotel(hotel);
									}}>
									Book Now
								</button>
							)}
						</p>
						{alreadyBooked && (
							<div className='card-footer text-muted'>
								Booked at <span> {reformatDate()}</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
