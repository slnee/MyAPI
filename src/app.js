import express from 'express'; //import exprseess
const app = express() //créer l'app


app.get('/', (req, res) => {//envoie des information au frontend de base
//req = ce que veut l'utilisateur / res = utilise pour renvoyer la reponse
res.send('/ route work')
}) 

app.get('/connected', (req, res) => {
res.send('/connected route work')
}) 

app.get('/log_in', (req, res) => {
res.send('/log_in route work')
})

app.get('/wrong_input', (req, res) => {
res.send('/wrong_input route work')
}) 

app.get('/connected/:nom', (req, res) => {
res.send('/connected/:nom route work')
}) 

app.listen(3000, () => { //strat listening
    console.log('the server is running')
})
