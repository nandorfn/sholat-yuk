import Link from "next/link"
import { useState } from "react"

export default function CityOption() {
    const [city, setCity] = useState('')

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    return (
        <>
            <div className="shadow-md mb-8 rounded-t-xl pt-4 flex justify-between mx-8">
                <select className="w-full bg-white mr-4" onChange={handleChange} value={city}>
                    <option value='1107'>Kota Tangerang</option>
                    <option value='1104'>Kab. Tangerang</option>
                    <option value='1108'>Kota Tangerang Selatan</option>
                </select>
                <Link href={`/?city=${city}`} passHref>
                    <button className="p-2 bg-cyan-300 rounded-r-md" >Search</button>
                </Link>
            </div>
        </>
    )
}
