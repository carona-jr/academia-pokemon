/* Com este Script do PostgreSQL não é possível utilizar o sistema Web, visto que desta forma, a senha não está criptografada. Quando o usuário realiza o login, o servidor do Backend verifica a senha criptografada e não em texto */
/* populando tabela usuario */

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, num_cartao, data_vencimento, nome_cartao, cod_cartao, data_cadastro) VALUES ('20729032035', 'ana clara', '232864871', '1997-05-29', 'rua dos alfeneiros', 126, 'vila dos peixes', 'futebolandia', 'sp', 17000000, 'anaclara@email.com', '123', '5300351747784679', '2025-09-06', 'ana clara pedroso', '125', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, num_cartao, data_vencimento, nome_cartao, cod_cartao, data_cadastro) VALUES ('60790310007', 'giovanna', '228631282', '1998-10-26', 'rua aracy pelegrino', '145', 'bairro dos jardins', 'bauru', 'sp', 17030161, 'giovanna@email.com', '123', '5397980880572188', '2027-05-02', 'giovanna smith', '658', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, num_cartao, data_vencimento, nome_cartao, cod_cartao, data_cadastro) VALUES ('24233447087', 'carlos', '385739564', '1997-05-29', 'rua do limoeiro', 1698, 'vila rocha', 'minas gerais', 'mg', 17030162, 'carlos@email.com', '123', '5117354619104524', '2021-10-22', 'carlos junior','698', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, num_cartao, data_vencimento, nome_cartao, cod_cartao, data_cadastro) VALUES ('07614545001', 'leandro', '392686818', '1997-05-29', 'rua dos arvoreiros', 125, 'vila das arvores', 'arvolandia', 'sp', 17015000, 'leandro@email.com', '123', '5150193727137994', '2021-07-22', 'leandro adriano','198','2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password,  num_cartao, data_vencimento, nome_cartao, cod_cartao,data_cadastro) VALUES ('02662037016', 'lucas', '399736505', '1997-05-29', 'travessa do sorvete', 154, 'jardim das nuvens', 'sorvetelandia', 'rj', 11520500, 'lucas@email.com', '123', '5403063724565841', '2020-12-22', 'lucas pederzine','659', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('77442470009', 'manassés', '328153308', '1997-05-29', 'alameda das flores', 253, 'vila dos flores', 'flor de jaboticaba', 'mg', 17520033, 'manasses@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('41168784050', 'eduarda', '371344979', '1997-05-29', 'avenida castelo branco', 259, 'vila cardia', 'bauru', 'sp', 17030165, 'eduarda@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('05681951081', 'andré', '259122567', '1997-05-29', 'rua pedro oliveira', 298, 'jardim colonial', 'agudos', 'sp', 170009800, 'andre@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('84908380031', 'priscila', '424997939', '1997-05-29', 'rua lucio boni sao pedro', 2089, 'vila novo horizonte', 'marília', 'rj', 17986000, 'priscila@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('15664537043', 'paulo', '497322109', '1997-05-29', 'rua dos camargos', 1936, 'vila irma lucia', 'santa cruz do rio pardo', 'sp', 17023690, 'paulo@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('56095509041', 'roberta', '272898752', '1997-05-29', 'rua jose da silva martha', 896, 'vila nove de abril', 'pardinho', 'mg', 18960000, 'roberta@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('78104092049', 'nilceu', '163204263', '1997-05-29', 'rua da inconfidendia', 126, 'vila independente', 'sao paulo', 'sp', 17023900, 'nilceu@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('05549499037', 'rafaela', '442767511', '1997-05-29', 'rua dos bandeirantes', 126, 'vila novazelandia', 'rio de janeiro', 'rj', 17003900, 'rafaela@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('22434664067', 'giovani', '147258', '1997-05-29', 'rua barbosa de lima', 1286, 'vila augusta', 'herlinda', 'sp', 19845000, 'giovani@email.com', '123', '2020-05-29');

INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password, data_cadastro) VALUES ('52112066064', 'pedro', '502501522', '1997-05-29', 'rua marechal teodoro', 896, 'vila dos generais', 'america paulista', 'sp', 17009876, 'pedro@email.com', '123', '2020-05-29');

/* populando tabela treinador */

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('20729032035', '525254235', '2000', 'usp', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('60790310007', '631463645', '5989', 'uninove', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('24233447087', '646752536', '5394', 'unesp', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('07614545001', '238497439', '7643', 'unesp', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('02662037016', '893729234', '6453', 'uninove', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('77442470009', '293875202', '5348', 'usp', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('41168784050', '021545488', '1800', 'mackenzie', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('05681951081', '151515155', '19998', 'mackenzie', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('84908380031', '684544899', '152525', 'unesp', '2020-05-29');

INSERT INTO Treinador (cpf, cpts, salario_base, instituto, data_cadastro) VALUES ('15664537043', '157088469', '10000000', 'unesp', '2020-05-29');

/* populando tabela especialidade */

INSERT INTO Especialidade (cpf, especialidade) VALUES ('20729032035', 'fogo');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('60790310007', 'agua');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('24233447087', 'terra');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('07614545001', 'inseto');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('02662037016', 'voador');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('77442470009', 'noturno');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('41168784050', 'planta');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('05681951081', 'fantasma');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('84908380031', 'normal');

INSERT INTO Especialidade (cpf, especialidade) VALUES ('15664537043', 'fada');

/* populando tabela mestre */

INSERT INTO mestre (cpf, data_cadastro) VALUES ('07614545001', '2020-05-27');

INSERT INTO mestre (cpf, data_cadastro) VALUES ('24233447087', '2020-05-27');

INSERT INTO mestre (cpf, data_cadastro) VALUES ('60790310007', '2020-05-27');

INSERT INTO mestre (cpf, data_cadastro) VALUES ('02662037016', '2020-05-27');

INSERT INTO mestre (cpf, data_cadastro) VALUES ('20729032035', '2020-05-27');

/* populando tabela proficiencia */

INSERT INTO proficiencia (cpf, proficiencia) VALUES ('60790310007', 'mestrado em botânica'), ('60790310007', 'mestrado em herbologia');

INSERT INTO proficiencia (cpf, proficiencia) VALUES ('02662037016', 'mestrado em inteligência artificial');

INSERT INTO proficiencia (cpf, proficiencia) VALUES ('24233447087', 'mestrado em física');

INSERT INTO proficiencia (cpf, proficiencia) VALUES ('07614545001', 'doutorado em história');

INSERT INTO proficiencia (cpf, proficiencia) VALUES ('20729032035', 'doutorado em fogo');

/* populando tabela pokemon */

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('claudio', 'pikachu', 'eletrico', 5, 20, '2020-04-27', '2020-08-27', '2020-05-27', '20729032035');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('pebinho', 'ivysaur', 'grama', 6, 10, '2020-04-27', '2020-08-27', '2020-05-27', '20729032035');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('anderson', 'jynx', 'gelo', 89, 100, '2020-04-27', '2020-08-27', '2020-05-27', '20729032035');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('jose', 'entei', 'normal', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '60790310007');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('mr m.', 'kadabra', 'psiquico', 98, 99, '2020-05-27', '2020-08-27', '2020-05-27', '60790310007');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('ratatui', 'raticate', 'normal', 87, 99, '2020-05-27', '2020-08-27', '2020-05-27', '60790310007');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('ramiro', 'rayquaza', 'normal', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '24233447087');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('berranteiro', 'Vulpix', 'fogo', 56, 78, '2020-05-27', '2020-08-27', '2020-05-27', '24233447087');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('boyzinho', 'machop', 'lutador', 16, 87, '2020-05-27', '2020-08-27', '2020-05-27', '24233447087');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('boyzao', 'machamp', 'lutador', 26, 87, '2020-05-27', '2020-08-27', '2020-05-27', '24233447087');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('cleito', 'charmander', 'fogo', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '07614545001');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('mestre', 'hypno', 'psiquico', 15, 28, '2020-05-27', '2020-08-27', '2020-05-27', '07614545001');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('minhoquinha', 'caterpie', 'inseto', 15, 28, '2020-05-27', '2020-08-27', '2020-05-27', '07614545001');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('ruan', 'squirtle', 'agua', 5, 20, '2020-05-27', '2020-11-27', '2020-05-27', '02662037016');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('azulão', 'blastoise', 'agua', 58, 96, '2020-05-27', '2020-11-27', '2020-05-27', '02662037016');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('trio', 'dugtrio', 'terra', 54, 66, '2020-05-27', '2020-11-27', '2020-05-27', '02662037016');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('maria', 'darkrai', 'normal', 5, 20, '2020-06-27', '2020-11-27', '2020-05-27', '77442470009');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('rosangela', 'charizard', 'fogo', 65, 70, '2020-06-27', '2020-11-27', '2020-05-27', '77442470009');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('amiga', 'raichu', 'eletrico', 5, 20, '2020-06-27', '2020-11-27', '2020-05-27', '77442470009');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('nilce', 'bumbassaur', 'planta', 5, 20, '2020-05-27', '2020-12-27', '2020-05-27', '41168784050');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('leon', 'poliwhirl', 'agua', 55, 70, '2020-05-27', '2020-12-27', '2020-05-27', '41168784050');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('lua', 'electrode', 'eletrico', 55, 73, '2020-05-27', '2020-12-27', '2020-05-27', '41168784050');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('carrll', 'meow', 'normal', 5, 20, '2020-05-27', '2020-12-27', '2020-05-27', '05681951081');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('sang', 'tentacool', 'agua', 25, 70, '2020-05-27', '2020-12-27', '2020-05-27', '05681951081');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('edward', 'magneton', 'eletrico', 58, 100, '2020-05-27', '2020-12-27', '2020-05-27', '05681951081');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('marxx', 'blastoise', 'agua', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '84908380031');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('antony', 'cloyster', 'agua', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '84908380031');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('salve', 'drowzee', 'psiquico', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '84908380031');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('bilbo', 'raichu', 'eletrico', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '15664537043');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('bibinho', 'gloom', 'grama', 1, 10, '2020-05-27', '2020-08-27', '2020-05-27', '15664537043');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('bibizinha', 'exeggcute', 'grama', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '15664537043');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('smeagol', 'snorlax', 'normal', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '56095509041');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('smeal', 'grimer', 'venenoso', 89, 95, '2020-05-27', '2020-08-27', '2020-05-27', '56095509041');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('sil', 'primeape', 'lutador', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '56095509041');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('kleiton', 'pikachu', 'eletrico', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '78104092049');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('rob', 'kangaskhan', 'normal', 99, 100, '2020-05-27', '2020-08-27', '2020-05-27', '78104092049');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('bobson', 'porygon', 'normal', 13, 27, '2020-05-27', '2020-08-27', '2020-05-27', '78104092049');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('jorge', 'pidgeotto', 'voador', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '05549499037');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('marcos', 'furret', 'normal', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '05549499037');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('vinicius', 'typhlosion', 'fogo', 85, 89, '2020-05-27', '2020-08-27', '2020-05-27', '05549499037');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('josef', 'raiquaza', 'agua', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '22434664067');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('set', 'skiploom', 'voador', 73, 80, '2020-05-27', '2020-08-27', '2020-05-27', '22434664067');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('offset', 'seel', 'agua', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '22434664067');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('claudinhodesmotivado', 'psyduck', 'agua', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '52112066064');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('hamilton', 'magikarp', 'agua', 5, 20, '2020-05-27', '2020-08-27', '2020-05-27', '52112066064');

INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ('bless', 'girafarig', 'psiquico', 8, 50, '2020-05-27', '2020-08-27', '2020-05-27', '52112066064');

/* populando tabela departamento */

INSERT INTO departamento (codigo_dept, nome_dept, classificacao, gerente) VALUES (666, 'departamento de aprimoramento', 'fogo', '07614545001');

INSERT INTO departamento (codigo_dept, nome_dept, classificacao, gerente) VALUES (157, 'departamento de agua', 'agua', '24233447087');

INSERT INTO departamento (codigo_dept, nome_dept, classificacao, gerente) VALUES (1, 'departamento de terra', 'terra', '60790310007');

INSERT INTO departamento (codigo_dept, nome_dept, classificacao, gerente) VALUES (2, 'departamento de ar', 'ar', '02662037016');

/* populando tabela trabalha */

INSERT INTO trabalha (codigo_dept, cpf) VALUES (666, '60790310007');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (1, '41168784050');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (666, '20729032035');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (157, '60790310007');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (1, '24233447087');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (157, '07614545001');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (2, '02662037016');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (2, '77442470009');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (666, '41168784050');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (157, '05681951081');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (2, '84908380031');

INSERT INTO trabalha (codigo_dept, cpf) VALUES (1, '15664537043');

/* populando tabela aprimora */

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (1, '20729032035', '2020-07-14 14:54:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (2, '02662037016', '2020-05-07 15:13:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (3, '15664537043', '2020-05-17 11:43:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (4, '84908380031', '2020-05-08 09:45:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (5, '20729032035', '2020-12-02 17:34:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (6, '60790310007', '2020-03-21 16:10:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (7, '02662037016', '2020-01-01 16:30:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (8, '15664537043', '2020-01-20 16:30:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (9, '84908380031', '2020-05-13 13:00:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (10, '84908380031', '2020-09-2 15:18:00', '2020-05-27 17:44:00');

INSERT INTO aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES (11, '60790310007', '2020-11-12 10:15:00', '2020-05-27 17:44:00');

/* populando telefone */

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('20729032035', '998194401');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('02662037016', '998194402');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('24233447087', '998174403');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('77442470009', '998194404');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('05549499037', '998194405');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('41168784050', '998194406');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('05681951081', '998194407');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('52112066064', '998194408');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('60790310007', '998194409');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('22434664067', '998194410');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('84908380031', '998194411');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('78104092049', '998194412');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('52112066064', '998194413');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('15664537043', '998194414');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('15664537043', '998194415');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('07614545001', '998194416');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('56095509041', '998194417');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('07614545001', '998194419');

INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ('84908380031', '998194420');
