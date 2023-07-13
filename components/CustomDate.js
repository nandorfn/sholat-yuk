import { useState } from "react";
import Link from "next/link";
import Credit from "./Credit";

export default function CustomDate({jadwal, handleClick}) {
    const [customDate, setCustomDate] = useState('')

    const handleChange = (event) => {
        const format = event.target.value;
        const date = format.split('-').join('/');
        setCustomDate(date);
    };



    return (
        <>
            <h1 className="text-center mt-10 text-xl">Atur Tanggal</h1>
            <div className="text-center bg-sky-300 py-3 rounded-md mt-2 mx-10 grid grid-cols-3">
                <input className="text-center bg-white rounded-md py-1 ml-3 text-md col-span-2" onChange={handleChange} type="date" id="start" name="trip-start"
                    min="2021-01-01" max="2030-12-31" required pattern="\d{4}/\d{2}/\d{2}/" />
                    
                <Link href={`/?customDate=${customDate}`} passHref>
                    <button onClick={handleClick} className="p-2 bg-white rounded-md" disabled={!customDate}>Cari</button>
                </Link>
            </div>
            
            <div className="flex justify-center mt-8">
                <Credit />
            </div>
            
                <p className="text-center text-red-500">This Menu underdevelopment</p>
                <p className="text-center">timeZone = WIB</p>
        </>
    );
}
