import Field from "./pageClass/fieldGame"
import Page from "./pageClass/header"

export default function generatePage() {
    console.log("generate page");
    const page = new Page(document.querySelector("body"));
    console.log(page)
    page.generateHeader();
    page.generateMain();
    console.log("finish page");
    const field = new Field(document.querySelector("main"));
    console.log(field);
    field.createFieldBoxes(4); // Передаем размер стороны поля - в данному случае поле 4*4;
    console.log("add field");
    const fieldBoxes = (document.querySelectorAll(".field-box"));
    let oldCount;
    let count;
    setInterval(() => {
        count = Math.floor(Math.random()*(16));
        while (count === oldCount) {
            count = Math.floor(Math.random()*(16));
        };
        fieldBoxes.forEach((box) => {
            box.classList.remove("active-box");
        });
        fieldBoxes[count].classList.add("active-box");
        oldCount = count;
    }, 1000);
}