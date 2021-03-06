const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumb: String,
    company: String,
    price: Number,
    techs: [String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
{
    toJSON: { virtuals: true }
});

SpotSchema.virtual('thumb_url').get(function(){
    return `http://localhost:8080/files/${this.thumb}`
})

module.exports = mongoose.model('Spot', SpotSchema);