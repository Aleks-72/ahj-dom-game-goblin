import Field from "./pageClass/fieldGame"
import Page from "./pageClass/header"
import Game from "./game";

export default function generatePage() {
    const page = new Page(document.querySelector("body"));
    page.generateHeader();
    page.generateMain();
    const field = new Field(document.querySelector("main"));
    field.createFieldBoxes(4); // Передаем размер стороны поля - в данному случае поле 4*4;
    
    let game = new Game();
    game.startGame();
}