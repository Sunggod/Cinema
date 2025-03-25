export interface Filmes {
  id: number;
  nome: string;
  diretores: Diretores[];
  ano: number;
  bannerUrl:string
  atores: Atores[]
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