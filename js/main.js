let areaPdf = document.getElementById('pdf-area');
let pdfButton = document.getElementById('pdf-button');
// console.log(pdfButton);
const showMenu = () => {
	const toggle = document.getElementsByClassName('nav-toggle');
	const nav = document.getElementsByClassName('nav-menu');

	//console.log(toggle);
	if (toggle && nav) {
		toggle[0].addEventListener('click', () => {
			nav[0].classList.toggle('show-menu');
		});
	}
};

function generatePdf() {
	html2pdf(areaPdf);
}

pdfButton.addEventListener('click', () => {
	generatePdf();
});

function hideMenu() {
	const nav_link = document.querySelectorAll('.nav_link');
	const nav = document.getElementsByClassName('nav-menu');
	//console.log(nav_link);
	if (nav_link) {
		nav_link.forEach((element) => {
			element.addEventListener('click', () => {
				nav[0].classList.remove('show-menu');
			});
		});
	}
}

showMenu();
hideMenu();

function scrollActive() {
	const scrollY = window.pageYOffset;
	const sections = document.querySelectorAll('section[id]');
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav-menu a[href*=' + sectionId + ']')
				.classList.add('active-link');

			//.classList.add('active-link');
			console.log(sectionId);
		} else {
			document
				.querySelector('.nav-menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

function scrollTop() {
	const scrollTop = document.getElementById('scroll-top');
	if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
	else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);
