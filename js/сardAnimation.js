const techCard = document.querySelectorAll('.card')
const speakerCard = document.querySelectorAll('.speaker__item')

document.addEventListener('scroll', () => {
	techCardMove(techCard)
    techCardMove(speakerCard)
	// console.log(window.innerHeight);
	// console.log(item);
	// console.log(item.clientHeight);
	// console.log(item.getBoundingClientRect().top);
})

function techCardMove(card) {
	card.forEach(item => {
		if (
			item.getBoundingClientRect().top + item.clientHeight / 2 <
			window.innerHeight
		) {
			item.style.transform = 'translateX(0)'
			item.style.transition = '900ms'
		}

		if (item.getBoundingClientRect().top > window.innerHeight) {
			item.style.transform = 'translateX(-100vw)'
			item.style.transition = '900ms'
		}
	})
}
