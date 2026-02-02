interface botonInfo {
    texto: string,
    tipo: string,
}

export const Boton = ({ texto, tipo }: botonInfo) => {
    return (
        <>
            <button id={tipo}>{texto}</button>
        </>
    )
}
