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

const calc = {
	setNum: function(value) {
		res = value;
		return this;
	},

	setSum: function(sum) {
		res += sum;
		return this;
	},

	setSubtract: function(minus) {
		res -= minus;
		return this;
	},

	setMultiply: function(multi) {
		res *= multi;
		return this;
	},

	setDivision: function(divis) {
		res /= divis;
		res = res.toFixed(2);
		return this;
	},

	setInvolute: function(inv) {
		res = Math.pow(res, inv);
		return this;
	},

	getResult: function() {
		return res;
	},

	setNull: function() {
		res = 0;
		return this;
	}
};
