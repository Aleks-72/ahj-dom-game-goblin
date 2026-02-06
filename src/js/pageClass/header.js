export default class Page {
    constructor(element) {
        this._element = element;
    }

    generateHeader() {
        let  header  = document.createElement("header")
        header.textContent = "Goblin Killer Game"
        // header.classList.add("header")
        this._element.appendChild(header)
        console.log("finish header")
    }

    generateMain() {
        let main = document.createElement("main")
        this._element.appendChild(main)
        console.log("finish main")
    }
}