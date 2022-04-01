const numbers = document.querySelectorAll(".number")
console.forEach (number) => {
	number.addEventListerner("click", () => {
		console.log("number is pressed")
	})
}