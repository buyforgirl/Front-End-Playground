// Make the following code work:
//> [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();     
//[2, 4, 1, 8, 9, 6, 5, 3, 7]


Array.prototype.shuffle = function() {
	for (var i = 0; i < this.length; i++) {
		var k = Math.floor(Math.random() * i);
		var temp = this[i];
		this[i] = this[k];
		this[k] = temp;
	}
	return this;
};

[1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();