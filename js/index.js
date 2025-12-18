const requestURL = `https://thronesapi.com/api/v2/Characters`;

function createCharactersCard({ firstName, lastName, imageUrl, title, family}) {

    return `
        <div class="card">
            <img src="${imageUrl}" alt="Pinture of the character">
            <h2>${firstName} ${lastName}</h2>
            <h3>${family}</h3>
            <h3>${title}</h3>
        </div>
    `;
}
function createratBaheonCard({ firstName, lastName, imageUrl, title, family}) {

    return `
        <div class="card house-baratheon">
            <img src="${imageUrl}" alt="Pinture of the character">
            <h2>${firstName} ${lastName}</h2>
            <h3>${family}</h3>
            <h3>${title}</h3>
        </div>
    `;
}

async function fetchThroneJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}

async function displayThrone() {
    const throneSection = document.getElementById('throneSection');
    const throneData = await fetchThroneJson();
    if (throneData ) {
        const throneCards = throneData.map(createCharactersCard).join('');
        throneSection.innerHTML = throneCards;
    } else {
        throneSection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}

displayThrone();

async function displayBaheon() {
    const baheonSection = document.getElementById('BaheonSection');
    const BaheonData = await fetchThroneJson();
    if (BaheonData ) {
        const baratheonCharacters = BaheonData.filter(character => character.family === 'House Baratheon');
        const BaheonCards = baratheonCharacters.map(createratBaheonCard).join('');
        baheonSection.innerHTML = BaheonCards;
    } else {
        baheonSection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}

displayBaheon();

async function displayGreyjoy() {
    const  GreyjoySection = document.getElementById('GreyjoySection');
    const  GreyjoyData = await fetchGreyjoyJson();
    if ( GreyjoyData ) {
        const  greyjoyCharacters =  GreyjoyData.filter(character => character.family === 'House Greyjoy');
        const  greyjoyCards =  greyjoyCharacters.map(createGreyjoyCard).join('');
        GreyjoySection.innerHTML =  greyjoyCards;
    } else {
        GreyjoySection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}
displayGreyjoy();
