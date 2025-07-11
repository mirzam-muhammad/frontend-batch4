import {KataMutiara} from '@/components/greeting'

export default function KataPage() {
    const namaUser = "Haykal"
    return (
        <div>
            <KataMutiara nama={namaUser} asal={"Karanganyar"}/>
        </div>
    )
}