import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Country() {
  const country = useSelector((state) => state.countries.activeCountry)
  const [description, setDescription] = useState("")

  useEffect(() => {
    const getDescription = async() => {
      const desc = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${country?.name?.common}`)
      setDescription(desc.data.extract)
    }

    getDescription()
  }, [country])

  return (
    <div className="country-container">
      <h2 className="mt-3">Country</h2>
      <div className="text-center">
        <h1 className="text-9xl">{country ? country.flag : ""}</h1>
      </div>
      <h2>{country ? country.name.common : ""}</h2>
      <p className="text-xs m-10 mt-3 line-clamp-4 h-100 block">{description}</p>
    </div>
  )
}

export default Country
