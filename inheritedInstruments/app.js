class Instrument {
    constructor(family, verb, loudness) {
        this.family = family;
        this.verb = verb;
        this.loudness = loudness;
    }

    play() {
        console.log("Play an instrument" + this.family + "family");
    }
}

class Woodwind extends Instrument {
    constructor(family) {
        super(family, musical);
    }
}

class Percussion extends Instrument {
    constructor(family) {
        super(family, musical);
    }
}

class String extends Instrument {
    constructor(family) {
        super(family, musical);
    }
}

class Woodwind extends Instrument {
    constructor(verb) {
        super(verb, blow);
    }
}

class Percussion extends Instrument {
    constructor(verb) {
        super(verb, bang);
    }
}

class String extends Instrument {
    constructor(verb) {
        super(verb, flick);
    }
}

class Woodwind extends Instrument {
    constructor(loudness) {
        super(loudness, 50);
    }
}

class Percussion extends Instrument {
    constructor(loudness) {
        super(loudness, 47);

    }
}

class String extends Instrument {
    constructor(loudness) {
        super(loudness, 67);
    }
}