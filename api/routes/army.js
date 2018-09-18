const Army = require('../../models/army');

module.exports = (router) => {
    router.get('/army/:nationality', (req, res) => {
        Army.findById(req.params.nationality).exec()
            .then((docs) => res.status(200)
                .json(docs))
            .catch((err) => res.status(500)
                .json({
                    message: 'Error finding army',
                    error: err,
                }));
    });

    router.post('/army', (req, res) => {
        console.log('req.body: ', req.body);
        let army = new Army(req.body);
        army.save((err, army) => {
            if (err) {
                return console.log(err);
            }
            console.log('Added armygroup');
            res.status(200).json(army);
        });
    });
};
