const express = require('express');
const multerConfig = require('./config/multer');
const upload = require('multer')(multerConfig);

const routes = express.Router();

const authMiddlewares = require('./app/middlewares/auth');
const guestMiddlewares = require('./app/middlewares/guest');

const controllers = require('./app/controllers')

routes.use((req, res, next) => {
    res.locals.flashSuccess = req.flash('success');
    res.locals.flashError = req.flash('error');

    return next();
});
routes.get('/files/:file', controllers.FileController.show)

routes.get('/', guestMiddlewares, controllers.SessionController.create);
routes.post('/signin', controllers.SessionController.store);

routes.get('/signup', guestMiddlewares, controllers.UserController.create);
routes.post('/signup', controllers.UserController.store);

routes.get('/pet/profile/:id', controllers.PetController.profile);
routes.get('/pet/contato/:id', controllers.PetController.contact);
routes.post('/pet/contato/:id', controllers.PetController.sendmail);
routes.use('/app', authMiddlewares);

routes.get('/app/logout', controllers.SessionController.destroy);

routes.get('/app/dashboard', controllers.DashboardController.index);

routes.get('/app/pet/new', controllers.PetController.create);
routes.post('/app/pet/new', upload.single('avatar'), controllers.PetController.store);
routes.get('/app/pet/edit/:id', controllers.PetController.edit);
routes.post('/app/pet/edit/:id', controllers.PetController.update);
routes.get('/app/pet/delete/:id', controllers.PetController.destroy);

module.exports = routes;
