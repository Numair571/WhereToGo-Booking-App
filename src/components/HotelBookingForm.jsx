// BootStrap Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// React Hooks
import { useContext, useState } from 'react';

// Contexts
import { ModalsControllerContext } from '../contexts/ModalsControllerContext';
import { UserContext } from '../contexts/UserContext';

// Utilis
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';

export const HotelBookingForm = () => {

	// States To Handle The Validation of Form Inputs [On Get Dirty]
	const [emailTouched, setEmailTouched] = useState(false);
	const [nameTouched, setNameTouched] = useState(false);
	const [phoneTouched, setPhoneTouched] = useState(false);

	const { toggleHotelBookView, setToggleHotelBookView, currentSelectedHotel, setBookingConfirmed } = useContext(ModalsControllerContext);
	const { currentUser, setUserBookingData, userBookingData } = useContext(UserContext);

	// React-Hook-Form Fn
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		shouldFocusError: true,
	});

	// Fn Handler To Close The Modal
	const handleCloseBookModal = () => setToggleHotelBookView(false);

	// Fn To Handle All User Data for Booking on Confirmation
	const handleConfirmBooking = (userData) => {
		const bookingId = uuid(); // Create Random ID for Booking

		const currentBooking = { bookingId: bookingId, bookedBy: userData, bookedDate: new Date(), hotel: currentSelectedHotel };
		const currentBookedHotels = JSON.parse(JSON.stringify(userBookingData)); // Copy From User Previous Bookings

		// Add The Current Book To User Bookings
		currentBookedHotels.push(currentBooking);
		setUserBookingData(currentBookedHotels);

		// Close The Form Modal and Show The Confirmation Message
		setToggleHotelBookView(false);
		setBookingConfirmed(true);
	};

	return (
		<Modal show={toggleHotelBookView} onHide={handleCloseBookModal} fullscreen={'md-down'}>
			<Modal.Header closeButton>
				<Modal.Title>Please enter booking data</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					{/* Username */}
					<Form.Group className='mb-3' controlId='userName'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							placeholder={currentUser.userName}
							defaultValue={currentUser.userName}
							autoFocus
							{...register('userName', {
								required: true,
								maxLength: 20,
								onChange: (e) => {
									if (e.target.value.trim() !== '') {
										setNameTouched(false);
									}
								},
								onBlur: (e) => {
									if (e.target.value.trim() === '') {
										setNameTouched(true);
									} else {
										setNameTouched(false);
									}
								},
							})}
						/>
						{nameTouched && errors?.name?.type !== 'required' && <p className='font-weight text-danger mt-1 mb-0'>Name is required</p>}
						{errors?.name?.type === 'required' && <p className='font-weight text-danger mt-1 mb-0'>Name is required</p>}
						{errors?.name?.type === 'maxLength' && <p className='font-weight text-danger mt-1 mb-0'>Name must contain maximum 20 letters</p>}
					</Form.Group>

					{/* Email */}
					<Form.Group className='mb-3' controlId='userEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							placeholder={currentUser.email}
							defaultValue={currentUser.email}
							{...register('email', {
								required: true,
								pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
								onChange: (e) => {
									if (e.target.value.trim() !== '') {
										setEmailTouched(false);
									}
								},
								onBlur: (e) => {
									if (e.target.value.trim() === '') {
										setEmailTouched(true);
									} else {
										setEmailTouched(false);
									}
								},
							})}
						/>
						{emailTouched && errors?.email?.type !== 'required' && <p className='font-weight text-danger mt-1 mb-0'>Email is required</p>}
						{errors?.email?.type === 'required' && <p className='font-weight text-danger mt-1 mb-0'>Email is required</p>}
						{errors?.email?.type === 'pattern' && <p className='font-weight text-danger mt-1 mb-0'>Email enter a valid email</p>}
					</Form.Group>

					{/* Phone Number */}
					<Form.Group className='mb-3' controlId='userPhone'>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type='text'
							placeholder={currentUser.phoneNumber}
							defaultValue={currentUser.phoneNumber}
							{...register('phoneNumber', {
								required: true,
								minLength: 11,
								maxLength: 20,
								onChange: (e) => {
									if (e.target.value.trim() !== '') {
										setPhoneTouched(false);
									}
								},
								onBlur: (e) => {
									if (e.target.value.trim() === '') {
										setPhoneTouched(true);
									} else {
										setPhoneTouched(false);
									}
								},
							})}
						/>
						{phoneTouched && errors?.phoneNumber?.type !== 'required' && <p className='font-weight text-danger mt-1 mb-0'>Phone Number is required</p>}
						{errors?.phoneNumber?.type === 'required' && <p className='font-weight text-danger mt-1 mb-0'>Phone Number is required</p>}
						{errors?.phoneNumber?.type === 'minLength' && <p className='font-weight text-danger mt-1 mb-0'>Phone Number must contain at least 11 Number</p>}
						{errors?.phoneNumber?.type === 'maxLength' && <p className='font-weight text-danger mt-1 mb-0'>Phone Number must contain maximum 20 Number</p>}
					</Form.Group>
				</Form>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={handleCloseBookModal}>
					Close
				</Button>
				<Button variant='success' onClick={handleSubmit(handleConfirmBooking)}>
					Confirm Booking
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
