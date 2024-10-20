// Assignment 1 Task 1
const publicKey = '41b840dae9a9fb35db11140418553aac';
const privateKey = 'c36afbddff0194db0350efdd584e19ee7778b5b8'
const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
// Task 2
async function fetchCharacters() {
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey); 
    const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        updateUI(data.data.results);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}
// Task 3
function updateUI(characters) {
    const characterContainer = document.getElementById('characters');
    characterContainer.innerHTML = ''; 
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
            <p>${character.description ? character.description : 'No description available'}</p>
        `;
        characterContainer.appendChild(characterDiv);
    });
}

function md5(value) {
    return CryptoJS.MD5(value).toString();
}

document.addEventListener('DOMContentLoaded', fetchCharacters);