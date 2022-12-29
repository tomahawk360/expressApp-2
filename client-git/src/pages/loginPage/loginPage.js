import { Link } from 'react-router-dom';

const loginPage = () => {
    return (
        <main>
            <h1>Login</h1>
            <hr />
            <Link to='/index'>Entrar</Link>
        </main>
    )
}

export default loginPage;