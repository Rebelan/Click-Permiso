import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/solDiurno">Sol. día diurno</Link></li>
                <li>Sol. dia vespertino</li>
                <li>Mi perfil</li>
                <li>Mis dias Solicitados</li>
                <li>Mis ausencias</li>
            </ul>
        </nav>
    </>
  )
}
