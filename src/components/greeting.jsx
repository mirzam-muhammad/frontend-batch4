import { ProfileCard } from "./profileCard"

function KataMutiara({nama, asal}) {
    const text = `Ini kata mutiara untuk ${nama} yang berasal dari ${asal} untuk hari ini`
    const imgUrl = `https://www.pa-selayar.go.id/images/PAS_FOTO/MIRZAM.jpg`
    const userJob = "Pranata Komputer"
    
    return (
        <>
        <ProfileCard imageUrl={imgUrl} nama={nama} job={userJob}/>
        <p>{text}</p>
        </>  
    )
}

export {KataMutiara}