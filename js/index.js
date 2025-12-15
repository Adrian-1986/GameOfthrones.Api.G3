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