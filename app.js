const express = require('express');

const mongoose = require('mongoose');
//Importiere das Schrauben Model
const schraubenModel = require('./schraubenModel');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://name:<password>@cluster0.ouprey8.mongodb.net/schrauben24?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected...');    // Konsolenausgabe für den Erfolg
})
.catch(err => console.log(err));        // Konsolenausgabe für den Fehler

app.get('/', (req, res) => {      // Route für den Index
  res.send('Hello World!');      // Sendet den Text "Hello World!" als Antwort
});

// Route eine Schraube
app.get('/sales/:id', async (req, res) => {      // Route für eine Schraube
  try {
    const sales = await schraubenModel.find({ produkt_id: req.params.id });    // Findet die Schraube mit der ID aus der URL
    res.json(sales);                                                    // Sendet die Schraube als Antwort
  } catch (err) {     
    res.status(500).json({ message: err.message });                      // Sendet eine Fehlermeldung als Antwort
  }
});
  
// Route alle Schrauben
app.get('/sales', async (req, res) => {                         // Route für alle Schrauben
  try {
    const sales = await schraubenModel.find();                            // Findet alle Schrauben
    res.json(sales);                                                    // Sendet die Schrauben als Antwort
  } catch (err) {
    res.status(500).json({ message: err.message });                      // Sendet eine Fehlermeldung als Antwort
  }
});


const PORT = process.env.PORT || 3000;                            // Port für den Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));      // Startet den Server auf Port 3000 
