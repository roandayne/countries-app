import { useSelector } from 'react-redux'

function CountryDetails() {
  const country = useSelector((state) => state.countries.activeCountry)

  return (
    <div className="country-details-container">
      <h2 class="mt-3">Country Details</h2>
      <div class='flex flex-row'>
        <div className='image-container'>
          <img
            className='coats-of-arms'
            src={`${country?.coatOfArms?.png ? country.coatOfArms.png : 'https://picsum.photos/150'}`}
            alt={country?.name?.common ? country.name.common: ""}
            loading="lazy"
          />
        </div>
        <div class='flex flex-row flex-wrap p-3 text-xs'>
          <div class="m-3">
            <h3 class='text-gray-500'>Official Name</h3>
            <p>{country?.name?.official ? country?.name.official : ""}</p>
          </div>
          <div class="m-3"v>
            <h3 class='text-gray-500'>Population</h3>
            <p>{country?.population ? country.population : 0}</p>
          </div>
          <div class="m-3">
            <h3 class='text-gray-500'>Continent</h3>
            <p>{country ? country.continents[0] : ""}</p>
          </div>
          <div class="m-3">
            <h3 class='text-gray-500'>Currency</h3>
            <p>{country?.currencies ? Object.values(country.currencies)[0].name : ""} {country && Object.keys(country).some(key => key == 'currencies') ? Object.values(country.currencies)[0].symbol : ""}</p>
          </div>
          <div class="m-3">
            <h3 class='text-gray-500'>Capital</h3>
            <p>{country?.capital ? country.capital[0] : ""}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CountryDetails
