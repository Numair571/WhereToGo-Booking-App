// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HotelsExplore } from './components/HotelsExplore';
import { Footer } from './components/Footer';
import { HotelBookingForm } from './components/HotelBookingForm';
import { ConfirmToaster } from './components/ConfirmToaster';
import { UserBookingsLog } from './components/UserBookingsLog';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<UserBookingsLog />
			<Hero />
			<HotelsExplore />
			<ConfirmToaster />
			<HotelBookingForm />
			<Footer />
		</div>
	);
}

export default App;
