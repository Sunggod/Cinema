CREATE DATABASE CINEMA;
USE CINEMA;

CREATE TABLE Diretores  (
    idDiretor INT PRIMARY KEY IDENTITY(1,1),
    nomeDiretor VARCHAR(100) NOT NULL,
    idadeDiretor INT NOT NULL,
    nacionalidadeDiretor VARCHAR(100) NOT NULL
);
CREATE TABLE Filmes  (
    idFilme INT PRIMARY KEY IDENTITY(1,1),
    nomeFilme VARCHAR(100) NOT NULL,
    generoFilme VARCHAR(100) NOT NULL,
    dataLancamento DATE NOT NULL,
    idDiretor INT NOT NULL,
    idAtor INT NOT NULL,
    FOREIGN KEY (idDiretor) REFERENCES Diretores(idDiretor),
    FOREIGN KEY (idAtor) REFERENCES Atores(idAtor)
);
CREATE TABLE Atores  (
    idAtor INT PRIMARY KEY IDENTITY(1,1),
    nomeAtor VARCHAR(100) NOT NULL,
    idadeAtor INT NOT NULL,
    nacionalidadeAtor VARCHAR(100) NOT NULL
);

