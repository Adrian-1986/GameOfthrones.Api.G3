const requestCharactersURL = `https://thronesapi.com/api/v2/Characters`;
const requestContinentsURL = `https://thronesapi.com/api/v2/Continents`;

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

function createStarkCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-stark">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseStark.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createLannisterCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-lannister">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseStark.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createContinentsCard({name}) {
    return `
        <div class="card">
            <h2>${name}</h2>
        </div>
    `;
}

async function fetchCharactersThroneJson() {
    try {
        const response = await fetch(requestCharactersURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}



async function fetchContinentsThroneJson() {
    try {
        const response = await fetch(requestContinentsURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}



async function displayContinentsThrone() {
    const continentsSection = document.getElementById('throneContinentsSection');
    const continentsData = await fetchContinentsThroneJson();
    if (continentsData ) {
        const continentsCards = continentsData.map(createContinentsCard).join('');
        continentsSection.innerHTML = continentsCards;
    } else {
        continentsSection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}

displayContinentsThrone();

async function displayCharactersThrone() {
    const charactersSection = document.getElementById('throneCharactersSection');
    const charactersData = await fetchCharactersThroneJson();
    if (charactersData) {
        const charactersCards = charactersData.map(createCharactersCard).join('');
        charactersSection.innerHTML = charactersCards;
    } else {
        charactersSection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}

displayCharactersThrone();

async function displayHouseStarkThrone() {
    const starkSection = document.getElementById('houseStarkSection');
    const houseStarkData = await fetchCharactersThroneJson();
    if (houseStarkData ) {
        const starkCharacters = houseStarkData.filter(character => character.family === 'House Stark' || character.family === 'Stark');
        const charactersStarkCards = starkCharacters.map(createStarkCard).join('');
        starkSection.innerHTML = charactersStarkCards;
    } else {
        starkSection.innerHTML = '<p>Los Starks han escapado de nosotros.</p>';
    }
}

displayHouseStarkThrone();

async function displayHouseLannisterThrone() {
    const lannisterSection = document.getElementById('houseLannisterSection');
    const houseLannisterData = await fetchCharactersThroneJson();
    if (houseLannisterData ) {
        const lannisterCharacters = houseLannisterData.filter(character => character.family === 'House Lannister' || character.family === 'House Lanister' || character.family === 'Lanister' || character.family === 'Lannister');
        const charactersLannisterCards = lannisterCharacters.map(createLannisterCard).join('');
        lannisterSection.innerHTML = charactersLannisterCards;
    } else {
        lannisterSection.innerHTML = '<p>Los Starks han escapado de nosotros.</p>';
    }
}

displayHouseLannisterThrone();

async function displayHouseTargaryenThrone() {
    const targaryenSection = document.getElementById('houseTargaryenSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const targaryenCharacters = characterData.filter(character => character.family === 'House Targaryen'|| character.family === 'Targaryan');
        const charactersTargaryenCards = targaryenCharacters.map(createLannisterCard).join('');
        targaryenSection.innerHTML = charactersTargaryenCards;
    } else {
        targaryenSection.innerHTML = '<p>Los Starks han escapado de nosotros.</p>';
    }
}

displayHouseTargaryenThrone();

async function displayTwoHousesThrone() {
    const twoHousesSection = document.getElementById('twoHousesSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData ) {
        const lannisterCharacters = characterData.filter(character => character.family === 'House Lannister' || character.family === 'House Lanister' || character.family === 'Lanister' || character.family === 'Lannister');
        const starkCharacters = characterData.filter(character => character.family === 'House Stark'|| character.family === 'Stark');
        const oneHouseCards = lannisterCharacters.map(createLannisterCard).join('');
        const secondHouseCards = starkCharacters.map(createStarkCard).join('');
        const twoHousesCards = oneHouseCards + secondHouseCards;
        twoHousesSection.innerHTML = twoHousesCards;
    } else {
        twoHousesSection.innerHTML = '<p>Los Lannister han escapado de nosotros.</p>';
    }
}

displayTwoHousesThrone();