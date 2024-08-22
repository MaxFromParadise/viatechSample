'use sctrict';

document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.header__burger');
	const overlay = document.querySelector('.overlay');
	const mobileMenu = document.querySelector('.mobile-menu');
	const dropdownButton = document.querySelector('.dropdown-phone__toggle');
	const menuClose = document.querySelector('.mobile-menu__close');
	const body = document.body;
	const dropdownItems = document.querySelectorAll(
		'.order-service-form__dropdown-menu li'
	);
	const currentDropdownValue = document.querySelector(
		'.order-service-form__dropdown-toggle span'
	);
	const buttonsToCloseMenu = [menuClose];

	// menu
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		overlay.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});

	buttonsToCloseMenu.forEach((e) => {
		e.addEventListener('click', closeMenu);
	});
	overlay.addEventListener('click', () => {
		closeMenu();
		closeForm();
		closeNewsCard();
	});
	function closeMenu() {
		burger.classList.remove('active');
		overlay.classList.remove('active');
		mobileMenu.classList.remove('active');
		body.classList.remove('lock');
	}
	// Form Menu
	const form = document.querySelector('.order-service-form');
	const closeFormButton = document.querySelector(
		'.order-service-form__close-btn'
	);
	const openFormButtons = document.querySelectorAll('[data-open-form]');

	function toggleForm() {
		overlay.classList.toggle('active');
		form.classList.toggle('active');
		body.classList.toggle('lock');
	}

	function closeForm() {
		overlay.classList.remove('active');
		form.classList.remove('active');
		body.classList.remove('lock');
	}

	openFormButtons.forEach((button) => {
		button.addEventListener('click', () => {
			toggleForm();
			const title = button.querySelector('.slide-slider-service__title');
			if (title) {
				const hasTitleMatch = Array.from(dropdownItems).some((elem) => {
					return elem.textContent.includes(title.textContent.trim());
				});
				if (hasTitleMatch) {
					currentDropdownValue.textContent = title.textContent.trim();
					currentDropdownValue.classList.add('changed');
				}
			}
		});
	});

	closeFormButton.addEventListener('click', closeForm);

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

	// Gallery Section
	const galleryService = new Swiper('.slider-gallery', {
		spaceBetween: 30,
		slidesPerView: 'auto',
		freeMode: {
			enabled: true,
			sticky: true,
		},
		scrollbar: {
			el: '.gallery__scrollbar',
			draggable: true,
			dragSize: 45,
		},
	});
	// Form Dropdown

	function dropdownForm() {
		document
			.querySelector('.order-service-form__dropdown-toggle')
			.addEventListener('click', function () {
				const dropdownMenu = document.querySelector(
					'.order-service-form__dropdown-menu'
				);
				const dropdownIcon = document.querySelector(
					'.order-service-form__dropdown-icon'
				);
				dropdownMenu.classList.toggle('active');
				dropdownIcon.classList.toggle('active');
			});

		dropdownItems.forEach(function (item) {
			item.addEventListener('click', function () {
				const itemValue = item.textContent;
				currentDropdownValue.textContent = itemValue;
				currentDropdownValue.classList.add('changed');
				document
					.querySelector('.order-service-form__dropdown-menu')
					.classList.remove('active');
				document
					.querySelector('.order-service-form__dropdown-icon')
					.classList.remove('active');
			});
		});
	}
	function maskedPhoneInput() {
		document
			.querySelector('.order-service-form__input-phone')
			.addEventListener('input', function (e) {
				let input = e.target;
				let value = input.value.replace(/\D/g, '');
				let formattedValue = '';

				if (value.length > 0) {
					formattedValue = '+7 ';
				}
				if (value.length > 1) {
					formattedValue += '(' + value.substring(1, 4);
				}
				if (value.length >= 5) {
					formattedValue += ') ' + value.substring(4, 7);
				}
				if (value.length >= 8) {
					formattedValue += '-' + value.substring(7, 9);
				}
				if (value.length >= 10) {
					formattedValue += '-' + value.substring(9, 11);
				}

				input.value = formattedValue;
			});
	}
	maskedPhoneInput();
	dropdownForm();

	// News Card
	const newsCard = document.querySelector('.news-card');
	const closeNewsCardButton = document.querySelector('.news-card__button');
	const openNewsCardButtons = document.querySelectorAll('[data-open-news]');

	function toggleNewsCard() {
		overlay.classList.toggle('active');
		newsCard.classList.toggle('active');
		body.classList.toggle('lock');
	}

	function closeNewsCard() {
		overlay.classList.remove('active');
		newsCard.classList.remove('active');
		body.classList.remove('lock');
	}

	openNewsCardButtons.forEach((button) => {
		button.addEventListener('click', toggleNewsCard);
	});

	closeNewsCardButton.addEventListener('click', closeNewsCard);
});
