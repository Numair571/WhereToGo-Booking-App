export function getHotelsData(signal = null) {
	const data = [
		{
			hotelName: 'Sheraton Montazah Hotel',
			hotelAdress: 'Corniche Road Alexandria, Egypt 21923',
			hotelRating: 3.7,
			images: [
				'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '2260',
		},
		{
			hotelName: 'JW Marriott Hotel Cairo',
			hotelAdress: 'Ring Road- Mirage City- P.O.Box 427, New Cairo Cairo, Egypt 11757',
			hotelRating: 4.4,
			images: [
				'https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '2380',
		},
		{
			hotelName: 'Renaissance Cairo Mirage City Hotel',
			hotelAdress: 'Abbas Al Akkad Corridor, Mirage city, New Cairo Cairo, Egypt 11757',
			hotelRating: 4.6,
			images: [
				'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '2700',
		},
		{
			hotelName: 'The Nile Ritz-Carlton, Cairo',
			hotelAdress: '1113 Corniche El Nil Cairo, Egypt 11221',
			hotelRating: 4.4,
			images: [
				'https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '3250',
		},
		{
			hotelName: 'Le Méridien Cairo Airport',
			hotelAdress: 'Cairo International Airport, Terminal 3 Cairo, Egypt',
			hotelRating: 4.5,
			images: [
				'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '4160',
		},
		{
			hotelName: 'Le Méridien Pyramids Hotel & Spa',
			hotelAdress: 'El Remaya Square - Pyramids, PO Box 25 Pyramids Cairo, Egypt 12561',
			hotelRating: 4,
			images: [
				'https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '3800',
		},
		{
			hotelName: 'The St. Regis Almasa Hotel, Cairo',
			hotelAdress: 'New Administrative Capital, Cairo Suez road Cairo, Egypt',
			hotelRating: 4.6,
			images: [
				'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '2880',
		},
		{
			hotelName: 'The Westin Cairo Golf Resort & Spa, Katameya Dunes',
			hotelAdress: 'Road 90,New Cairo City, Katameya Dunes Cairo, Egypt 11835',
			hotelRating: 4.5,
			images: [
				'https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '3160',
		},
		{
			hotelName: 'Sheraton Miramar Resort El Gouna',
			hotelAdress: 'Red Sea El Gouna, Egypt',
			hotelRating: 4.5,
			images: [
				'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '4110',
		},
		{
			hotelName: 'Sheraton Soma Bay Resort',
			hotelAdress: 'P.O. BOX 71, Hurghada Red Sea, Egypt',
			hotelRating: 4.7,
			images: [
				'https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			],
			price: '4570',
		},
	];

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// To Abort The Previous Request If New One Is Requested
			if (signal?.aborted) {
				reject(signal.reason);
			}
			resolve(data);
		}, Math.random() * 1000); // This Timeout to Mock a slow API Request
	});
}
