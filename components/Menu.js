import { useState, useEffect } from 'react';
import CustomDate from "./CustomDate";


export default function Menu({ visible, onClose,jadwal }) {
    const [popUp, setPopUp] = useState(visible);

    useEffect(() => {
        setPopUp(visible);
    }, [visible]);

    const handleClick = () => {
        setPopUp(false);
        onClose();
    };



    return (
        <>
            {popUp && (
                <div className=''>
                    <div className="bg-white z-20  h-full w-72 absolute">
                        <div><i onClick={handleClick} className="fa-solid fa-circle-xmark absolute fa-xl right-3 top-6"></i></div>
                        <CustomDate jadwal={jadwal}/>
                    </div>
                    <div onClick={handleClick} className="bg-black z-10 h-screen absolute w-screen opacity-50"></div>
                </div>
            )}


        </>
    )
}
