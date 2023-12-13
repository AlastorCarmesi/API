const express = require('express');
const PORT = process.env.PORT || 5000
var app = express();
var fire = require('./fire')
var cors = require('cors');
var bodyParser = require('body-parser');
const { error, Console } = require('console');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/Ver', (req, res) => {
    const db = fire.firestore();
   
      var wholeData = []
      db.collection('/Ingresos').orderBy('Fecha', 'asc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
        
          wholeData.push(doc.data())
        });
        console.log(wholeData)
        res.send(wholeData)
      })
      .catch(error => {
        console.log('Error!', error);
    })
  })

  app.get('/Alumnos', (req, res) => {
    const db = fire.firestore();
   
      var wholeData = []
      db.collection('/Alumnado').orderBy('NumCtrl', 'asc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
        
          wholeData.push(doc.data())
        });
        console.log(wholeData)
        res.send(wholeData)
      })
      .catch(error => {
        console.log('Error!', error);
    })
  })

  app.post('/insertar', (req, res) => {
    const db = fire.firestore();
    
    db.collection('/Ingresos').add({

      Numero_de_Control : req.body.Numero_de_Control,
      Nombre : req.body.Nombre,
      Apellido_Paterno : req.body.apellido_Paterno,
      Apellido_Materno : req.body.apellido_materno,
      Carrera : req.body.Carrera,
      Semestre : req.body.Semestre,
      Motivo :  req.body.Motivo,
      Fecha : req.body.Fecha,
      Hora : req.body.Hora

    });

    res.send({
      Numero_de_Control : req.body.Numero_de_Control,
      Nombre : req.body.Nombre,
      Apellido_Paterno : req.body.apellido_Paterno,
      Apellido_Materno : req.body.apellido_materno,
      Carrera : req.body.Carrera,
      Semestre : req.body.Semestre,
      Motivo :  req.body.Motivo,
      Fecha : req.body.Fecha,
      Hora : req.body.Hora,
      status: 'Valores insertados!'
    })
  })

  app.listen(PORT, () => {
    console.log(`API ON...`)
  })