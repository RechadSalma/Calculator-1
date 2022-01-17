import CalculatorDOM from "../components/calculator/CalculatorDOM.js";

function Home() {
    return `
        <h1>Calculator page</h1>
        <a href="/side">side page</a>
        ${CalculatorDOM()}
    `;
}

export default Home;
