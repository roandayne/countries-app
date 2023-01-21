import { useEffect, useState } from 'react'
import axios from 'axios'
import { Pagination, Stack } from '@mui/material'
import usePagination from '../hooks/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { countriesSelector, initializeCountriesData } from '../redux/countriesReducer'
import { store, useAppSelector } from '../redux/store'

function CountriesList() {
  // const countries = countriesSelector.selectAll(store.getCountries())
  const countries = useAppSelector((state) =>
    countriesSelector.selectAll(state.countries)
  );
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const PER_PAGE = 20

  const count = Math.ceil((countries?.length == 0 ? countries.length : 0) / PER_PAGE);
  const COUNTRIES = usePagination(countries, PER_PAGE);
  
  useEffect(() => {
    const getCountries = async() => {
      const countries = await axios.get(`https://restcountries.com/v3.1/all`)
      dispatch(initializeCountriesData(countries.data))
    }

    getCountries()
  }, [])

  const handleClick = (country) => {
    console.log(country)
  }

  const handleChange = (e, page) => {
    setPage(page)
    COUNTRIES.jump(page)
  }

  return (
    <div className="countries-list-container">
      <h2>Countries List</h2>
      <ul>
        {COUNTRIES.currentData().map((country) => {
          return (
            <li key={country.name.common} onClick={() => handleClick(country)}>
              <a className='country-text' href='#'>{country.name.common}</a>
            </li>
          )
        })}
      </ul>
      <Stack spacing={2}>
        <Pagination boundaryCount={1} size='small' onChange={handleChange} count={countries?.length == 0 ? countries.length : 0} variant="outlined" />
      </Stack>
    </div>
  )
}

export default CountriesList
