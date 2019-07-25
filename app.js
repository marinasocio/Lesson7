//Exercise 1

function minus(a) {
	if (a === undefined) {
		a = 0;
	}
	return function(b) {
		if (b === undefined) {
			b = 0;
		}
		return a - b;
	};
}

//Exercise 2

function multiplyMaker(a) {
	return function(b) {
		a = a * b;
		return a;
	};
}

const multiply = multiplyMaker(2);

//Exercise 3

const string = (function() {
	function setString(value) {
		if (value === undefined) {
			str = '';
		}
		if (typeof value === 'number') {
			str = String(value);
		}
	}

	function getString() {
		return str;
	}

	function getStringLength() {
		return str.length;
	}

	function getStringReverse() {
		return str.split('').reverse().join('');
	}

	return {
		setString,
		getString,
		getStringLength,
		getStringReverse
	};
})();

//Exercise 4

const calc = (function() {
	function setNum(value) {
		res = value;
	}

	function setSum(sum) {
		res += sum;
	}

	function setSubtract(minus) {
		res -= minus;
	}

	function setMultiply(multi) {
		res *= multi;
	}

	function setDivision(divis) {
		res /= divis;
	}

	function setInvolute(inv) {
		res = Math.pow(res, inv);
	}

	function getResult() {
		return res;
	}

	function setNull() {
		return (res = 0);
	}

	return {
		setNum,
		setSum,
		setSubtract,
		setMultiply,
		setDivision,
		setInvolute,
		getResult,
		setNull
	};
})();
