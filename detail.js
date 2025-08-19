const content = document.getElementById('detail');
let id = Number(window.location.hash.replace("#", ""));

async function fetchCharacter(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();

  content.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}" width="200"/>
    <ul>
      <li><strong>Espécie:</strong> ${character.species}</li>
      <li><strong>Gênero:</strong> ${character.gender}</li>
      <li><strong>Mundo/Dimensão:</strong> ${character.origin.name}</li>
      <li><strong>Status:</strong> ${character.status}</li>
    </ul>
    <a href="index.html">Voltar para a lista</a>
  `;
}

fetchCharacter(id);