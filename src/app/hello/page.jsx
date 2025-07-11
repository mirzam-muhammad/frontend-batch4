import { KataMutiara } from "@/components/greeting"

export default function HelloPage() {
    const nama = "Mirzam"

function sayHello() {
    return `Apa kabarmu hari ini ${nama}`
}

const isLogin = false

    return (
        <div>
            <h1 className="hello-text">Halo, Selamat Datang {nama}.</h1>
            <p>{10+15}</p>
            <p>{sayHello()}</p>
            <p>{isLogin ? "Kamu sudah login" : "Kamu belum login"}</p>
            <KataMutiara nama={"Alesha"}/>
        </div>
    )
}