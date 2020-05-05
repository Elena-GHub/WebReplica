const express = require('express');
const app = express();
const port = 5500;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`
}));

app.use(express.static('public'));


app.listen(port, () => {
    console.log('App listening to port ${port}');
});

$(document).ready(function ()
{
    $.ajax(./contents/mascotas.json).done(function (mascota)
    {
        app.get('/', (req, res) =>
        {
            res.render('main', { layout: 'index', mascotas: mascota() });
        });
    });
});
