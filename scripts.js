const text = document.getElementById("text");
const input = document.getElementById("input");

function changeText(msg) {
	text.innerText = msg;
}

input.addEventListener('keydown', function (e) {
	if (!e) e = window.event;
	switch (e.key) {
		case "Enter":
			changeText(input.value);
			input.value = "";
			break;
		default:
			return;
	}


});