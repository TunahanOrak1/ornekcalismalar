// buna alternatif olarak html'de .countries divine 
// id olarak countriesContainer verebilirim
const countriesContainer = document.querySelector('.countries');
let countries = [];
let regions = [];

function createCountryHtml(name, capital, flag, region, population) {
  return `<div class="country-item">
      <img src="${flag}" alt="${name} Bayrağı">
      <div class="country-info">
        <h3>${name}</h3>
        <p><strong>Popülasyon:</strong> ${population}</p>
        <p><strong>Bölge:</strong> ${region}</p>
        <p><strong>Başkent:</strong> ${capital}</p>
      </div>
    </div>`;
}

function render(renderData) {
  countriesContainer.innerHTML = renderData.map(
    x => createCountryHtml(
      x.translations.tur.common, 
      x.capital,
      x.flags.png,
      x.region,
      x.population.toLocaleString()
    )
  ).join('');
}

function handleSearchSubmit(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const formObj = Object.fromEntries(formData);
  
  const filteredCountries = countries.filter(
    x => 
      x.translations.tur.common.toLocaleLowerCase().includes(formObj.country.toLocaleLowerCase()) && x.region.includes(formObj.region)
  );
  
  render(filteredCountries);
}

searchForm.addEventListener('submit', handleSearchSubmit);

function init() {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => {
      countries = res;
      render(countries);

      // Array.from(new Set(countries.map(x => x.region)))
      let allRegions = countries.map(x => x.region);
      for (const region of allRegions) {
        if(regions.includes(region)) {
          continue;
        }
        regions.push(region);
      }

      searchForm["region"].innerHTML += regions.map(x => `<option>${x}</option>`);
    });
}

init();