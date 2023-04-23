import PrayerTimes from "@/components/PrayerTimes";
import CityOption from "@/components/CityOption";
import Header from "@/components/Header";
import Body from "@/components/Body";


export async function getServerSideProps(context) {
  const { city } = context.query;
  
  const apiKey = process.env.API_URL
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const allData = await fetch(`${apiKey}${city}/${year}/${month}/${day}`)
  const rawData = await allData.json()

  return {
    props: {
      data: rawData.data,
      schedule: rawData.data.jadwal
    }
  }
}

export default function Home({ data, schedule }) {
  return (
    <>  
      <div className="h-80 bg-cover bg-hero">
        <Header data={data} schedule={schedule} />
        <Body jadwal={schedule} />
    </div>
    </>
  )
}
