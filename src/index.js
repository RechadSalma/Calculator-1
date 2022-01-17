import "bootstrap/dist/css/bootstrap.min.css";
import "./globalCss.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import route from "./router/route.js";

window.addEventListener("DOMContentLoaded", () => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/service-worker.js")
                .then((registration) => {
                    console.log("SW registered: ", registration);
                })
                .catch((registrationError) => {
                    console.log("SW registration failed: ", registrationError);
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

    console.log("iK DOM fully loaded and parsed");
});

// const iKindexjs = () => {
//     const iKdiv = document.createElement("div");

//     iKdiv.textContent = "iK from iKindexjs";

//     iKdiv.style.border = "red 3px solid";

//     console.log("iK from the index.js");

//     return iKdiv;
// }; /*END iKindexjs */

/**
 *
 */
