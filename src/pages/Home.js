import Calculator from "../components/calculator";

function Home() {
    return `
        <h1>Calculator page</h1>
        <a href="/side">side page</a>
        ${Calculator()}
    `;
}

export default Home;
