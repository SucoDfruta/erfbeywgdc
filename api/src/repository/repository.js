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

export async function inserir(nome) {
    const comando = 
        `INSERT INTO tb_lista (nm_anime)
                       VALUES (?) `
    
    const [resposta] = await con.query(comando, [nome.nome]);
    return resposta;
}



export async function buscarportodos() {
    const comando =
        ` select * 
          from tb_lista`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}