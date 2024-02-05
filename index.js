import express from 'express';

const app = express();
const PORT = 7788;

app.get('/', function (req, res) {
    res.send('Express JS Server');
});


app.listen(PORT, () => {
    console.log("Express server listening on port:", PORT);
});
