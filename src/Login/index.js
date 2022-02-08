import { React, useState } from 'react';
import './styles.css';
import logomark from './logomark.png';
import { authenticate } from '../api';

function Login() {
    const [form, setForm] = useState({ email: '', senha: '' });
    const [onceSubmitted, setOnceSubmitted] = useState(false);

    function updateField(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    async function login() {
        if (form.email && form.senha) {
            authenticate(form)
                .then((response) => {
                    localStorage.setItem('token', response.data.token); //JSON Web Token
                    window.location.replace("/app/catalogo");
                })
                .catch((error) => {
                    alert(error.response.data.erro); 
                })
        }
        else {
            setOnceSubmitted(true); 
        }
    }

    return (
        <div className="login-bg">
            <div className="login-card">
                <div>
                    <img src={logomark} className="logomark" alt="logomark" />
                </div>

                <div className="omrs-input-group">
                    <label className="omrs-input-underlined">
                        <input
                            name="email"
                            value={form.email}
                            onInput={e => updateField(e)}
                            type="text"
                            required
                        />
                        <span className="omrs-input-label">Email</span>
                        {onceSubmitted && !form.email &&
                            <span className="omrs-input-helper">*email obrigatório</span>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
                    </label>
                </div>

                <div className="omrs-input-group">
                    <label className="omrs-input-underlined">
                        <input
                            name="senha"
                            value={form.senha}
                            onInput={e => updateField(e)}
                            type="password"
                            required
                        />
                        <span className="omrs-input-label">Senha</span>
                        {onceSubmitted && !form.senha &&
                            <span className="omrs-input-helper">*senha obrigatória</span>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 16c0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723v2.277h-2v-2.277c-.596-.347-1-.985-1-1.723zm11-6v14h-18v-14h3v-4c0-3.313 2.687-6 6-6s6 2.687 6 6v4h3zm-13 0h8v-4c0-2.206-1.795-4-4-4s-4 1.794-4 4v4zm11 2h-14v10h14v-10z" /></svg>
                    </label>
                </div>

                <button
                    onClick={login}
                    className="mt-15"
                    type="button"
                >
                    ENTRAR
                </button>

                <div className="mt-15">
                    <a href="#">Cadastre-se</a>
                </div>
            </div>
        </div>
    )
}

export default Login;