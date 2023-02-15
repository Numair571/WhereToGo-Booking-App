export const ImagesSlider = ({ sliderId, imgSrc1, imgSrc2, isAutomated, classes = '' }) => {
	return (
		<div id={sliderId} className={'carousel slide carousel-fade' + classes} data-bs-ride='carousel'>
			<div className='carousel-inner w-100 h-100'>
				<div className='carousel-item active w-100 h-100' data-bs-interval='3000'>
					<img src={imgSrc1} className='d-block w-100 h-100' alt='Hotel_Image' />
				</div>
				<div className='carousel-item w-100 h-100' data-bs-interval='2000'>
					<img src={imgSrc2} className='d-block w-100 h-100' alt='Hotel_Image' />
				</div>
			</div>
			{!isAutomated && (
				<>
					<button className='carousel-control-prev' type='button' data-bs-target={`#${sliderId}`} data-bs-slide='prev'>
						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
					</button>
					<button className='carousel-control-next' type='button' data-bs-target={`#${sliderId}`} data-bs-slide='next'>
						<span className='carousel-control-next-icon' aria-hidden='true'></span>
					</button>
				</>
			)}
		</div>
	);
};
