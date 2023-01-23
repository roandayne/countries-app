import { useEffect, useState } from 'react'
import axios from 'axios'
import { Pagination, Stack } from '@mui/material'
import usePagination from '../hooks/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { countriesSelector, initializeCountriesData, setActiveCountry } from '../redux/countriesReducer'

function CountriesList() {
  const countries = useSelector((state) => countriesSelector.selectAll(state.countries) ?? [])
  const dispatch = useDispatch()
  const PER_PAGE = 20

  const paginatedCountries = usePagination(countries, PER_PAGE);

  useEffect(() => {
    const getCountries = async() => {
      const countries = await axios.get(`https://restcountries.com/v3.1/all`)
      dispatch(initializeCountriesData(countries.data))
    }

    getCountries()
  }, [])

  const handleClick = (country) => {
    dispatch(setActiveCountry(country))
  }

  const handleChange = (e, page) => {
    setPage(page)
    paginatedCountries.jump(page)
  }

  return (
    <div className="countries-list-container">
      <h2>Countries List</h2>
      <ul>
        {paginatedCountries.currentData().map((country) => {
          return (
            <li key={country.name.common} onClick={() => handleClick(country)}>
              <a className='country-text' href='#'>{country.name.common}</a>
            </li>
          )
        })}
      </ul>
      <Stack spacing={2}>
        <Pagination boundaryCount={1} size='small' onChange={handleChange} count={countries.length} variant="outlined" />
      </Stack>
    </div>
  )
}

export default CountriesList
