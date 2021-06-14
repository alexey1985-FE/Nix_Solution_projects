let question = [
	'Что из этого не является косметическим средством?',
	'Кто, в конце концов, скушал Колобка?',
	'Какой шахматной фигуры не существует?',
	'Что означает буква «О» в аббревиатуре ОРТ?',
	'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»',
	'В состав любого органического вещества входит…',
	'Какое слово здесь лишнее?',
	'Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?',
	'Кто изобрел громоотвод?',
	'Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?',
	'В каком городе находится штаб-квартира Microsoft?',
	'При каком правителе к России была присоединена территория Финляндии?',
	'Ричард Львиное Сердце был пленен во время',
	'Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?',
	'Кто такой «молотоглав»?',
];

let answer = [
	'Помада',
	'Татуировка',
	'Крем',
	'Пудра',
	'Дед',
	'Баба',
	'Заяц',
	'Лиса',
	'Пешка',
	'Конь',
	'Король',
	'Дама',
	'Олигархическое',
	'Объективное',
	'Общественное',
	'Однообразное',
	'Расторгуев',
	'Чикатило',
	'Тумбочкин',
	'Раскольников',
	'кислород',
	'углерод',
	'водород',
	'азот',
	'Автор',
	'Товар ',
	'Отвар',
	'Ворот',
	'Синодский регистратор',
	'Провинциальный секретарь',
	'Коллежский регистратор',
	'Кабинетский регистратор',
	'Франклин',
	'Рузвельт',
	'Вашингтон',
	'Линкольн',
	'Дворовые',
	'Захребетники',
	'Нахлебники',
	'Бестягольные',
	'Нью-Йорк',
	'Ричмонд',
	'Новый Орлеан',
	'Сиэтл',
	'Петр I',
	'Екатерина II',
	'Павел I',
	'Александр I',
	'крестового похода',
	'столетней войны',
	'войны алой и белой розы',
	'войны за независимость',
	'10',
	'20',
	'70',
	'90',
	'Рыба',
	'Птица',
	'Змея',
	'Насекомое',
];

let key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];

let level = 0;
let resultArr = [];
let tr = document.querySelectorAll('tr');
let userInput = document.querySelector('#user');
let inputLabel = document.querySelectorAll('label');

document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
});

document.querySelector('#start').addEventListener('click', function () {
	if (document.querySelector('#user').value != +'') {
		document.querySelector('.start').style.display = 'none';
	} else {
		document.querySelector('#user').style.background = '#f30';
	}
});

function show(level) {
	if (level !== 15) {
		document.querySelector('.question').innerHTML = question[level];
		document.querySelector('label[for=answer1]').innerHTML = answer[level * 4 + 0];
		document.querySelector('label[for=answer2]').innerHTML = answer[level * 4 + 1];
		document.querySelector('label[for=answer3]').innerHTML = answer[level * 4 + 2];
		document.querySelector('label[for=answer4]').innerHTML = answer[level * 4 + 3];
	}
}

show(level);

document.querySelector('.btn').addEventListener('click', () => {

	if (document.querySelector('input[name=answer]:checked').value == key[level]) {
		level++;
		show(level);
	} else {
		gameOver();
	}

	if (level < 15) {
		tr[tr.length - (level + 1)].style.backgroundColor = '#FF0';
		tr[tr.length - level].style.color = '#f0f';
		tr[tr.length - level].classList.add('result');
	}

	document.querySelectorAll('label').forEach(item => {
		item.style.color = '#fff';
	});

	document.querySelectorAll('input').forEach(item => {
		item.checked = false;
	});

	if (level == 5 || level == 10 || level == 15) {
		tr[tr.length - level].classList.add('resultConst');
		resultArr.push(tr[tr.length - level]);
		console.log(tr);
	} else {
		let tdResult = resultArr[resultArr.length - 1].children;
		let tdText = tdResult[1].textContent;
		document.querySelector('.showResult').textContent = userInput + ', ВЫ ВЫИГРАЛИ: ' + tdText + ' гривен';
	}

	if (level === 15) {
		gameOver();
	}
});

function random(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

document.querySelector('.round50').addEventListener('click', () => {
		let inputAnswer = document.getElementsByName('answer');
		let exp = [];
		let count = 0;
		while (count < 2) {
			let index = random(0, 3);
			if (exp.indexOf(index) == -1 && inputAnswer[index].value != key[level]) {
				inputLabel[index].style.color = '#69f';
				count++;
				exp.push(index);
			}
		}
		document.querySelector('.round50').style.backgroundColor = 'red';
		document.querySelector('.round50 > p').style.display = 'none';
	},
	{ once: true }
);

document.querySelector('.round').addEventListener('click',() => {
		(inputLabel[random(0, 3)].style.color = '#F90'),
			(document.querySelector('.round-style2').style.background = 'none');
		document.querySelector('.round').style.backgroundColor = 'red';
	},
	{ once: true }
);

document.querySelector('.roundEnd').addEventListener('click', () => {
	end();
});

function end() {
	document.querySelector('.end').style.display = 'block';
	userInput = userInput.value;
	document.querySelector('.showResult').textContent = userInput + ', ВЫ ВЫШЛИ ИЗ ИГРЫ!!!';
}

function gameOver() {
	document.querySelector('.end').style.display = 'block';
	userInput = userInput.value;
	document.querySelector('.showResult').textContent = userInput + ', ВЫ ПРОИГРАЛИ :( '
	if (tr[tr.length - level].classList.contains('resultConst')) {
		let tdResult = resultArr[resultArr.length - 1].children;
		let tdText = tdResult[1].textContent;
		document.querySelector('.showResult').textContent = userInput + ', ВЫ ВЫИГРАЛИ: ' + tdText + ' гривен!';
	}
}
