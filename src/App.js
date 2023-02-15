import './App.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HotelsExplore } from './components/HotelsExplore';
import { Footer } from './components/Footer';
import { HotelBooking } from './components/HotelBooking';
import { ConfirmToaster } from './components/ConfirmToaster';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<HotelsExplore />
			<ConfirmToaster />
			<HotelBooking />
			<Footer />
		</div>
	);
}

export default App;
