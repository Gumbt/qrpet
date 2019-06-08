const {
    User, Pet
} = require('../models')

class DashboardController {
    async index(req, res) {
        const { id } = req.session.user
        const pets = await Pet.findAll({
            where: {
                user_id: id
            }
        })
        return res.render('dashboard', {
            pets
        });
    }
}
module.exports = new DashboardController();
