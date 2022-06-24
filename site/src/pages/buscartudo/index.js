import Cabe from '../../components/cabecalho'

export default function Index(){
    return(
        <main className='tag-mae'>
            <Cabe />
            <div>
                <h1>Buscar todos os viloês</h1>
            </div>
            <div>
                <thead className='tabela'>
                    <tr>
                        <th>informacão para achar vilão</th>
                        <th>Nome do vilao</th>
                    </tr>
                </thead>
            </div>
        </main>
    )
}