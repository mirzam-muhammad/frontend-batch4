function Tombol({tulisan, warna, onClick}) {
    return (
        <div>
            <img src={tombolURL} alt={tulisan} />
            <p>{warna}</p>
            <p>{tulisan}</p>
        </div>
    )
}

export {Tombol}