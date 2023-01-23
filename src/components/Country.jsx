// import { countrySelector } from '../redux/countriesReducer';
// import { useAppSelector } from '../redux/store';

import { useSelector } from "react-redux"

function Country() {
  const country = useSelector((state) => state.countries.activeCountry)
  // const country = useAppSelector((state) =>{countrySelector.selectAll(state.countries)});
console.log(country)
  return (
    <div className="country-container">
      Hi
    </div>
  )
}

export default Country
