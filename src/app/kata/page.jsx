import {KataMutiara} from '@/components/greeting'
import {ButtonComponent} from '@/components/classComponent'

export default function KataPage() {
    const namaUser = "Haykal"
    return (
        <div>
            <KataMutiara nama={namaUser} asal={"Karanganyar"}/>
            <ButtonComponent nama={namaUser}/>
        </div>
    )
}