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
        const charactersTargaryenCards = targaryenCharacters.map(createTargaryenCard).join('');
        targaryenSection.innerHTML = charactersTargaryenCards;
    } else {
        targaryenSection.innerHTML = '<p>Los Starks han escapado de nosotros.</p>';
    }
}

displayHouseTargaryenThrone();

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

async function displayHouseMormontThrone() {
    const mormontSection = document.getElementById('houseMormontSection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        const mormontCharacters = characterData.filter(character => character.family === 'House Mormont'|| character.family === 'Mormont');
        const charactersMormontCards = mormontCharacters.map(createBaratheonCard).join('');
        mormontSection.innerHTML = charactersMormontCards;
    } else {
        mormontSection.innerHTML = '<p>Los Mormont han escapado de nosotros.</p>';
    }
}

displayHouseMormontThrone();

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

async function displayHouseGreyjoyThrone() {
    const greyjoySection = document.getElementById('houseGreyjoySection');
    const characterData = await fetchCharactersThroneJson();
    if (characterData) {
        constgGreyjoyCharacters = characterData.filter(character => character.family === 'House Greyjoy'|| character.family === 'Greyjoy');
        const charactersGreyjoyCards = greyjoyCharacters.map(createBaratheonCard).join('');
        greyjoySection.innerHTML = charactersGreyjoyCards;
    } else {
        greyjoySection.innerHTML = '<p>Los Baratheon han escapado de nosotros.</p>';
    }
}

displayHouseGreyjoyThrone();