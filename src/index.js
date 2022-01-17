import "bootstrap/dist/css/bootstrap.min.css";
import "./globalFiles/globalCss.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import route from "./router/route.js";
import calculatorFunction from "./components/Calculator/calculatorFunction.js";

window.addEventListener("DOMContentLoaded", () => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/service-worker.js")
                .then((registration) => {
                    console.log("SW registered: ", registration);
                })
                .catch((registrationError) => {
                    console.warn("SW registration failed: ", registrationError);
                });
        });
    }

    const iKbody = document.getElementsByTagName("body")[0];

    iKbody.innerHTML = `
        <div>
            ${Header()}
            <main class="container border border-5 rounded">
                ${route()}
            </main>
            ${Footer()}
        </div>
    `;

    calculatorFunction();

    console.log("iK DOM fully loaded and parsed");
}); //END DOMContentLoaded event

/**
 *
 */
