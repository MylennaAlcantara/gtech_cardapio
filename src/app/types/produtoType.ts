export interface ProdutoType{
   id: number,
   id_filial: number,
   id_produto: number,
   id_grupo: number,
   nome_produto: string,
   descricao_produto: string,
   preco_venda: number,
   foto: Blob,
   estoque: number,
   id_usuario_cadastro: number,
   data_hora_cadastro: Date,
}