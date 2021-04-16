CREATE TABLE produto(
    id serial PRIMARY KEY,
    nome VARCHAR (250) UNIQUE NOT NULL
);

CREATE TABLE cliente(
    id serial PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE compra_produto(
    produto_id integer NOT NULL,
    cliente_id integer NOT NULL,
    PRIMARY KEY (produto_id, cliente_id),
    FOREIGN KEY (produto_id) REFERENCES produto(id),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);