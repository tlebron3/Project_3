import Title from "./Project_3_title.js";

export default class extends Title {
    constructor() {
        super();
        this.setTitle("Quizzes")
    }

    async getHtml() {
        return `
            <h1>Quizzes</h1>
            <p>
                There are two quizzes that you can take: Quiz 1 and Quiz 2
            </p>
            <p>
                <a href="/Quiz Menu" data-link> Quiz Menu</a>
            </p>
        `;
    }
}