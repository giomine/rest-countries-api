fetch("https://restcountries.eu/rest/v2/all")
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach((country) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const flag = document.createElement('img')
        flag.src = country.flag

        //----Trying to set the flag imgs as background-image rather than img tag to solve the problem of different image sizes----
        // const flag = document.createElement('div')
        // flag.setAttribute('class', 'flag')
        // imgurl = "url('" + country.flag + "')"
        // console.log(imgurl);
        // const setBackground = document.body.style.backgroundImage = "url('" + imgurl + "')";

        const countryName = document.createElement('h1')
        countryName.textContent = country.name

        const population = document.createElement('p')
        population.innerHTML = "<strong>Population:</strong> " + country.population

        const capital = document.createElement('p')
        capital.innerHTML = "<strong>Capital:</strong> " + country.capital

        const languages = document.createElement('p')
        languages.innerHTML = "<strong>Language:</strong> " + country.languages[0].name

        container.appendChild(card)
        card.appendChild(flag)
        card.appendChild(countryName)
        card.appendChild(population)
        card.appendChild(capital)
        card.appendChild(languages)
    })
})
.catch(err => {
    console.log(err);
})

const app = document.getElementById("root")

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)