import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Buscar from './pages/buscar'
import Inserir from './pages/inserir'
import BuscarTudo from './pages/buscartudo'

export default function Index(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Buscar />} />
                <Route path='/inserir' element={<Inserir/>} />
                <Route path='/buscartudo' element={<BuscarTudo/>} />
            </Routes>
        </BrowserRouter>
    )
}