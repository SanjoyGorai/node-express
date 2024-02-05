import express from 'express';
import cors from 'cors';
const PORT = 3000;
import pg from 'pg';
const { Pool } = pg;
const app = express();
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
console.log(results.rows);

const insertQuery = `INSERT INTO student (name,phone) VALUES
('Sanjoy Dutta', 5874896874 ),
 ('Akshay Khanna', 4587588914),
 ('Raj kumar',4478578495 ),
 ('Priyanka Chopra', 7788445511)
`
pool.query(insertQuery);

// const updateQuery = `UPDATE student SET name = 'Rajnath Singh', phone = '8756975755' WHERE id = 7`
// pool.query(updateQuery);

const deleteQuert = `DELETE FROM student WHERE id = 19`;
pool.query(deleteQuert)

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(cors());

app.get('/', function (req, res) {
    res.send('Express JS Server');
});
app.get('/ejs', (req, res) => {
    res.render('index');
});

app.get('/images', (req, res) => {
});


