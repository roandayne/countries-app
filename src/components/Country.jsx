import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Country() {
  const country = useSelector((state) => state.countries.activeCountry)
  const [description, setDescription] = useState("")

  useEffect(() => {
    const getDescription = async() => {
      const desc = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${country.name.common}`)
      setDescription(desc.data.extract)
    }

    getDescription()
  }, [country])

  return (
    <div className="country-container">
      <h2 class="mt-3">Country</h2>
      <div class="text-center">
        <h1 class="text-9xl">{country ? country.flag : ""}</h1>
      </div>
      <h2>{country ? country.name.common : ""}</h2>
      <p class="text-xs m-10 mt-3 line-clamp-3 h-100 block">{description}</p>
    </div>
  )
}

export default Country
