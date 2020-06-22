CREATE TABLE Usuario (
    cpf varchar(24),
    nome varchar(64) not null,
    rg varchar(24) not null unique,
    data_nascimento date,
    rua varchar(64),
    num_casa integer,
    bairro varchar(64), 
    cidade varchar(64),
    estado varchar(2) check(estado in ('sp', 'rj', 'mg')),
    cep integer,
    e_mail varchar(64) NOT NULL UNIQUE,
    password varchar(256) NOT NULL,
    num_cartao varchar(64),
    data_vencimento varchar(64),
    nome_cartao varchar(64),
    cod_cartao varchar(5),
    data_cadastro TIMESTAMP,
    PRIMARY KEY (cpf)
);

CREATE TABLE Plano (
     cpf varchar(24) REFERENCES Usuario (cpf) ON DELETE CASCADE ON UPDATE CASCADE,
     codigo_plano integer,
     valor varchar(24),
     data_de_inicio TIMESTAMP,
     duracao integer,
     PRIMARY KEY  (cpf)
);

CREATE TABLE Telefone (
     cpf varchar(24) REFERENCES Usuario (cpf) ON DELETE CASCADE ON UPDATE CASCADE,
     numero_de_telefone varchar(12),
     PRIMARY KEY (cpf, numero_de_telefone)
);

CREATE TABLE Pokemon (
     codigo_pokemon SERIAL,
     cpf varchar(24) REFERENCES Usuario (cpf) ON DELETE CASCADE ON UPDATE CASCADE, 
     nome varchar(64),
     raca varchar(64),
     classificacao varchar(64),
     nivel integer NOT NULL,
     nivel_objetivo integer NOT NULL,
     data_de_entrada TIMESTAMP,
     data_de_saida TIMESTAMP, 
     data_cadastro TIMESTAMP,
     PRIMARY KEY (codigo_pokemon)
);

CREATE TABLE Treinador (
    cpf varchar(24) REFERENCES Usuario (cpf) ON DELETE CASCADE ON UPDATE CASCADE,
    cpts varchar(24) NOT NULL UNIQUE,
    salario_base varchar(24),
    instituto varchar(64),
    data_cadastro TIMESTAMP,
    PRIMARY KEY (cpf)
);

CREATE TABLE Especialidade (
    cpf varchar(24) REFERENCES Treinador(cpf) ON DELETE CASCADE ON UPDATE CASCADE,
    especialidade varchar(64),
    PRIMARY KEY (cpf, especialidade)     
);

CREATE TABLE Mestre (
    cpf varchar(24) REFERENCES Treinador (cpf) ON DELETE CASCADE ON UPDATE CASCADE,
    data_cadastro TIMESTAMP,
    PRIMARY KEY (cpf)     
);

CREATE TABLE Proficiencia (
    cpf varchar(24) REFERENCES Mestre (cpf) ON DELETE CASCADE ON UPDATE CASCADE,
    proficiencia varchar(64),
    PRIMARY KEY (cpf, proficiencia)     
);

CREATE TABLE Departamento (
    codigo_dept integer,
    nome_dept varchar(64) UNIQUE,
    classificacao varchar(64),
    gerente varchar(24) REFERENCES Mestre (cpf) ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY (codigo_dept)
);

CREATE TABLE Aprimora (
    codigo_pokemon integer REFERENCES Pokemon (codigo_pokemon) ON DELETE CASCADE ON UPDATE CASCADE,
    cpf varchar(24) REFERENCES Treinador (cpf) ON DELETE SET NULL ON UPDATE CASCADE,
    hora_de_entrada TIMESTAMP,
    hora_de_saida TIMESTAMP,
    PRIMARY KEY (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida)
);

CREATE TABLE Trabalha (
    codigo_dept integer REFERENCES Departamento (codigo_dept) ON DELETE CASCADE ON UPDATE CASCADE,
    cpf varchar(24) REFERENCES Treinador (cpf) ON DELETE CASCADE ON UPDATE CASCADE,  
    PRIMARY KEY (cpf, codigo_dept)
);

CREATE OR REPLACE FUNCTION add_plan()
RETURNS trigger AS
$BODY$
BEGIN
INSERT INTO Plano (cpf, codigo_plano, valor, data_de_inicio, duracao) VALUES (new.cpf, 0, '0', new.data_cadastro, 999);
RETURN NEW;
END;
$BODY$
LANGUAGE 'plpgsql';

CREATE TRIGGER addPlanBasic
AFTER INSERT ON Usuario
FOR EACH ROW
EXECUTE PROCEDURE add_plan();