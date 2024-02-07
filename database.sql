CREATE TABLE student(
    id SERIAL PRIMARY KEY ,
    name varchar(255),
    phone varchar(255)
    )
INSERT INTO student (name,phone) VALUES ('John Doe', 8745964215)
INSERT INTO student (name,phone) VALUES ('Souman Mondal', 8877445562)
,('Rahul Chaterjee', 7845996845),('Hitesh Choudhary', 7784556987)

INSERT INTO student (name,phone) VALUES ('   ', 0),
('Harry Portar', 8877875456),('Salman Khan', 7744874585), ('Kaya Chaterjee', 9987458152)
 ('Sanjoy Dutta', 5874896874 )
 ('Akshay Khanna', 4587588914)
 ('Raj kumar',4478578495 )
 ('Priyanka Chopra', 7788445511)

 ('Romal Bhui', 8847458745),
 ('Donal Trump', 748984517),
 ('Joe Biden', 7488847584),
 ('Amram Linkan', 5547874874),
 ('Xi Jinping', 7484898541 ),
 ('Narendra Modi', 4457818756 ),
 ('Lalbahabur Sahstri', 4414788845),
 ('Mamta Banerjee', 1147848574 ),
 ('Joti Basu', 4785471575),
 ('Sunil Gorai', 6748745451),
 ('Mithu Gorai',8874845841 ),
 ('Sankari Gorai', 7748484582 ),
 ('Bikah Mondal', 9856874512 ),
 ('Sourabh Saha', 6658748451 ),
 ('John Smith', 5587458956 ),
 ('Amir Khan', 9874512589 ),

('Presanjit Chaterjee',4845157845)
('Gourab Banerjee',775197845)
('Amitv Bachan ', 4415788745)

('Goutam Goswmi', 7484784584),
('Somnath Kor', 9874512546),
('Somnath Saha', 4777856984),
('Subhajit Kumbhaker', 4455778895)
('Amitab Chakrabarti', 4555147845),


// Product table 

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  image bytea NOT NULL,
  title VARCHAR(255) NOT NULL,
  price NUMERIC NOT NULL
);

INSERT INTO products(image, title, price) 
VALUES(bytea_import('C:\\Users\Sanjoy\Desktop\mobile.png'), 'Iqoo Mobile', 25000)



CREATE TABLE images (id SERIAL PRIMARY KEY,image blob NOT NULL);

INSERT INTO images(image) 
VALUES(LOAD_FILE('C:\\Users\Sanjoy\Desktop\mobile.png')

()

CREATE TABLE users (id SERIAL PRIMARY KEY, username TEXT, password VARCHAR(255) );
INSERT INTO users (username, password) VALUES ('JohnDoe1234', 'john1234');
('Sanjoy Gorai', 12345678)
('Harry Porter', 'hary4125')
