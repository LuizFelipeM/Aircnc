import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){

    const [email, setEmail] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        
        const res = await api.post('/sessions', {email});
        const { _id } = res.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return(
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="enail">E-MAIL*</label>
                <input type="email" id="email" placeholder="Seu melhor e-mail aqui" onChange={e => setEmail(e.target.value)}/>

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}