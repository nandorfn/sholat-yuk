import Header from "@/components/Header";
import Body from "@/components/Body";


export async function getServerSideProps(context) {
  const { city = '1301' } = context.query;
  const apiKey = process.env.API_URL


  const today = new Date();  
  const date = today.toLocaleDateString('zh-Hand-CN', { timeZone: "Asia/Jakarta" })
  let [year, month, day] = date.split('/')
  let localDate = `${year}/${month}/${day}`;
  
  const {customDate = localDate} = context.query;

  // today.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  // let wib = today.toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour: "numeric", minute: "numeric", hour12: false });
  // console.log(wib);

  const allData = await fetch(`${apiKey}${city}/${customDate}`)
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
