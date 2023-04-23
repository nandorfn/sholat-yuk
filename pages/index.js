import PrayerTimes from "@/components/PrayerTimes";
import CityOption from "@/components/CityOption";
import Header from "@/components/Header";

export async function getServerSideProps(context) {
  const { city } = context.query;
  console.log(city);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const allData = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${city}/${year}/${month}/${day}`)
  const rawData = await allData.json()
  
  return {
    props: {
      data : rawData.data,
      schedule : rawData.data.jadwal
    }
  }
}

export default function Home( {data,  schedule} ) {
  return (
    <>
      <CityOption />
      <Header data={data}/>
        <PrayerTimes jadwal={schedule}/>
    </>
  )
}
