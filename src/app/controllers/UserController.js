
const {
    User
} = require('../models');

class UserController {
    create(req, res) {
        return res.render('auth/signup')
    }
    async store(req, res) {
        const {
            email,
        } = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (user) {
            req.flash('error', 'Email já existe no banco de dados');
            return res.redirect('/signup');
        }

        await User.create(req.body)
        return res.redirect('/');
    }
}

module.exports = new UserController();
