import { useEffect, useState } from 'react'
import axios from 'axios'
import { Atores, Diretores, Filmes } from './types';

function App() {
  const [filmes, setFilmes] = useState<Filmes[] | []>([])
  const [diretores, setDiretores] = useState<Diretores[] | []>([])
  const [atores, setAtores] = useState<Atores[] | []>([])
  
    useEffect(() => {
      axios.get('http://localhost:3000/filmes')
      .then((response) => {
        setFilmes(response.data);
        console.log('Dados retornados da api', response.data);
      })
      .catch((error) => console.log("Erro ao buscar os dados da api", error));
    }
    ,[])
    useEffect(() => {
      axios.get(`http://localhost:3000/diretor${filmes.map((filme) => filme.idDiretor)}`)
      .then((response) => {
        setDiretores(response.data);
        console.log('Dados retornados da api', response.data);
      })
      .catch((error:any) => console.error("Erro ao buscar os dados da api", error));
    },[])
    useEffect(()=>{
      axios.get(`http://localhost:3000/atores${filmes.map((filme) => filme.idAtor)}`)
      .then((response) => {
        setAtores(response.data);
        console.log('Dados retornados da api', response.data);
      })
      .catch((error:any) => console.error("Erro ao buscar os dados da api", error));
    },[])
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <a className='text-blue-500' href="">teste</a>
    <div className='flex flex-col items-center justify-center'>
      {filmes.map((filme: Filmes) => (
        <div className='flex text-center justify-center' key={filme.id}>
          <h1>{filme.nome  ?? 'Filme aleatorio'}</h1>
          <h3>{filme.ano}</h3>
          <h3>{diretores.map((diretor) => diretor.nome)}</h3>
          <h3>{atores.map((ator) => ator.nome)}</h3>
        </div>
      ))}
    </div>
    </div>
  )
}

export default App
