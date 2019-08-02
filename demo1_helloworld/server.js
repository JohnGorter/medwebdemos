let express = require('express');
let app = express(); 

app.use(express.static('.'));

app.get('/cars', (req, res)=>{
    res.end(JSON.stringify([
        {make:"honda", model:"civic"},
        {make:"volkswagen", model:"passat"},
        {make:"mercedes", model:"benz"},
        {make:"bmw", model:"5 serie"},
    ]))
})
app.get('/trucks', (req, res)=>{
    res.end(JSON.stringify([
        {make:"scania", model:"whatever"},
        {make:"volvo", model:"whatever"},
        {make:"daf", model:"whatever"},
        {make:"mercedes", model:"whatever"},
    ]))
})

app.listen(8080, () => {
    console.log("I am listening");
});