import Image from "next/image"
import CityOption from "./CityOption";

export default function Header({data, schedule}) {
  return (
    <>  
      <div>
        <div>
          <CityOption data={data} jadwal={schedule}/>
        </div>
      
        <div className="translate-y-24 text-center">
            <h1 className="normal-case text-white font-bold inset-x-2 inset-y-24 text-2xl">{data.lokasi}</h1>
            <p className="text-white">{schedule.tanggal}</p>
        </div>
      </div>
    </>
  )
}
