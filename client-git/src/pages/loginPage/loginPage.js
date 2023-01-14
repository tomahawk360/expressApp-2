import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    
    const [userName, setUserName] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');

    const onLogin = (uname, upwd) => {
        const url = `http://localhost:5005/login/${uname}&${upwd}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if(res._id !== 0) {
                    navigate('/index');
                } else {
                    setErrorMsg('Nombre de usuario y/o contraseña invalido. Intente nuevamente.')
                    setUserName('');
                    setUserPassword('');
                }
            });
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const target = event.target;

        onLogin(target.name.value, target.password.value);
    };

    return (
        <div>
            <h1>Login</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre de Usuario
                    <input id="name" type="text" value={userName} onChange={event => setUserName(event.target.value)}/>
                </label>
                <br />
                <label>
                    Contraseña
                    <input id="password" type="password" value={userPassword} onChange={event => setUserPassword(event.target.value)}/>
                </label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
            <h3>{errorMsg}</h3>
        </div>
    )
}

export default LoginPage;