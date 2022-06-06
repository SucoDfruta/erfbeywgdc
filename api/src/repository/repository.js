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