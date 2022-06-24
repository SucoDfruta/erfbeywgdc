import Cabe from '../../components/cabecalho'

export default function Index(){
    return(
        <main className='tag-mae'>
            <Cabe />
            <div>
                <h1>Buscar todos os animes</h1>
            </div>
            <div>
                <thead className='tabela'>
                    <tr>
                        <th>Indentificação</th>
                        <th>Nome do anime</th>
                    </tr>
                </thead>
            </div>
        </main>
    )
}