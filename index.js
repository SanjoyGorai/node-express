import express from 'express';
import cors from 'cors';
const PORT = 3000;
import pg from 'pg';
const { Pool } = pg;
const app = express();
import getProducts, { getProductFun } from './routers/products.js';
import { insertUsers, selectQuery as select } from './sql-queries/query.js';
import bcrypt from 'bcrypt';

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


app.get('/students', async (req, res) => {
    const results = await pool.query(select)
    res.send(results.rows)
    console.log("Select Result", results.rows[0]);
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


const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

export const insertUserss = `INSERT INTO users (username, password) 
VALUES ('sdsssd', 'justin425')`
const hashPassword =async  (password) => {
    return bcrypt.hash(password, saltRounds)
}
console.log('Salted Password is :', await hashPassword('sanjoy100'));


bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, (err, salt) => {

    })
});

const insertUser = (username, password) => {
    const hashedPassword = hashPassword(password)
    const query = `INSERT INTO users (username, password) 
VALUES ('sdsssd', 'justin425')`


}

app.post('/users', (req, res) => {
    // const results = pool.query(insertUserss);
    insertUser('Sanjoy Singh', 'sanjoy100')
    res.send('Success: ')
});

app.get('/users', async (req, res) => {
    const selectUser = 'select * from users;'
    const users = await pool.query(selectUser)
    console.log('Users Data: ', users.rows);
    res.send(users.rows)
});


// ()