import { Router } from "express";

const server = Router();


server.get('/anime/:nome', (req, resp) => {
    try {
        const nome = req.params.nome;
        const y = anime(nome);

        resp.send({
            anime:y
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});



