
-- Criar produto

INSERT INTO produto (nome) VALUES ('Regata Long Line Masculina - LFM All Black');
INSERT INTO produto (nome) VALUES ('Blusa Moleton com Capuz Masculina - LFM Classic Minimalist');

-- Criar cliente

INSERT INTO cliente (nome) VALUES ('Dwayne Johnson');
INSERT INTO cliente (nome) VALUES ('Will Smith');
INSERT INTO cliente (nome) VALUES ('Henry Cavill');

-- Adicionar produto ao cliente

INSERT INTO compra_produto (produto_id,cliente_id) VALUES (1,1);
INSERT INTO compra_produto (produto_id,cliente_id) VALUES (1,2);
INSERT INTO compra_produto (produto_id,cliente_id) VALUES (2,1);
INSERT INTO compra_produto (produto_id,cliente_id) VALUES (1,3);
INSERT INTO compra_produto (produto_id,cliente_id) VALUES (2,3);
