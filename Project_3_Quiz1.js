import Title from "./Project_3_title.js";

export default class extends Title {
    constructor() {
        super();
        this.setTitle("Quiz 1")
    }

    async getHtml() {
        return `
            <h1>Quiz 1</h1>
            <p>
                You are now on Quiz 1
            </p>
            <p>
                <a href="/Quiz 1" data-link> Quiz 1</a>
            </p>
        `;
    }
}