const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//VerkaufsSchema
const VerkaufSchema = new Schema({
    schrauben_typ: { type: String, required: true, maxlength: 50 },     // Typ der Schraube     
    verkaufsdatum: { type: Date, required: true, default: Date.now() }, // Datum des Verkaufs
    menge: { type: Number, required: true },                             // Menge der Schraube
    preis_pro_einheit: { type: Number, required: true },                 // Preis pro Einheit
    produkt_id: { type: String, required: true }                          // ID der Schraube
});


//VerkaufsSchema Gesamtpreis
VerkaufSchema.virtual('gesamtpreis').get(function () {
    return this.menge * this.preis_pro_einheit;     // Menge * Preis pro Einheit
});


//stehen lassen, sonst wird der Gesamtpreis nicht angezeigt im request
VerkaufSchema.set('toObject', { virtuals: true });      
VerkaufSchema.set('toJSON', { virtuals: true });

const schraubenModel = mongoose.model('Schraube', VerkaufSchema, 'schrauben');  

module.exports = schraubenModel;
