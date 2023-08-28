import MonthPrayer from "./MonthPrayer";
import PrayerTimes from "./PrayerTimes";

export default function Body({ jadwal , monthSchedule}) {


    return (
        <>  
        <div className="bg-white rounded-3xl -translate-y-14 mx-auto pb-6 max-w-xl">
            <div className="mt-60 pt-4 rounded-t-3xl bg-white">
                <PrayerTimes jadwal={jadwal} />
                <MonthPrayer monthSchedule={monthSchedule}/>
            </div>
        </div>
        </>
    );
}
