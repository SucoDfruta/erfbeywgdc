import { Router } from "express";

const server = Router();


server.get('/anime/:id', (req, resp) => {
    try {
        const id = req.params.id;
        const y = anime(id);

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



