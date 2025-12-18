const requestCharactersURL = `https://thronesapi.com/api/v2/Characters`;
const requestContinentsURL = `https://thronesapi.com/api/v2/Continents`;

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

function createTargaryenCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-targaryen">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/targaryenSigil.png" alt="House Stark Sigil" class="stark-sigil">
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
                    <img class="stark-sigil" src="./assets/img/lannisterSigil.png" alt="House Stark Sigil" class="stark-sigil">
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
    const continentsData = await fetchUrlFromAPI(`https://thronesapi.com/api/v2/Continents`);
    if (continentsData ) {
        const continentsCards = continentsData.map(createContinentsCard).join('');
        continentsSection.innerHTML = continentsCards;
    } else {
        continentsSection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}

displayContinentsThrone();

function createBaratheonCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-baratheon">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/baratheonSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createTyrellCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-tyrell">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseTyrellSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createMormontCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-mormont">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseMormontSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createBoltonCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-bolton">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseBoltonSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createGreyjoyCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-greyjoy">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/greyjoySigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createOthersCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-greyjoy">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${firstName} ${lastName}</h2>
                    <h3>${family}</h3>
                    <h3>${title}</h3>
                </div>
            </div>
        </div>
    `;
}

async function displayAllHousesThrone() {
    const AllHousesSection = document.getElementById('allHousesSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const lannisterCharacters = characterData.filter(character => character.family === 'House Lannister' || character.family === 'House Lanister' || character.family === 'Lanister' || character.family === 'Lannister');
        const starkCharacters = characterData.filter(character => character.family === 'House Stark'|| character.family === 'Stark');
        const boltonCharacters = characterData.filter(character => character.family === 'House Bolton'|| character.family === 'Bolton');
        const mormontCharacters = characterData.filter(character => character.family === 'House Mormont'|| character.family === 'Mormont');
        const tyrellCharacters = characterData.filter(character => character.family === 'House Tyrell'|| character.family === 'Tyrell');
        const baratheonCharacters = characterData.filter(character => character.family === 'House Baratheon' || character.family === 'Baratheon');
        const greyjoyCharacters = characterData.filter(character => character.family === 'House Greyjoy' || character.family === 'Greyjoy');
        const targaryenCharacters = characterData.filter(character => character.family === 'House Targaryen' || character.family === 'Targaryan'|| character.family === 'Targaryan');
        const usedFamilies = ['House Greyjoy', 'Greyjoy','House Targaryen','House Targaryan', 'Targaryan','House Lannister', 'Lannister', 'House Lanister', 'Lanister', 'House Stark', 'Stark', 'House Bolton', 'Bolton', 'House Mormont', 'Mormont', 'House Tyrell', 'Tyrell', 'House Baratheon', 'Baratheon'];
        const othersHouses = characterData.filter(character => !usedFamilies.includes(character.family));
        const baratheonCards = baratheonCharacters.map(createBaratheonCard).join('');
        const greyjoyCards = greyjoyCharacters.map(createGreyjoyCard).join('');
        const tyrellCards = tyrellCharacters.map(createTyrellCard).join('');
        const mormontCards = mormontCharacters.map(createMormontCard).join('');
        const boltonCards = boltonCharacters.map(createBoltonCard).join('');
        const lannisterCards = lannisterCharacters.map(createLannisterCard).join('');
        const starkCards = starkCharacters.map(createStarkCard).join('');
        const othersCards = othersHouses.map(createOthersCard).join('');
        const targaryenCards = targaryenCharacters.map(createTargaryenCard).join('');
        const allHousesCards = lannisterCards + starkCards + boltonCards + mormontCards + tyrellCards + baratheonCards + othersCards + greyjoyCards + targaryenCards;
        AllHousesSection.innerHTML = allHousesCards;
    } else {
        AllHousesSection.innerHTML = '<p>No hemos podido encontrarlos.</p>';
    }
}

displayAllHousesThrone();