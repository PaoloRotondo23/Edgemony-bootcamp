/*------------------------------------------------------------------
----------------------------- CARDS --------------------------------
--------------------------------------------------------------------*/

const createCard = (array, country) => {
    const cardWrapper = document.querySelector(".cardWrapper");
    const divEl = document.createElement("div");
    const cardHTML = array.map(city => `
        <div class="card">
            <img src="${city.cover_image_url}" alt="${city.cover_image_url}">
                <h3>${city.name}</h3>
                    <p>${textReduce(city.content)}</p>
        </div>`
    ).join("");

    divEl.innerHTML = `
       <h2 class="section" id="${country}">${country}</h2>
        <div class="wrapper">
            ${cardHTML}
        </div>
        `
    cardWrapper.appendChild(divEl);
};

/*------------------------------------------------------------------
----------------------------- JSON ---------------------------------
--------------------------------------------------------------------*/

let dataArray = [];

fetch("https://api.musement.com/api/v3/cities.json")
    .then((res) => res.json() )
    .then((data) => {
        
        createCard(data.filter(obj => obj.country.iso_code === "FR"), "France");
        createCard(data.filter(obj => obj.country.iso_code === "IT"), "Italy");
        createCard(data.filter(obj => obj.country.iso_code === "ES"), "Spain");
        createCard(data.filter(obj => obj.country.iso_code === "PT"), "Portugal");
        createCard(data.filter(obj => obj.country.iso_code === "GR"), "Greece");
        createCard(data.filter(obj => obj.country.iso_code === "DE"), "Germany");

    }
);

/*------------------------------------------------------------------
--------------------------- TEXT REDUCE ----------------------------
--------------------------------------------------------------------*/

const textReduce = (content) => {
    return content.split("").slice(0, 70).join("") + "...";
};