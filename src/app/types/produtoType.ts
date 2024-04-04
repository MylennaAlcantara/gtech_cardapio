export interface ProdutoType{
   id: number,
   id_filial: number,
   id_produto: number,
   descricao_produto: string,
   preco_venda: number,
   foto: Blob,
   estoque: number,
   id_usuario_cadastro: number,
   data_hora_cadastro: Date,
}