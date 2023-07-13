import Header from "@/components/Header";
import Body from "@/components/Body";
import { useState, useEffect } from "react";


export async function getServerSideProps(context) {
  const { city = '1301' } = context.query;
  const apiKey = process.env.API_URL

  const today = new Date();  
  const date = today.toLocaleDateString('zh-Hand-CN', { timeZone: "Asia/Jakarta" })
  let [year, month, day] = date.split('/')
  let localDate = `${year}/${month}/${day}`;
  
  const {customDate = localDate} = context.query;

  const allData = await fetch(`${apiKey}${city}/${customDate}`)
  const rawData = await allData.json()

  return {
    props: {
      data: rawData.data,
      schedule: rawData.data.jadwal
    }
  }
}

export async function getMonthSchedule() {
  const response = await fetch('https://api.myquran.com/v1/sholat/jadwal/1609/2021/04')
  const jsonData = await response.json();
  return jsonData.data;
}

export default function Home({ data, schedule }) {
  const [monthSchedule, setMonthSchedule] = useState({});

  useEffect(() => {
    const fetchMonthSchedule = async () => {
      const result = await getMonthSchedule();
      setMonthSchedule(result);
    };

    fetchMonthSchedule();
  }, []);
  

  return (
    <>
      <div className="h-80 bg-cover bg-hero">
        <Header data={data} schedule={schedule} />
        <Body jadwal={schedule} monthSchedule={monthSchedule} />
      </div>
    </>
  )
}
