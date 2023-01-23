import './App.css'
import CountriesList from './components/CountriesList'
import Country from './components/Country'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="main-container">
      <CountriesList />
      <div className='country-country-details-container'>
        <Country />
        <CountryDetails />
      </div>
    </div>
  )
}

export default App
