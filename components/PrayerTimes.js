export default function PrayerTimes({ jadwal }) {
    return (
      <>
        <p>Tanggal: {jadwal.tanggal}</p>
        <p>Imsak: {jadwal.imsak}</p>
        <p>Subuh: {jadwal.subuh}</p>
        <p>Dzuhur: {jadwal.dzuhur}</p>
        <p>Ashar: {jadwal.ashar}</p>
        <p>Magrib: {jadwal.maghrib}</p>
        <p>Isya: {jadwal.isya}</p>
      </>
    );
  }