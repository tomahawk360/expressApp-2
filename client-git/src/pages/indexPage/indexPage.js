import { Link } from 'react-router-dom';

const indexPage = () => {
    return (
        <main>
            <h1>Bienvenido a la pagina principal</h1>
            <hr />
            <Link to='/'>Salir</Link>
        </main>
    )
}

export default indexPage;