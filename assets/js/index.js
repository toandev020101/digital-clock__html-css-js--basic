const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const hoursElement = $('.hours')
const minutesElement = $('.minutes')
const secondsElement = $('.seconds')
const periodElement = $('.period')

const weekdayElement = $('.weekday')
const monthElement = $('.month')
const dayElement = $('.day')
const yearElement = $('.year')

const app = {
	handleEvents: function () {
		setInterval(() => {
			const today = new Date()
			let h = today.getHours()
			let m = today.getMinutes()
			let s = today.getSeconds()
			let p = h > 12 ? 'PM' : 'AM'

			// chuyển kiểu giờ:  24h -> 12h
			h = h > 12 ? h - 12 : h

			// thêm 0 vào đầu time 1 chữ số
			h = h < 10 ? '0' + h : h
			m = m < 10 ? '0' + m : m
			s = s < 10 ? '0' + s : s

			hoursElement.textContent = h
			minutesElement.textContent = m
			secondsElement.textContent = s
			periodElement.textContent = p

			weekdayElement.textContent =
				today.toLocaleString('default', {
					weekday: 'long',
				}) + ','
			monthElement.textContent = today.toLocaleString('default', {
				month: 'short',
			})
			dayElement.textContent = today.getDate() + ','
			yearElement.textContent = today.getFullYear()
		}, 1000)
	},

	start: function () {
		// Lắng nghe / xử lý các sự kiện (DOM Events)
		this.handleEvents()
	},
}

app.start()
