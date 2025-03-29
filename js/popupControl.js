const regBtn = document.querySelectorAll('.title__reg')
const popupField = document.querySelector('.popup')
const feedback = document.querySelector('.feedback')
const closeBtn = document.querySelector('.feedback__close')
const feedbackData = document.querySelectorAll('.feedback__input')
const feedbackBtn = document.querySelector('.feedback__btn')

regBtn.forEach(item => {
	item.addEventListener('click', () => {
		popupField.style.display = 'block'
		document.querySelector('.main').style.position = 'fixed'
		feedback.style.display = 'flex'
	})
})

closeBtn.addEventListener('click', () => {
	closeFeedbackPopup()
})

feedbackBtn.addEventListener('click', e => {
	e.preventDefault()
	let count = 0
	feedbackData.forEach(item => {
		// console.log(item.type);
		if (item.value === '' || (item.type === 'checkbox' && !item.checked)) {
			count = count + 1
			item.style.borderBottom = '1px solid red'
			if (item.type === 'checkbox') {
				item.style.outline = '1px solid red'
			}
			console.log(count)
		} else {
			item.style.borderBottom = '1px solid #1c242c'
			if (item.type === 'checkbox') {
				item.style.outline = 'none'
			}
		}
	})
})

const confidentialityBtn = document.querySelector('.confidential')
const feedbackConfidentiality = document.querySelector('.feedback__confidentiality')
const confidentiality = document.querySelector('.confidentiality')
const confidentialityClose = document.querySelector('.confidentiality__close')

confidentialityBtn.addEventListener('click', e => {
	document.querySelector('.main').style.position = 'fixed'
	confidentiality.style.display = 'flex'
})

feedbackConfidentiality.addEventListener('click', ()=>{
	confidentiality.style.display = 'flex'
	document.querySelector('.main').style.position = 'fixed'
})

confidentialityClose.addEventListener('click', () => {
	closeConfidentialPopup()
})

function closeFeedbackPopup() {
	popupField.style.display = 'none'
	document.querySelector('.main').style.position = 'relative'
	feedback.style.display = 'none'
	confidentiality.style.display = 'none'
	feedbackData.forEach(item => {
		item.style.borderBottom = '1px solid #1c242c'
		if (item.type === 'checkbox') {
			item.style.outline = 'none'
			item.checked = false
		}
	})
}

function closeConfidentialPopup() {
	confidentiality.style.display = 'none'
	document.querySelector('.main').style.position = 'relative'
}
