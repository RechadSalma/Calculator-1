import Calculator from "../components/calculator/Calculator.js";

function Home() {
    return `
        <h1>Calculator page</h1>
        <a href="/side">side page</a>
        ${Calculator()}
    `;
}

export default Home;
