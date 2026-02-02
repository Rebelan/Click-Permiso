import { Route, Routes } from 'react-router-dom'
import { Formulario } from './Componentes/Formulario'
import { Header } from './Componentes/Header'
import { Navbar } from './Componentes/Navbar'


export const Pagina = () => {
    return (
        <>


            <Navbar />
            <Routes>

                <Route path='/solDiurno' element={<Formulario />}>

                </Route>
  
            </Routes>



        </>
    )
}
