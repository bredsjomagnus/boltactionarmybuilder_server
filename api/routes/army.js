const Army = require('../../models/army');

module.exports = (router) => {
    router.get('/army/nationality/:nationality', (req, res) => {
        let nation = req.params.nationality;
        nation = nation.toLowercase();
        // console.log('nation: ', typeof nation);
        Army.find({
                'nationality': nation,
            }).exec()
            .then((docs) => res.status(200)
                .json(docs))
            .catch((err) => res.status(500)
                .json({
                    message: 'Error finding army',
                    error: err,
                }));
    });

    router.get('/army', (req, res) => {
        Army.find({}).exec()
            .then((docs) => res.status(200)
                .json(docs))
            .catch((err) => res.status(500)
                .json({
                    message: 'Error finding all armies',
                    error: err,
                }));
    });

    router.get('/army/:id', (req, res) => {
        Army.findById(req.params.id).exec()
            .then((docs) => res.status(200)
                .json(docs))
            .catch((err) => res.status(500)
                .json({
                    message: 'Error getting army by id',
                    error: err,
                }));
    });

    router.post('/army', (req, res) => {
        // console.log('req.body: ', req.body);
        let army = new Army(req.body);
        army.save((err, army) => {
            if (err) {
                return console.log(err);
            }
            // console.log('Added armygroup');
            res.status(200).json(army);
        });
    });

    router.delete('/army/delete/:id', (req, res) => {
        // console.log('\nreq.params.id: ', req.params.id + '\n');
        Army.findById({_id: req.params.id}).remove().exec()
            .then((docs) => res.status(200)
                .json(docs))
            .catch((err) => res.status(500)
                .json({
                    message: 'Error deleting armygroup',
                    error: err,
                }));
    });

    router.put('/army/:id', (req, res) => {
        let qry = {
            _id: req.params.id,
        };
        let doc = {
            nationality: req.body.nationality,
            type: req.body.type,
            category: req.body.category,
            title: req.body.title,
            experience: req.body.experience,
            description: req.body.description,
            cost: req.body.cost,
            weapons: req.body.weapons,
            damagevalue: req.body.damagevalue,
            composition: {
                description: req.body.composition.description,
                size: req.body.composition.size,
            },
            options: req.body.options,
            special_rules: req.body.special_rules,
        };

        console.log('api > router > army > put > doc >\n', doc);
        Army.updateOne(qry, doc, (err, respRaw) => {
            if (err) {
                return console.log(err);
            }
            res.status(200).json(respRaw);
        });
    });
};
