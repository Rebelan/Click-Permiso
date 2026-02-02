import { Formulario } from './Componentes/Formulario'
import { Header } from './Componentes/Header'
import { Navbar } from './Componentes/Navbar'


export const Pagina = () => {
    return (
        <>

       
            <div id="content">
                <header>
                    <Header />
                    <Navbar />
                </header>
                    <Formulario />
                <footer>

                </footer>
            </div>
        </>
    )
}
