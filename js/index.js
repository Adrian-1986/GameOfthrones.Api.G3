const requestCharactersURL = `https://thronesapi.com/api/v2/Characters`;
const requestContinentsURL = `https://thronesapi.com/api/v2/Continents`;

function createStarkCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-stark" class="card house-stark">
                    <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseStark.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createTargaryenCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-targaryen" class="card house-targaryen">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/targaryenSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createLannisterCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-lannister" class="card house-lannister">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family  != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
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


function createBaratheonCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-baratheon" class="card house-baratheon">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family  != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/baratheonSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createTyrellCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-tyrell" class="card house-tyrell">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseTyrellSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createMormontCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-mormont" class="card house-mormont">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family != 'None' && family != ''? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseMormontSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createBoltonCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-bolton" class="card house-bolton">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/houseBoltonSigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createGreyjoyCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-greyjoy" class="card house-greyjoy">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
                <div class="stark-sigil-container">
                    <img class="stark-sigil" src="./assets/img/greyjoySigil.png" alt="House Stark Sigil" class="stark-sigil">
                </div>
            </div>
        </div>
    `;
}

function createOthersCard({ fullName, imageUrl, title, family}) {
    return `
        <div id="house-Greyjoy" class="card house-greyjoy">
            <img src="${imageUrl}" alt="Pinture of the character">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family != 'None' && family != '' ? family : 'Unknown'}</h3>
                    <h3>${title ? title : 'Unknown'}</h3>
                </div>
            </div>
        </div>
    `;
}

async function displayAllHousesThrone() {
    const AllHousesSection = document.getElementById('allHousesSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const hiddenId = 7;
        const visibleCharacters = characterData.filter(character => character.id !== hiddenId);
        const lannisterCharacters = visibleCharacters.filter(character => character.family === 'House Lannister' || character.family === 'House Lanister' || character.family === 'Lanister' || character.family === 'Lannister');
        const starkCharacters = visibleCharacters.filter(character => character.family === 'House Stark'|| character.family === 'Stark');
        const boltonCharacters = visibleCharacters.filter(character => character.family === 'House Bolton'|| character.family === 'Bolton');
        const mormontCharacters = visibleCharacters.filter(character => character.family === 'House Mormont'|| character.family === 'Mormont');
        const tyrellCharacters = visibleCharacters.filter(character => character.family === 'House Tyrell'|| character.family === 'Tyrell');
        const baratheonCharacters = visibleCharacters.filter(character => character.family === 'House Baratheon' || character.family === 'Baratheon');
        const greyjoyCharacters = visibleCharacters.filter(character => character.family === 'House Greyjoy' || character.family === 'Greyjoy');
        const targaryenCharacters = visibleCharacters.filter(character => character.family === 'House Targaryen' || character.family === 'Targaryan'|| character.family === 'Targaryan');
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

function createMapSection( nameList ) {
    return `
        <div class="map-container">
            <h4 class="map-title">Map of the Known World</h4>
                <img src="./assets/img/gameOfThronesMap.png" alt="Mapa de los continentes de Game of Thrones">
                ${nameList.map(name => `<div class="continent ${name.toLowerCase()}">${name}</div>`).join('')}
        </div>
    `;
}

async function displayMapSection() {
    const continentsSection = document.getElementById('continentsSection');
    const nameList = await fetchContinentsThroneJson().then(data => data.map(continent => continent.name));
    const mapSectionHTML = createMapSection(nameList);
    continentsSection.innerHTML = mapSectionHTML;
}

displayMapSection();