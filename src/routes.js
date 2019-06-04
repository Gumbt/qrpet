const express = require('express');
//const multerConfig = require('./config/multer');
//const upload = require('multer')(multerConfig);

const routes = express.Router();

const authMiddlewares = require('./app/middlewares/auth');
const guestMiddlewares = require('./app/middlewares/guest');

const controllers = require('./app/controllers')

routes.use((req, res, next) => {
    res.locals.flashSuccess = req.flash('success');
    res.locals.flashError = req.flash('error');

    return next();
});

routes.get('/', guestMiddlewares, controllers.SessionController.create);
routes.post('/signin', controllers.SessionController.store);

routes.get('/signup', guestMiddlewares, controllers.UserController.create);
routes.post('/signup', controllers.UserController.store);

routes.use('/app', authMiddlewares);

routes.get('/app/logout', controllers.SessionController.destroy);

routes.get('/app/dashboard', controllers.DashboardController.index);

//routes.get('/app/appointments/new/:provider', controllers.AppointmentController.create);
//routes.post('/app/appointments/new/:provider', controllers.AppointmentController.store);

//routes.get('/app/available/:provider', controllers.AvailableController.index);

module.exports = routes;