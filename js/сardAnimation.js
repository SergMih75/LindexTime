const techCard = document.querySelectorAll('.card')
const speakerCard = document.querySelectorAll('.speaker__item')
const programCard = document.querySelectorAll('.program__item')

document.addEventListener('scroll', () => {
	techCardMove(techCard)
    techCardMove(speakerCard)
	techCardMove(programCard)
	// console.log(window.innerHeight);
	// console.log(item);
	// console.log(item.clientHeight);
	// console.log(item.getBoundingClientRect().top);
})

function techCardMove(card) {
	card.forEach(item => {
		let temp = item.getAttribute('data-move')

		if (
			item.getBoundingClientRect().top + item.clientHeight / 4 <
			window.innerHeight
		) {
			item.style.transform = 'translateX(0)'
			item.style.transition = '1200ms'
		}

		if (item.getBoundingClientRect().top > window.innerHeight) {
			if (temp === 'left') {
				item.style.transform = 'translateX(-100vw)'
			}
			if (temp === 'right') {
				item.style.transform = 'translateX(150vw)'
			}
			item.style.transition = '900ms'
		}
	})
}
