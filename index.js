const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

const chefs = require('./data/chef.json');
const recipes = require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef and Recipe server is Running')
})

app.get('/chef', (req, res) => {
    res.send(chefs);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedItem = chefs.find(chef => chef.id === parseInt(id));
    res.send(selectedItem)
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedItems = recipes.filter(recipe => recipe.chefId === parseInt(id));
    res.send(selectedItems)
})

app.listen(port, () => {
    console.log(`Chef and Recipe is running ${port}`)
  })