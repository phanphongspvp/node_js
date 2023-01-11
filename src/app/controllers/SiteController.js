const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    //[GET] /home
    home(req, res, next) {
        // res.render('home');
        Course.find({})
            .then(course => {
                res.render('home', {
                    course: multipleMongooseToObject(course)
                })
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;