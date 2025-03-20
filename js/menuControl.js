const burger = document.querySelector('.burger')

const menuMobile = document.querySelector('.menu')
const menuItem = document.querySelectorAll('.menu__item')

burger.addEventListener('click', () => {
	if (menuMobile.classList.contains('menu-active')) {
		menuMobile.classList.remove('menu-active')
		burger.classList.remove('burger-active')
		menuMobile.classList.add('menu-disable')
	} else {
		burger.classList.add('burger-active')
		menuMobile.classList.add('menu-active')
		menuMobile.classList.remove('menu-disable')
	}
})

menuItem.forEach(item => {
	item.addEventListener('click', () => {
		if (window.innerWidth < 850) {
			burger.classList.remove('burger-active')
			burger.classList.add('burger-disable')
			menuMobile.classList.remove('menu-active')
			menuMobile.classList.add('menu-disable')
		}
	})
})

document.addEventListener('DOMContentLoaded', () => {
	if (
		window.innerWidth < 850 &&
		!menuMobile.classList.contains('menu-disable')
	) {
		menuMobile.classList.add('menu-disable')
		burger.classList.remove('burger-active')
	}
})

window.addEventListener('resize', () => {
	if (window.innerWidth < 850) {
		menuMobile.classList.add('menu-disable')
		menuMobile.classList.remove('menu-active')
		burger.classList.remove('burger-active')
	}

	if (window.innerWidth > 850) {
		menuMobile.classList.remove('menu-disable')
		burger.classList.remove('burger-active')
	}
})
