import express from 'express';
import ejs from 'ejs';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));


app.get('/', function (req, res) {
    res.send('Express JS Server');
});
app.get('/ejs', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log("Express server listening on port:", PORT);
});
