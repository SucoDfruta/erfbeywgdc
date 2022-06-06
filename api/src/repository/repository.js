import { con } from './connection.js'

export async function buscar(id) {
    const comando =
        `SELECT id_anime		id,
                nm_anime		nome
           FROM tb_lista
          WHERE id_anime = ? `;
    
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function inserir(anime) {
    const comando = 
        `INSERT INTO tb_filme (id_anime, nm_anime)
                       VALUES (?, ?) `
    
    const [resposta] = await con.query(comando, [anime.nome]);
    anime.id = resposta.insertId;

    return filme;
}
