// Api Functions
import { getHotelsData } from '../apis/getHotelsData';

// React Hooks
import { useEffect, useState } from 'react';

// Components
import { HotelCard } from './HotelCard';

export const HotelsExplore = () => {
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
		<>
			<section className='container my-5' id='hotels-explore'>
				<h2 className='my-5 fw-bold fs-1'>Explore Our Hotels</h2>
				<div className='d-flex row w-100 justify-content-around align-items-center mx-0'>
					{hotelsData.map((hotel, i) => (
						<HotelCard hotel={hotel} key={hotel.hotelName} id={i} />
					))}
				</div>
			</section>
		</>
	);
};
