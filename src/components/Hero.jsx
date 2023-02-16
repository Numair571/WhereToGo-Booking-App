// Components
import { ImagesSlider } from './shared/ImagesSlider';

export const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-info'>
				<h2 className='hero-header text-capitalize fw-bolder'>
					Discover the perfect balance <br />
					of hospitality, luxury <br />
					and comfort.
				</h2>
				<a type='button' href='#hotels-explore' className='btn btn-warning btn-lg fs-2 fw-bold mainTextColor'>
					Book Now
				</a>
			</div>
			<ImagesSlider
				sliderId='heroSlider'
				imgSrc1={
					'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
				}
				imgSrc2={
					'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
				}
				isAutomated={true}
				classes=' w-100 h-100 '
			/>
		</section>
	);
};
