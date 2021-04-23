const router = require('express').Router();

router.route('/')
.get((req, res) => {
    res.json({
        msg: "Test login GET route"
    });
})
.post((req, res) => {
    res.json({
        msg: "Test login POST route"
    });
});

router.route('/:id')
.get()
.put()
.delete();

module.exports = router;