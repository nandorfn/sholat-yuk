import CityOption from "./CityOption";
import PrayerTimes from "./PrayerTimes";

export default function Body({jadwal}) {
    return (
        <>
            <div className="mt-60 rounded-t-3xl bg-white">
                <CityOption />
                <PrayerTimes jadwal={jadwal}/>
            </div>
        </>
    );
}
