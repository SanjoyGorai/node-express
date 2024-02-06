import express from 'express';
import cors from 'cors';
const PORT = 3000;
import pg from 'pg';
const { Pool } = pg;
const app = express();
import getProducts, { getProductFun } from './routers/products.js';

app.listen(PORT, () => {
    console.log(`Express server listening on port http://localhost:${PORT}`);
});
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'student',
    user: 'postgres',
    password: 'sanjoypql'
});

pool.connect((error) => {
    if (error) {
        console.log(error);
    }
    console.log("Postgres connected successfully");
})

const selectQuery = 'SELECT * FROM student'
const results = await pool.query(selectQuery);
console.log(results.rows[0]);

const insertQuery = `INSERT INTO student (name,phone) VALUES
('Goutam Goswmi', 7484784584),
('Somnath Kor', 9874512546),
('Somnath Saha', 4777856984),
('Subhajit Kumbhaker', 4455778895),
('Amitab Chakrabarti', 4555147845)
  `
// pool.query(insertQuery);

// const updateQuery = `UPDATE student SET name = 'Rajnath Singh', phone = '8756975755' WHERE id = 7`
// pool.query(updateQuery);

const deleteQuert = `DELETE FROM student WHERE id = 19`;
// pool.query(deleteQuert)

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(cors());


app.get('/students', (req, res) => {
    res.send(results.rows[0])
})

//find student by id
app.get('/students/:id', async (req, res) => {
    const id = req.params.id;
    const selectQuery = `SELECT * FROM student WHERE id = ${id}`;
    const results = await pool.query(selectQuery);
    // res.send(results.rows)
});

app.get('/api/students/names', (req, res) => {
    const name = req.query.name;
    if (name != null) {
        const selectName = `SELECT * FROM student WHERE name = ${name}`;
        const results = pool.query(selectName);
        req.send(results.rows);
        console.log(req.query.name);
    } else {
        res.send("No name parameter provided")
    }
});

// ()
app.get('/api/students', async (req, res) => {
    const id = req.query.id;
    if (req.query.id != null) {
        try {
            // const nameQuery = `SELECT * FROM student `;
            const nameQuery = `SELECT * FROM student WHERE id = ${id}`;
            const search = await pool.query(nameQuery)
            res.send(search.rows);
            console.log(req.query.id);
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const nameQuery = `SELECT * FROM student `;
            const search = await pool.query(nameQuery)
            res.send(search.rows)
        } catch (error) {
            console.log(error);
        }
    }
})

app.put('/students', async (req, res) => {
    const insertQuery = `INSERT INTO student (name,phone) values
    ('Presanjit Chaterjee',4845157845),
    ('Amitv Bachan ', 4415788745)    `
    // const insert = await pool.query(insertQuery);
    // res.send(insert)
});

app.get('/', function (req, res) {
    res.send('Express JS Server');
});
app.get('/ejs', (req, res) => {
    res.render('index');
});

app.get('/images', (req, res) => {
});

app.use('/products', getProductFun);
