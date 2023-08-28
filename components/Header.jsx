import Image from "next/image"
import CityOption from "./CityOption";

export default function Header({data, schedule}) {
  return (
    <>  
      <div>
        <div className="max-w-xl mx-auto">
          <CityOption data={data} jadwal={schedule}/>
        </div>
      
        <div className="flex m-auto translate-y-16 flex-col 
        text-center">
            <h1 className="normal-case text-white font-bold text-2xl drop-shadow-lg">{data.lokasi}</h1>
            <p className="text-white drop-shadow-lg">{schedule.tanggal}</p>
        </div>
      </div>
    </>
  )
}
