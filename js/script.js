'use sctrict';

document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.header__burger');
	const overlay = document.querySelector('.overlay');
	const mobileMenu = document.querySelector('.mobile-menu');
	const dropdownButton = document.querySelector('.dropdown-phone__toggle');
	const menuClose = document.querySelector('.mobile-menu__close');
	const buttonsToCloseMenu = [overlay, menuClose];

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		overlay.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	});

	buttonsToCloseMenu.forEach((e) => {
		e.addEventListener('click', closeMenu);
	});

	function closeMenu() {
		burger.classList.remove('active');
		overlay.classList.remove('active');
		mobileMenu.classList.remove('active');
	}

	// DROPDOWN
	dropdownButton.addEventListener('click', toggleDropdown);
	function toggleDropdown() {
		const dropdown = document.querySelector('.dropdown-phone');
		dropdown.classList.toggle('open');
	}

	const dropdownPhone = document.querySelector('.dropdown-phone');
	const headerContainer = document.querySelector('.header__container');

	function moveElement() {
		if (window.innerWidth <= 991.98) {
			if (
				dropdownPhone &&
				headerContainer &&
				!headerContainer.contains(dropdownPhone)
			) {
				headerContainer.insertBefore(dropdownPhone, headerContainer.firstChild);
			}
		} else {
			const originalContainer = document.querySelector('.subheader__container');
			if (
				dropdownPhone &&
				originalContainer &&
				!originalContainer.contains(dropdownPhone)
			) {
				originalContainer.appendChild(dropdownPhone);
			}
		}
	}

	moveElement();

	window.addEventListener('resize', moveElement);

	// Swipers
	// Hero Section
	const swiperHero = new Swiper('.slider-hero', {
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},

		loop: true,
		pagination: {
			el: '.hero__pagination',
		},

		navigation: {
			nextEl: '.slider-hero__button-next',
			prevEl: '.slider-hero__button-prev',
		},
	});

	// Service Section
	const swiperService = new Swiper('.slider-service', {
		spaceBetween: 42.5,
		slidesPerView: 'auto',
		freeMode: {
			enabled: true,
			sticky: true,
		},
		scrollbar: {
			el: '.service__scrollbar',
			draggable: true,
			dragSize: 45,
		},
	});
});
