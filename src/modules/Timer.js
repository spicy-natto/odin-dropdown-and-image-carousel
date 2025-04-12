class Timer {
    #callback;
    #timerStart;
    #secondsLeft;
    #interval;

    constructor(callback, timerStart = 5) {
        this.#callback = callback;
        this.#timerStart = timerStart;
        this.#secondsLeft = this.#timerStart;
    }

    #countdown() {
        if (this.#secondsLeft === 0 ) {
            this.#callback();
        } else {
            this.#secondsLeft--;
        }
    }

    start() {
        this.#interval = setInterval(this.#countdown, 1000);
    }

    stop() {
        clearInterval(this.#interval);
    }
}

export default Timer;