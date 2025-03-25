export interface Filmes {
  id: number;
  nome: string;
  idDiretor: number;
  ano: number;
  idAtor: number
}
export interface Diretores {
  id:number
  nome: string;
  idade: number;
}
export interface Atores {
  id: number;
  nome: string;
  idade: number;
}