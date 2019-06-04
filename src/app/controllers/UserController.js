
const {
    User
} = require('../models');

class UserController {
    create(req, res) {
        return res.render('auth/signup')
    }
    async store(req, res) {
        const {
            email
        } = req.body

        if (await User.findOne({
            email
        })) {
            return res.status(400).json({
                error: 'User alread exists'
            })
        }

        const user = await User.create(req.body)
        return res.redirect('/');
    }
}

module.exports = new UserController();
