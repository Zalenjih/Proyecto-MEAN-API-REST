const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['tasks']);

router.get('/task', (req, res) =>{
    db.tasks.find((err, tasks) =>{
        if (err) return next(err);
        res.json(tasks);
    })
});

router.get('/task/:id', (req, res) =>{
    db.tasks.findOne({_id: req.params.id},(err, task) =>{
        if (err) return next(err);
        res.json(task);
    })
});

module.exports = router;