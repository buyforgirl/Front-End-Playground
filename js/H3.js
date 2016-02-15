var deck = {
    suit : ['Spades', 'Hearts', 'Diamonds', 'Clubs'],
    faceValue : [],
    cards : [],

    init : function() {
        for (var i = 1; i <=13; i++) {
            this.faceValue.push(i);
        }

        for (var i = 0; i < this.suit.length; i++) {
            var line = [];
            for (var j = 0; j < this.faceValue.length; j++) {
                var card = this.faceValue[j] + ' of ' + this.suit[i];
                this.cards.push(card);
                line.push(card);
            }
            this.printLine(line);
        }
    },

    print : function() {
        console.log('******************************************************************');
        for (var i = 0; i < this.suit.length; i++) {
            var newFaceValue = this.random(this.faceValue.slice());
            var line = [];
            for (var j = 0; j < newFaceValue.length; j++) {
                var cardArray = this.cards[newFaceValue[j] - 1 + i * 13].split(' ');
                var card = cardArray[2] + '-' + cardArray[0];
                line.push(card);
            }
            this.printLine(line);
        }
    },

    printLine : function(line) {
        var lineToScreen = '';
        for (var i = 0; i < line.length; i++) {
            lineToScreen += line[i] + ', ';
        }
        console.log(lineToScreen.slice(0, lineToScreen.length - 2));
        console.log('----------------------------------------------------------------');
    },

    random : function(array) {
        for (var i = 0; i < array.length; i++) {
            var k = Math.floor(Math.random() * i);
            var temp = array[k];
            array[k] = array[i];
            array[i] = temp;
        }
        return array;
    },

    shuffle : function() {
        this.cards = this.random(this.cards);
    }
};

deck.init();
deck.print();
deck.shuffle();
deck.print();