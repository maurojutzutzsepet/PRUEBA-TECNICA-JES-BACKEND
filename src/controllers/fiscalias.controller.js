const fiscaliasCtrl = {
};

const Fiscal = require('../models/Fiscalia');


fiscaliasCtrl.getFiscalias = async (req, res) => {
    const fiscalias = await Fiscal.find();
    res.json(fiscalias);
}

fiscaliasCtrl.createFiscalia = async(req, res) => {
    const { fiscalia,municipio , direccion, telefono,content, date, author } = req.body;
    const newFiscal = new Fiscal({
        fiscalia: fiscalia,
        municipio: municipio,
        direccion: direccion,
        telefono: telefono,
        content: content,
        date: date,
        author: author
    });
    await newFiscal.save();
    res.json({message: 'Fiscalia Saved'})
}; 

fiscaliasCtrl.getFiscalia = async(req, res) => {
    const fiscalia = await Fiscal.findById(req.params.id);
    res.json(fiscalia);
    }; 

fiscaliasCtrl.updateFiscalia = async(req, res) => {
    const {fiscalia, municipio, direccion, telefono,content, date, author} = req.body;
    await Fiscal.findOneAndUpdate({_id:req.params.id}, {
        fiscalia,
        municipio,
        direccion,
        telefono,
        author,
        date,
        content
    })
    res.json({message: 'update Fiscalia'})
    }; 

fiscaliasCtrl.deleteFiscalia = async(req, res) => {
    
    await Fiscal.findByIdAndDelete(req.params.id);
    res.json({message: 'delete Fiscalia'})
    }; 

module.exports = fiscaliasCtrl;