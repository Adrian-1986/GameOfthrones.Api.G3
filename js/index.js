const isInHtmlFolder = window.location.pathname.includes('/html/');
const pathPrefix = isInHtmlFolder ? '../' : './';

// Ruta al JSON relativa al HTML que carga el script
const requestURL = `${pathPrefix}json/tiendaComics.json`;

function createComicsCard({ name, price, cover }) {
    // cover viene del JSON como "images/loquesea.jpg"
    const imageSrc = `${pathPrefix}${cover}`;

    return `
        <div class="card">
            <img src="${imageSrc}" alt="Portada del comic">
            <h3 class="nameCard">${name}</h3>
            <h3>${price}€</h3>
            <button class="buy"><h3>Comprar</h3></button>
        </div>
    `;
}

async function fetchComicsJson() {
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

async function displayComics() {
    const comicSection = document.getElementById('comicsSection');
    const comicsData = await fetchComicsJson();
    if (comicsData && comicsData.productsComics) {
        const comicsCards = comicsData.productsComics.map(createComicsCard).join('');
        comicSection.innerHTML = comicsCards;
    } else {
        comicSection.innerHTML = '<p>No hemos podido acceder a la libreria.</p>';
    }
}

displayComics();

async function displayFewComics() {
    const comicFewSection = document.getElementById('comicsFewSection');
    const comicsData = await fetchComicsJson();
    if (comicsData && comicsData.productsComics) {
        const allComics = comicsData.productsComics;
        const sliceFewComics = allComics.slice(0, 4);
        const comicsCards = sliceFewComics.map(createComicsCard).join('');
        comicFewSection.innerHTML = comicsCards;
    }
}

displayFewComics();

async function displayPreComics() {
    const comicPreSection = document.getElementById('comicsPreSection');
    const comicsData = await fetchComicsJson();
    if (comicsData && comicsData.productsComics) {
        const allPreComics = comicsData.productsComics.filter(comic => comic.state === 'Pre-venta');
        const slicePreComics = allPreComics.slice(0, 4);
        const comicsCards = slicePreComics.map(createComicsCard).join('');
        comicPreSection.innerHTML = comicsCards;
    }
}

displayPreComics();

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

async function displayRandomComics() {
    const comicRandomSection = document.getElementById('comicsRandomSection');
    const comicsData = await fetchComicsJson();

    if (comicsData && comicsData.productsComics) {
        const allComics = comicsData.productsComics;
        const allShuffleComics = shuffleArray(allComics);
        const sliceRandomComics = allShuffleComics.slice(0, 4);
        const comicsCards = sliceRandomComics.map(createComicsCard).join('');
        comicRandomSection.innerHTML = comicsCards;
    } else {
        comicRandomSection.innerHTML = '<p>Error al cargar la librería de cómics.</p>';
    }
}

displayRandomComics();
