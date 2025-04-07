const regBtn = document.querySelectorAll('.title__reg')
const popupField = document.querySelector('.popup')
const feedback = document.querySelector('.feedback')
const closeBtn = document.querySelector('.feedback__close')
const feedbackData = document.querySelectorAll('.feedback__input')
const feedbackBtn = document.querySelector('.feedback__btn')

const TOKEN = '7651200728:AAGIk5agNtzkeCnnuTnJgL2Cv2Y4GecCogM'
const CHAT_ID = '-1002698461559'
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
// Путь к АПИ для отправки сообщения в телеграм

regBtn.forEach(item => {
	item.addEventListener('click', () => {
		popupField.style.display = 'block'
		document.querySelector('.main').style.position = 'fixed'
		feedback.style.display = 'flex'
		feedbackData.forEach(item => {
			if (item.type === 'checkbox') {
				item.checked = false
			}
		})
	})
})

closeBtn.addEventListener('click', () => {
	closeFeedbackPopup()
})

feedbackBtn.addEventListener('click', e => {
	e.preventDefault()
	let count = 0
	let dataArr = []

	feedbackData.forEach(item => {
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

			if (item.type !== 'checkbox') {
				// Собираем введённые данные из формы для отправки
				dataArr.push(item.value)
			}
		}
	})

	if (count == 0) {
		console.log('Всё заполнено. Можно отправлять')

		let message = `ФИО участника: ${dataArr[0]}\n` 
		message += `должность: ${dataArr[1]}\n`
		message += `компания: ${dataArr[2]} \n`
		message += `контактный телефон: ${dataArr[3]}\n`
		message += `адрес электронной почты: ${dataArr[4]}\n`

		// Отправка заявки в телеграмм описание алгоритма https://www.youtube.com/watch?v=RviYQrNdDok
	window.axios.post(URL_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
	.then(() =>{
			feedbackData.forEach(item=>{
			item.value = ''
		})
		alert("Заявка отправлена. Спасибо за внимание.")
		closeFeedbackPopup(),1500
			})
	.catch((err) =>{
		console.warn(err);
	})
	}
})

const confidentialityBtn = document.querySelector('.confidential')
const feedbackConfidentiality = document.querySelector(
	'.feedback__confidentiality'
)
const confidentiality = document.querySelector('.confidentiality')
const confidentialityClose = document.querySelector('.confidentiality__close')

confidentialityBtn.addEventListener('click', () => {
	document.querySelector('.main').style.position = 'fixed'
	confidentiality.style.display = 'flex'
})

feedbackConfidentiality.addEventListener('click', () => {
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
	feedbackData.forEach(item => {
		if (item.type === 'checkbox') {
			item.checked = true
		}
	})
}