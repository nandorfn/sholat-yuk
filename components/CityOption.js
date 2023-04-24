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
            
            <div className="drop-shadow-lg pt-4 flex justify-between mx-8">
                <div className="py-2 px-4 bg-white rounded-l-full">
                    <i onClick={handleMenuClick} className="fa-solid fa-bars cursor-pointer"></i>
                </div>
                <select className="w-full bg-white" onChange={handleChange} value={city}>
                    <option value='1301'>Kota Jakarta</option>
                    <option value='1107'>Kota Tangerang</option>
                    <option value='1104'>Kab. Tangerang</option>
                    <option value='1108'>Kota Tangerang Selatan</option>
                    <option value='1203'>Kab. Bekasi</option>
                    <option value='1221'>Kota Bekasi</option>
                    <option value='1225'>Kota Depok</option>
                    <option value='1204'>Kab. Bogor</option>
                    <option value='1222'>Kota Bogor</option>
                    <option value='1433'>Kota Semarang</option>
                    <option value='1423'>Kab. Semarang</option>
                    <option value='1505'>Kota Yogyakarta</option>
                    <option value='1434'>Kota Surakarta</option>
                    <option value='1428'>Kota Wonogiri</option>
                    <option value='1638'>Kota Surabaya</option>
                </select>
                
                <Link href={`/?city=${city}`} passHref>
                    <button className="py-2 px-4 bg-cyan-300 rounded-r-full" >Cari</button>
                </Link>
            </div>
        </>
    )
}
