import { useState } from "react";
import CustomDate from "./CustomDate";
import PrayerTimes from "./PrayerTimes";

export default function Body({ jadwal }) {


    return (
        <>
            <div className="mt-60 rounded-t-3xl bg-white">
                <PrayerTimes jadwal={jadwal} />
            </div>
        </>
    );
}
