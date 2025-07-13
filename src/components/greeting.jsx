import { ProfileCard } from "./profileCard"

function KataMutiara({nama, asal}) {
    const text = `Ini kata mutiara untuk ${nama} yang berasal dari ${asal} untuk hari ini`
    const imgUrl = `https:placehold.co/400`
    const userJob = "Pranata Komputer"
    
    return (
        <>
        <ProfileCard imageUrl={imgUrl} nama={nama} job={userJob}/>
        <p>{text}</p>
        </>  
    )
}

export {KataMutiara}