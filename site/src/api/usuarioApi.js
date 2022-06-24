import axios from 'axios'
const api =axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarVilao(nome){
    const resposta = await api.post('/vilao/inserir', {
        nome:nome
    })
    return resposta.data;
    
}