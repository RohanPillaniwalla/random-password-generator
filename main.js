const generate = () => {
	let len = document.getElementById('length').value;
	len = parseInt(len); // Convert the value to an integer

	if (len > 0 && len < 16) {
		const num = document.querySelector('#num').checked;
		const upper = document.querySelector('#upper').checked;
		const lower = document.querySelector('#lower').checked;
		const special = document.querySelector('#special').checked;

		stringGenerator(len, num, upper, lower, special);
	} else {
		alert('Please enter a number between 1 and 15.');
	}
};

const stringGenerator = (len, num, upper, lower, special) => {
	const number = '0123456789';
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
	const specialChar = '!@#$%^&*+_-|/';

	let result = '';

	if (num) result += number;
	if (upper) result += upperCase;
	if (lower) result += lowerCase;
	if (special) result += specialChar;

	pass = generatePassword(len, result);

	const password = generatePassword(len, result);
	document.getElementById('password').textContent = password;
};

const generatePassword = (len, randomString) => {
	let password = '';
	for (let i = 0; i < len; i++) {
		password += randomString.charAt(
			Math.floor(Math.random() * randomString.length)
		);
	}
	return password;
};
