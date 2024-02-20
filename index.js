"use strict";
// https://api.blablagues.net/?rub=blagues premiere des chose tester le lien de l'api dans l'url
const header = document.querySelector("#header");
const content = document.querySelector("#content");
// mettre son fetch dans une fonction 
function getJoke() {
    fetch(' https://api.blablagues.net/?rub=blagues')
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        const dataContent = data.data.content;
        header.textContent = dataContent.text_head;
        content.textContent = dataContent.text !== "" ? dataContent.text : dataContent.text_hidden;
    });
}
window.addEventListener('load', getJoke);
document.body.addEventListener('click', getJoke);
