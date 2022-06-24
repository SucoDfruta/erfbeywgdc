import { Router } from "express";
import { buscar, inserir, buscarportodos} from "../repository/repository.js"; 

const server = Router();


server.get('/anime/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const busca = await buscar(id);

        resp.send({
            anime:busca
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.post('/anime/inserir', async (req, resp) => {
    try {
    const nome = req.body;
    const y = await inserir(nome);

        resp.send(
            y
        )
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.get('/anime/', async (req, resp) => {
    try {
        const busca = await buscarportodos();

        resp.send({
            anime:busca
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});


export default server;