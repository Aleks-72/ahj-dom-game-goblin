import Goblin from "./pageClass/goblin";

export default class Game {
    constructor() {
        this.score = 0;
        this.error = 0;
        this.status = "active";
    }

    startGame() {
        let fieldBoxes = (document.querySelectorAll(".field-box"));
        let oldCount;
        let count;
        let goblinGenerate = setInterval(() => {
            let oldGoblin = document.querySelector("img")
            if (oldGoblin) {
                oldGoblin.remove()
            }
            count = Math.floor(Math.random()*(16));
            while (count === oldCount) {
                count = Math.floor(Math.random()*(16));
            };
            let goblin = new Goblin(fieldBoxes[count]);
            goblin.createGoblin()
            oldCount = count;
            if (this.status === "end") {
                clearInterval(goblinGenerate)
            }
        }, 1000);
    }

}