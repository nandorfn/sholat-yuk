import { useState } from "react";
import Link from "next/link";

export default function CustomDate({jadwal}) {
    const [customDate, setCustomDate] = useState('')

    const handleChange = (event) => {
        const format = event.target.value;
        const date = format.split('-').join('/');
        setCustomDate(date);
    };



    return (
        <>
            <h1 className="text-center mt-16 text-xl">Atur Tanggal</h1>
            <div className="text-center bg-sky-300 p-2 rounded-lg mt-2 mx-12 ">
                <label for="start">Tanggal: </label>
                <input className="ml-10 bg-white rounded-md px-2 text-lg" onChange={handleChange} type="date" id="start" name="trip-start"
                    min="2021-01-01" max="2030-12-31" required pattern="\d{4}/\d{2}/\d{2}/" />
                <Link href={`/?customDate=${customDate}`} passHref>
                    <button className="py-2 mt-4 px-4 bg-white rounded-lg" >Search</button>
                </Link>
            </div>
        </>
    );
}
