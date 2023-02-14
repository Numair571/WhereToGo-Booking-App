import './App.css';
import { getHotelsData } from './apis/getHotelsData';
import { useEffect, useState } from 'react';

function App() {
	const [hotelsData, setHotelsData] = useState([]);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		(async () => {
			const data = await getHotelsData(signal);
			data.sort((a, b) => b.hotelRating - a.hotelRating);
			setHotelsData(data);
		})();

		return () => {
			controller.abort('Cancel Previous Request');
		};
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>Where To Go !</header>
		</div>
	);
}

export default App;
