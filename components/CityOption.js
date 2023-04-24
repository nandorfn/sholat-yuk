import Link from "next/link"
import { useState } from "react"
import Menu from "./Menu"


export default function CityOption({jadwal}) {
    const [city, setCity] = useState('1107');
    const [popUp, setPopUp] = useState(false);

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleMenuClick = () => {
        setPopUp(!popUp);
    }

    const handleMenuClose = () => {
        setPopUp(false);
    }
    
    return (
        <>
            <Menu jadwal={jadwal} visible={popUp} onClose={handleMenuClose} />
            
            <div className="shadow-md pt-4 flex justify-between mx-8">
                <div className="py-2 px-4 bg-white rounded-l-full">
                    <i onClick={handleMenuClick} className="fa-solid fa-bars cursor-pointer"></i>
                </div>
                <select className="w-full bg-white" onChange={handleChange} value={city}>
                    <option value='1107'>Kota Tangerang</option>
                    <option value='1104'>Kab. Tangerang</option>
                    <option value='1108'>Kota Tangerang Selatan</option>
                    <option value='1301'>Kota Jakarta</option>
                </select>
                
                <Link href={`/?city=${city}`} passHref>
                    <button className="py-2 px-4 bg-cyan-300 rounded-r-full" >Search</button>
                </Link>
            </div>
        </>
    )
}
