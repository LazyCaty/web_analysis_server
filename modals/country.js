const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let countrySchema = new Schema({
    data:
        {
            country: {
                type: String,
                required: true,
            },
            website: [
                {
                    website: {
                        type: String,
                        required: true,
                    },
                    data: {
                        website_heat: {
                            type: Number,
                            required: true,
                        },
                        social_platform: {
                            type: Number,
                            required: true,
                        },
                        website_security: {
                            type: Number,
                            required: true,
                        }
                    }
                }
            ]
        }

});

let country = mongoose.model('country_web_analisis',countrySchema);

module.exports = country;
