const advice_count_output = document.getElementById("advice-count-output");
const advice_text_output = document.getElementById("advice-text-output");
const request_button = document.getElementById("request-button");

let count = 0;

request_button.addEventListener("click", () => {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);
			advice_text_output.textContent = data.slip.advice;
			count++;
			advice_count_output.textContent = count;
		});
});
