let max = document.querySelector('.max');
let count = document.querySelector('.count');
let min = document.querySelector('.min');
let button = document.querySelector('button');
let out = document.querySelector('.out');

function getRandomNumbers(min, max, count) {
	let obj = {};
	let arr = [];
	max = +max.value;
	count = +count.value;
	min = +min.value;
	for (let i = 0; i < count; i++) {
		let random = Math.floor(Math.random() * (max - min + 1));

		while (random > max - 1) {
			random = Math.floor(Math.random() * (max - min + 1));
		}

		arr.push((random in obj ? obj[random] : random) + min);
		let l = max - i - 1;
		obj[random] = l in obj ? obj[l] : 1;
	}
	return arr.join(' ');
}

button.addEventListener('click', () => {
	out.innerHTML = getRandomNumbers(min, max, count);
});
