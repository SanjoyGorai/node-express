import express from 'express';
import cors from 'cors';
const PORT = 3000;
import pg from 'pg';
const { Pool } = pg;
const app = express();
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'student',
    user: 'postgres',
    password: 'sanjoypql'
});

pool.connect((error)=>{
    if (error) {
        console.log(error);
    }
    console.log("Postgres connected successfully");
})

// const result = pool.query('SELECT * FROM postgres')

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


app.listen(PORT, () => {
    console.log(`Express server listening on port http://localhost:${PORT}`);
});