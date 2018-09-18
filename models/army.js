const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let option = new Schema({
    description: {
        type: String,
    },
    cost: {
        type: Number,
    },
    limit: {
        type: Number,
    },
    all_or_none: {
        type: Boolean,
    },
});

let specialrule = new Schema({
    rule: {
        type: String,
    },
});

let armySchema = new Schema({
    nationality: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    composition: {
        description: {
            type: String,
        },
        size: {
            type: Number,
        },
    },
    weapons: {
        type: String,
        required: true,
    },
    damage_value: {
        type: Number,
    },
    options: [option],
    special_rules: [specialrule],
});

const Army = mongoose.model('Army', armySchema);

module.exports = Army;
