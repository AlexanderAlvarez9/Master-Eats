const {Router} = require('express');
const router = Router();

router.get('/', welcome);
router.get('/test', test);




function welcome(req, res) {
    res.json({"Title": 'Welcome'});
}

function test(req, res) {
    const data = {
        'name': 'David',
        'website': 'www.github.com/alejoortizd'
    }
    res.json(data);
}


module.exports = router;