// Images
import Logo from '../assets/images/w2g_logo.png';

// Icons
import { HiLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram } from 'react-icons/sl';

export const Footer = () => {
	return (
		<footer className='container-fluid bg-dark d-flex justify-content-center align-items-start py-5'>
			<div className='container d-flex row align-items-center justify-content-center'>
				<div className='col-lg-5'>
					<a href='#'>
						<img src={Logo} alt='W2G Logo' className='w-25' />
					</a>
				</div>
				<div className='col-lg-3 col-sm d-flex flex-column align-items-sm-center align-items-lg-start justify-content-center text-light mt-sm-4'>
					<h3 className='fw-bolder'>Contact Us</h3>
					<ul>
						<li className='d-flex align-items-center justify-content-start'>
							<HiLocationMarker />
							<span className='ms-2 fs-4'>Alexandria, Egypt.</span>
						</li>
						<li className='d-flex align-items-center justify-content-start'>
							<HiOutlinePhone />
							<span className='ms-2 fs-4'>+20 1090 2923 06</span>
						</li>
						<li className='d-flex align-items-center justify-content-start'>
							<HiOutlineMail />
							<span className='ms-2 fs-4'>support@w2g.com</span>
						</li>
					</ul>
				</div>
				<div className='col-lg-4  d-flex flex-column align-items-center justify-content-start text-light mt-sm-4'>
					<h3 className='fw-bolder'>Follow Us</h3>
					<div className='row'>
						<SlSocialFacebook className='col-4 fs-4 fw-bolder ps-0' type='button' />
						<SlSocialInstagram className='col-4 fs-4 fw-bolder' type='button' />
						<SlSocialTwitter className='col-4 fs-4 fw-bolder' type='button' />
					</div>
				</div>
			</div>
		</footer>
	);
};
