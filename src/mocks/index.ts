import { Atores, Diretores, Filmes } from "../types";

export const filmesMock: Filmes[] = [
    {
      id: 1,
      nome: 'Aventura no Espaço',
      bannerUrl:'banner.jpg',
      diretores: [
        {
          id: 1,
          nome: 'Lucas Souza',
          idade: 30
        },
        {
          id: 2,
          nome: 'Fernanda Lima',
          idade: 27
        },
        {
          id: 3,
          nome: 'Ricardo Costa',
          idade: 35
        }
      ] as Diretores[],
      ano: 2023,
      atores: [ {
        id: 1,
        nome: 'Lucas Souza',
        idade: 30
      },
      {
        id: 2,
        nome: 'Fernanda Lima',
        idade: 27
      },
      {
        id: 3,
        nome: 'Ricardo Costa',
        idade: 35
      }
    ],
    },
    {
      id: 2,
      nome: 'Mistério nas Sombras',
      bannerUrl:'banner.jpg',

      diretores:[
        {
          id: 1,
          nome: 'Lucas Souza',
          idade: 30
        },
        {
          id: 2,
          nome: 'Fernanda Lima',
          idade: 27
        },
        {
          id: 3,
          nome: 'Ricardo Costa',
          idade: 35
        }
      ],
      ano: 2021,
      atores: [ {
        id: 1,
        nome: 'Lucas Souza',
        idade: 30
      },
      {
        id: 2,
        nome: 'Fernanda Lima',
        idade: 27
      },
      {
        id: 3,
        nome: 'Ricardo Costa',
        idade: 35
      }
    ],
    },
    {
      id: 3,
      nome: 'O Último Guardião',
      bannerUrl:'banner.jpg',

      diretores: [
        {
            id: 1,
            nome: 'João Silva',
            idade: 45
          },
          {
            id: 2,
            nome: 'Maria Oliveira',
            idade: 38
          },
          {
            id: 3,
            nome: 'Carlos Pereira',
            idade: 50
          }
      ],
      ano: 2020,
      atores:[ {
        id: 1,
        nome: 'Lucas Souza',
        idade: 30
      },
      {
        id: 2,
        nome: 'Fernanda Lima',
        idade: 27
      },
      {
        id: 3,
        nome: 'Ricardo Costa',
        idade: 35
      }
    ],
    }
  ];
  
  const diretores: Diretores[] = [
    {
      id: 1,
      nome: 'João Silva',
      idade: 45
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      idade: 38
    },
    {
      id: 3,
      nome: 'Carlos Pereira',
      idade: 50
    }
  ];
  
  const atores: Atores[] = [
    {
      id: 1,
      nome: 'Lucas Souza',
      idade: 30
    },
    {
      id: 2,
      nome: 'Fernanda Lima',
      idade: 27
    },
    {
      id: 3,
      nome: 'Ricardo Costa',
      idade: 35
    }
  ];
  
  console.log(filmesMock);
  console.log(diretores);
  console.log(atores);
  