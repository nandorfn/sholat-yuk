import React from 'react';

export default function MonthPrayer(props) {
  const jadwal = props.monthSchedule?.jadwal || [];

  

  return (
    <>
      {/* <div>{props.monthSchedule.daerah}</div>
      <div className='grid grid-cols-2 gap-4 m-4'>
        {jadwal.map((schedule) => (
          <div key={schedule.tanggal} className="prayerList grid mb-2 text-lg border p-4 shadow-md rounded-lg ">
            {Object.entries(schedule).map(([key, value]) => (
              <div key={key} className='bg-sky-300 grid-rows-6'>
                <p>{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
                <p className="text-end">{value}</p>
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </>
  );
}
