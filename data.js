const API = 'https://api.tvmaze.com/shows';
const element = document.getElementById('tvshows');

function getData(urlApi) {
    fetch(urlApi)
    .then((response) => response.json())
    .then(data => {
        let output = data.slice(0, 8).map(function(show) {
        return `              
        <div class="container-fluid">
        <div class="card" style="width: 18rem;">
            <a href="${show.url}" target="_blank" class="ajusteLink"> 
                <img src="${show.image.medium}" class="" alt="${show.name}">
                <div class="card-body">
                    <h3 class="card-title">${show.name}</h3>
                    <p><strong>Año:</strong> ${show.premiered}</p>
                    <p><strong>Genero:</strong> ${show.genres}</p>
                    <p class="card-text">${show.summary}</p>
                    <a href="${show.url}" target="_blank" class="btn btn-primary">Ver más detalles</a>
                </div>
            </a>                                
        </div>  
    </div>        
        `
        }).join('');
        element.innerHTML = output;
    })
    .catch(error => console.log(error));
};

getData(API);


