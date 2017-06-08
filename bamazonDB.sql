CREATE DATABASE if not exists bamazonDB; 

use bamazonDB; 

create table products(

    item_id INTEGER(11) AUTO_INCREMENT NOT NULL, 
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER (30) NOT NULL,
    stock_quantity INTEGER (30) NOT NULL, 
    PRIMARY KEY (item_id) 



); 

insert into products (product_name,department_name,price,stock_quantity)values("coffee grounds","food","5","10"); 
insert into products (product_name,department_name,price,stock_quantity)values("romper","clothing","65","15"); 
insert into products (product_name,department_name,price,stock_quantity)values("iphone","electronics","750","1000"); 
insert into products (product_name,department_name,price,stock_quantity)values("headphones","electronics","35","75"); 
insert into products (product_name,department_name,price,stock_quantity)values("cups","home appliances","7.50","750"); 
insert into products (product_name,department_name,price,stock_quantity)values("guess who","toys","5.50","30"); 
insert into products (product_name,department_name,price,stock_quantity)values("t-shirts","clothing","8.99","150"); 