const owlPrevIcon = `
    <svg class="owl-prev-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 15L7.5 10L12.5 5" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

const owlNextIcon = `
    <svg class="owl-next-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20"/>
        <path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		center: true,
		loop: true,
		margin: 32,
		nav: true,
		navText: [owlPrevIcon, owlNextIcon],
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 1.9,
				nav: true,
			},
			1200: {
				items: 2.2,
			},
		},
	});
});