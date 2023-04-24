export default function PrayerTimes({ jadwal }) {
    const schedule = Object.entries(jadwal);
    const filterSchedule = Array.from(Object.entries(jadwal)).filter(([key, value]) => {
        return key !== "tanggal" && key !== "date" && key !== "terbit"
    })
    
    return (
        <>
            <div className="mx-8">
                <h1 className="text-center mb-4 text-2xl">Jadwal Shalat Hari Ini</h1>

                {filterSchedule.map(([key, value]) => (
                    <div key={key} className="prayerList grid mb-2 grid-cols-2 text-xl border p-4 shadow-md rounded-lg">
                        <p>{key.charAt(0).toUpperCase() + key.slice(1)}: </p>
                        <p className="text-end">{value}</p>
                    </div>
                ))}

            </div>
        </>
    );
}