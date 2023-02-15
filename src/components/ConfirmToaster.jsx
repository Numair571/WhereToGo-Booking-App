import { useContext } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { ModalsControllerContext } from './../contexts/ModalsControllerContext';

export const ConfirmToaster = () => {
	const { bookingConfirmed, setBookingConfirmed } = useContext(ModalsControllerContext);

	return (
		<ToastContainer className='p-3 position-fixed' position={'top-end'}>
			<Toast onClose={() => setBookingConfirmed(false)} show={bookingConfirmed} delay={4000} autohide>
				<Toast.Header>
					<strong className='me-auto'>WhereToGo!</strong>
				</Toast.Header>
				<Toast.Body className={'bg-info text-white'}>Thank you for booking with us! ✨</Toast.Body>
			</Toast>
		</ToastContainer>
	);
};
