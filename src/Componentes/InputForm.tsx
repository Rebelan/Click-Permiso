
interface inputForm {
    tipo: string,
    nombreInput: string
    texto: string
}

export const InputForm = ({ tipo, nombreInput, texto}: inputForm) => {
    return (
        <>  
            <h3>{nombreInput}</h3>
            <input type={tipo} name="" id=""/>{texto}
        </>
    )
}
