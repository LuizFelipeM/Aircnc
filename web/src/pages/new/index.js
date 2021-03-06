import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }){
    const [ thumb, setThumb ] = useState(null);
    const [ company, setCompany ] = useState('');
    const [ techs, setTechs ] = useState('');
    const [ price, setPrice ] = useState('');

    const preview = useMemo(() => {
        return thumb ? URL.createObjectURL(thumb) : null;
    }, [thumb])

    async function handleSubmit(e){
        e.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumb', thumb);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, { headers: {user_id} })

        history.push('/dashboard')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label id="thumb" className={ thumb ? 'hasThumb' : '' } style={{ backgroundImage: `url(${preview})` }}>
                    <input
                        type="file"
                        onChange={e => setThumb(e.target.files[0])}
                    />
                    <img src={camera} alt="Select img"/>
                </label>

                <label htmlFor="company">EMPRESA *</label>
                <input
                    id="company"
                    placeholder="Sua empresa incrível"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />

                <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
                <input
                    id="techs"
                    placeholder="Quais tecnologias usam?"
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />

                <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
                <input
                    id="price"
                    placeholder="Valor cobrado por dia"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />

                <button className="btn" type="submit">Cadastrar</button>
            </form>
        </>
    )
}