\c postgres
DROP DATABASE IF EXISTS shop_anwendung;
CREATE DATABASE shop_anwendung;
\c shop_anwendung

DROP TABLE IF EXISTS product;
CREATE TABLE product
(
    id          BIGINT PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description TEXT,
    price       BIGINT       NOT NULL,
    stock       INT       default (0)
);

INSERT INTO product (id, name, description, price, stock)
VALUES (1, 'Laptop Pro', 'High-performance laptop for professionals', 1500, 5),
       (2, 'Wireless Mouse', 'Ergonomic wireless mouse with long battery life', 25, 2),
       (3, 'Gaming Chair', 'Comfortable gaming chair with lumbar support', 120, 0);
