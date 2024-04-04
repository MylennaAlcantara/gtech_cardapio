export interface GrupoType{
    ID: number,
    DESCRICAO: string,
    codigo: string,
    EXCLUIDO: string,
    DATA_EDICAO: string,
    DATA_EXCLUSAO: string,
    DATA_INSERCAO: string,
    ID_USUARIO_EDICAO: number,
    ID_USUARIO_EXCLUSAO: number,
    ID_USUARIO_INSERCAO: number,
    GC_ID_IMPRESSORA: number,
    IMAGEM: Blob,
}