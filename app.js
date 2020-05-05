const express = require('express');
const app = express();
const port = 5500;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`
}));

app.use(express.static('public'));

const mascota = () => {
    return [
        {
        name: 'Thundercat',
        class: 'dog',
        class2: 'fas fa-dog',
        human: 'Edgar'
        },
        {
        name: 'Greta',
        class: 'dog',
        class2: 'fas fa-dog',
        human: 'Diego'
        },
        {
        name: 'Chuches',
        class: 'dog',
        class2: 'fas fa-dog',
        human: 'David'
        },
        {
        name: 'Pol',
        class: 'cat',
        class2: 'fas fa-cat',
        human: 'Eva'
        },
        {
        name: 'Nanu',
        class: 'dog',
        class2: 'fas fa-dog',
        human: 'Javi'
        }
    ]
    }

app.get('/', (req, res) => {
    res.render('main', { layout: 'index', bootcodersPets: mascota()});
});

app.listen(port, () => {
    console.log('App listening to port ${port}');
});


