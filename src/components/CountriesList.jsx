import { useEffect } from 'react'
import axios from 'axios'
import { Box, Pagination, Stack, CircularProgress } from '@mui/material'
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
    paginatedCountries.jump(page)
  }

  return (
    <div className="countries-list-container">
      {
        countries.length > 0 ? <>
          <h2 class="p-3 mb-6">Countries List</h2>
          <ul class="mb-6">
            {paginatedCountries.currentData().map((country) => {
              return (
                <li key={country.name.common} onClick={() => handleClick(country)}>
                  <a className='country-text' href='#'>{country.name.common}</a>
                </li>
              )
            })}
          </ul>
        </> : <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }
      <Stack>
        <Pagination siblingCount={0} size='small' onChange={handleChange} count={countries.length} />
      </Stack>
    </div>
  )
}

export default CountriesList
