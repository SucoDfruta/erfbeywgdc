import { con } from './connection.js'



export async function buscar(nome) {
    const comando = 
        `select id_anime 		id,
                nm_anime		nome,
           from tb_lista`
    
    const [linhas] = await con.query(comando, [nome])
    return linhas[0];
}