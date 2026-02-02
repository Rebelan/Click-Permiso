import { Boton } from "./Boton"
import { FooterForm } from "./FooterForm"
import { HeaderForm } from "./HeaderForm"
import { InputForm } from "./InputForm"
import { SelectForm } from "./SelectForm"
import { Textarea } from "./Textarea"


export const Formulario = () => {
    return (
        <>
            <main>
                <form action="">
                    <HeaderForm />
                    <InputForm tipo="Date" nombreInput="Dia solicitado" texto="" />
                    <InputForm tipo="tel" nombreInput="Nº de telefono" texto="" />
                    <SelectForm opcion={["Diurno ☀️", "Vespertino 🌕"]} nombreForm="Turno" />
                    <InputForm tipo="checkbox" nombreInput="" texto="Estoy solicitando un dia de permiso no retribuido"/>
                    <InputForm tipo="checkbox" nombreInput="" texto="¿Causa sobrevenida?"/>
                    <Textarea nombreArea="Justificacion"/>
                    <h3>Documento Justificativo PDF</h3>
                    <Boton texto="Seleccionar Archivo" tipo="gris"/>
                    <br></br>
                    <br />
                    <FooterForm/>
                </form>
            </main>
        </>
    )
}
