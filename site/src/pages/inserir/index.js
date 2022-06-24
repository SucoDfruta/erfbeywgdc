import Cabe from '../../components/cabecalho'
import Bemvindo from '../../components/bem vindo'
import { cadastrarAnime } from '../../api/usuarioApi'
import { useState } from 'react'
import './index.css'

export default function Index(){
    const [nome, setNome] = useState('')

    async function Click(){
        try {
            const r = await cadastrarAnime(nome);
            alert('anime cadastrado')
        } catch (err) {
            alert(err.message);
        }
    }
    return(
        <main className='tag-mae'>
            < Bemvindo />
            <Cabe />
            <div >
                <hr/>
                <div>
                    <h1>Vamos cadastrar o anime </h1>
                </div>
                
                <div>
                    Nome do anime:
                    <input type='text' className='inputzin'value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={Click}>Salvar</button>
                </div>
            </div>
        </main>
    )
}