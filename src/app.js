const express = require('express'); //import exprseess
const app = express() //créer l'app

app.get('/', (req, res) => {//envoie des information au frontend de base
//req = ce que veut l'utilisateur / res = utilise pour renvoyer la reponse


}) 


app.listen(3000, () => { //strat listening
    console.log('the server is running')
})
