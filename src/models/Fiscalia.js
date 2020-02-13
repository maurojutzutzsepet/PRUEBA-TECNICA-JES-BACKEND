const { Schema, model } = require('mongoose');

const fiscaliaSchema = new Schema({
    fiscalia: String,
    municipio: String,
    direccion: String,
    telefono: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Fiscalia', fiscaliaSchema);