import Title from "./Project_3_title.js";

export default class extends Title {
    constructor() {
        super();
        this.setTitle("Quiz 2")
    }

    async getHtml() {
        return `
            <h1>Quiz 2</h1>
            <p>
                You are now on  Quiz 2
            </p>
            <p>
                <a href="/Quiz 2" data-link> Quiz 2</a>
            </p>
        `;
    }
}