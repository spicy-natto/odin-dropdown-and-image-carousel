class Timer {
    #timerStart;
    #secondsLeft;
    #interval;

    constructor(timerStart = 5) {
        this.#timerStart = timerStart;
        this.#secondsLeft = this.#timerStart;
    }

    #countdown(callback) {
        if (this.#secondsLeft === 0 ) {
            callback();
            this.reset();
        } else {
            this.#secondsLeft--;
        }
    }

    start(callback) {
        this.#interval = setInterval(() => this.#countdown(callback), 1000);
    }

    stop() {
        clearInterval(this.#interval);
    }

    reset() {
        this.#secondsLeft = this.#timerStart;
    }
}

export default Timer;