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
    const continentsData = await fetchUrlFromAPI(`https://thronesapi.com/api/v2/Continents`);
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
                    <img class="stark-sigil" src="./assets/img/houseStark.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

async function displayHouseBaratheonThrone() {
    const baratheonSection = document.getElementById('houseTargaryenSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const baratheonCharacters = characterData.filter(character => character.family === 'House Baratheon'|| character.family === 'Baratheon');
        const charactersBaratheonCards = baratheonCharacters.map(createBaratheonCard).join('');
        baratheonSection.innerHTML = charactersBaratheonCards;
    } else {
        baratheonSection.innerHTML = '<p>Los Baratheon han escapado de nosotros.</p>';
    }
}

displayHouseBaratheonThrone();

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
                    <img class="stark-sigil" src="./assets/img/houseStark.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

async function displayHouseGreyjoyThrone() {
    const greyjoySection = document.getElementById('houseGreyjoySection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const greyjoyCharacters = characterData.filter(character => character.family === 'House Greyjoy'|| character.family === 'Baratheon');
        const charactersGreyjoyCards = greyjoyCharacters.map(createBaratheonCard).join('');
        greyjoySection.innerHTML = charactersGreyjoyCards;
    } else {
        greyjoySection.innerHTML = '<p>Los Baratheon han escapado de nosotros.</p>';
    }
}

displayHouseGreyjoyThrone();



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
                    <img class="stark-sigil" src="./assets/img/houseStark.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

async function displayHouseTyrellThrone() {
    const tyrellSection = document.getElementById('houseTyrellSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const tyrellCharacters = characterData.filter(character => character.family === 'House Tyrell'|| character.family === 'Tyrell');
        const charactersTyrellCards = tyrellCharacters.map(createBaratheonCard).join('');
        tyrellSection.innerHTML = charactersTyrellCards;
    } else {
        tyrellSection.innerHTML = '<p>Los Baratheon han escapado de nosotros.</p>';
    }
}

displayHouseTyrellThrone();

function createMormontCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-Mormont">
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

async function displayHouseMormontThrone() {
    const mormontSection = document.getElementById('houseMormontSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const mormontCharacters = characterData.filter(character => character.family === 'House Mormont'|| character.family === 'Mormont');
        const charactersMormontCards = mormontCharacters.map(createBaratheonCard).join('');
        mormontSection.innerHTML = charactersMormontCards;
    } else {
        mormontSection.innerHTML = '<p>Los Baratheon han escapado de nosotros.</p>';
    }
}

displayHouseMormontThrone();

function createBoltonCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-Bolton">
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

async function displayHouseBoltonThrone() {
    const boltonSection = document.getElementById('houseBoltonSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const boltonCharacters = characterData.filter(character => character.family === 'House Bolton'|| character.family === 'Bolton');
        const charactersBoltonCards = boltonCharacters.map(createBaratheonCard).join('');
        boltonSection.innerHTML = charactersBoltonCards;
    } else {
        boltonSection.innerHTML = '<p>Los Baratheon han escapado de nosotros.</p>';
    }
}

displayHouseBoltonThrone();

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
        const targaryenCharacters = characterData.filter(character => character.family === 'House Targaryen' || character.family === 'Targaryan'|| character.family === 'Targaryan');
        const usedFamilies = ['House Targaryen','House Targaryan', 'Targaryan','House Lannister', 'Lannister', 'House Lanister', 'Lanister', 'House Stark', 'Stark', 'House Bolton', 'Bolton', 'House Mormont', 'Mormont', 'House Tyrell', 'Tyrell', 'House Baratheon', 'Baratheon'];
        const othersHouses = characterData.filter(character => !usedFamilies.includes(character.family));
        const baratheonCards = baratheonCharacters.map(createBaratheonCard).join('');
        const tyrellCards = tyrellCharacters.map(createBaratheonCard).join('');
        const mormontCards = mormontCharacters.map(createBaratheonCard).join('');
        const boltonCards = boltonCharacters.map(createBaratheonCard).join('');
        const lannisterCards = lannisterCharacters.map(createLannisterCard).join('');
        const starkCards = starkCharacters.map(createStarkCard).join('');
        const othersCards = othersHouses.map(createStarkCard).join('');
        const targaryenCards = targaryenCharacters.map(createLannisterCard).join('');
        const allHousesCards = lannisterCards + starkCards + boltonCards + mormontCards + tyrellCards + baratheonCards + othersCards + targaryenCards;
        AllHousesSection.innerHTML = allHousesCards;
    } else {
        AllHousesSection.innerHTML = '<p>Los Lannister han escapado de nosotros.</p>';
    }
}

displayAllHousesThrone();