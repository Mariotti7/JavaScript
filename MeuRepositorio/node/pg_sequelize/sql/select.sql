SELECT * FROM produto;
SELECT * FROM cliente;

SELECT p.nome AS produto, c.nome AS cliente FROM produto AS p, cliente AS c, compra_produto AS cp 
WHERE cp.produto_id = p.id AND cp.cliente_id = c.id;