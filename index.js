const root = document.getElementById('root');
const container = document.createElement('div');
const logo = document.createElement('img');
logo.src = 'https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png';
root.appendChild(logo)
container.setAttribute('class', 'container');
root.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films')
.then(res => res.json())
.then(data => {
    data.forEach((movie) => {
        console.log(movie);
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        h1.textContent = movie.title;
        p.textContent = movie.description;
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
    })
})