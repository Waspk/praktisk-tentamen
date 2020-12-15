const apiKey = '35e58685686082664f1f';
const apiurl = 'https://restcountries.eu/rest/v2/region/europe';

let form = document.querySelector("#time-form");


let catchError = document.querySelector("#catch-error");

fetch(apiurl).then(
    function (response) {
        response.json().then(function (data) {
            for (let index = 0; index < data.length; index++) {
                if (data[index].name == "Sweden") {
                    addDataToDom(data[index]);
                }
                if (data[index].name == "Finland") {
                    addDataToDom(data[index]);
                }
                if (data[index].name == "Germany") {
                    addDataToDom(data[index]);
                }
            }
        });
    }
);

function addDataToDom(input) {
    let main = document.querySelector('.countries');
    let section = document.createElement("section");
    let img = document.createElement("img");
    img.src = input.flag;
    section.appendChild(img);
    let nameEl = document.createElement("h2");
    nameEl.innerHTML = input.name;
    section.appendChild(nameEl);
    let timeEl = document.createElement("h4");
    timeEl.innerHTML = input.timezones[0];
    section.appendChild(timeEl);
    main.appendChild(section);
}