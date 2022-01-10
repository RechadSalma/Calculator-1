import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import route from "./router/route.js";

window.addEventListener("DOMContentLoaded", (event) => {
    const iKbody = document.getElementsByTagName("body")[0];

    iKbody.innerHTML = `
        <div>
            ${Header()}
            
            <h2>big daddy ilshady GG GG GG</h2>
            ${route()}
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
