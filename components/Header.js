import Image from "next/image"

export default function Header({data}) {
  return (
    <>
        <div className="relative w-full h-60">
            <h1 className="absolute z-10 text-white inset-x-2 inset-y-24 text-2xl">{data.lokasi}</h1>
            <Image className="object-cover" src='/mosque.jpg' alt="Mosque" fill/>
        </div>
    </>
  )
}
