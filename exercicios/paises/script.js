const response = await fetch(
    "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/countries.json"
);

const countries = await response.json();

function createFlagBox(country, countries) {
    return `
    <div class='flag'>
        <img src='https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/svg/${country.toLowerCase()}.svg'>
        <p>${countries[country]}</p>
    </div>
    `;
}

function insertFlags(countries) {
    let flagsHTML = "";
    for (const country in countries) {
        flagsHTML += createFlagBox(country, countries);
    }

    document.querySelector("main").innerHTML = flagsHTML;
}

insertFlags(countries);
