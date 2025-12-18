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

function createContinentsCard({name}) {
    return `
        <div class="card">
            <h2>${name}</h2>
        </div>
    `;
}

async function fetchCharactersThroneJson() {
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