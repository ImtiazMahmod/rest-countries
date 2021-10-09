const loadCountries = ()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
///to apply display grid, convert to string element not as array

/// using concate with empty string ``

/* const displayCountries = (countries)=>{
    const countryContainer = document.getElementById('countries');
    let countryHtm = ``
    countries.map(country=>countryHtm += getCountryHtml(country))
       countryContainer.innerHTML = countryHtm     
   
} */

/// using join method of array
const displayCountries = (countries)=>{
    const countryContainer = document.getElementById('countries');
   const  countryHtml = countries.map(country=> getCountryHtml(country))
       countryContainer.innerHTML = countryHtml.join( ' ')     
   
}
const getCountryHtml = (country)=>{
    
    return (`
        <div class='country'> 
            <h4>${country.name}</h4>
            <p>${country.capital}</p>
            <img src="${country.flag}">
        </div>
    `)
}
loadCountries();
