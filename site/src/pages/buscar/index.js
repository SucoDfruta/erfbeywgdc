import Cabe from '../../components/cabecalho'

export default function Index(){
    return(
        <main className='tag-mae'>
            <Cabe />
            <div>
                <h1>Buscar todos os viloês</h1>

                <input type=' text ' name=' search ' placeholder=' buscar ' />
            
            </div>
        </main>
    )
}