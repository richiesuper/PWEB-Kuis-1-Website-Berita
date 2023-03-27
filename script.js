let lightBulbState = true;
const body = document.querySelector('body');
const lightBulb = document.querySelector('#lightBulb');
lightBulb.addEventListener('click', function () {
	if (lightBulbState) {
		lightBulbState = false;
		body.style.backgroundColor = '#333333';
		document.querySelector('nav').classList.toggle('navbar-dark');
		document.querySelector('body').classList.toggle('text-white');
	} else {
		lightBulbState = true;
		body.style.backgroundColor = 'white';
		document.querySelector('nav').classList.toggle('navbar-dark');
		document.querySelector('body').classList.toggle('text-white');
	}
});