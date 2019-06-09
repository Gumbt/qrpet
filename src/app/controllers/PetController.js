const { User, Pet } = require('../models');
const nodemailer = require('nodemailer')
const mailConfig = require('../../config/mail')
const moment = require('moment');
const qrcode = require('qrcode');

class PetController {
    create(req, res) {
        return res.render('pet/create')
    }
    async store(req, res) {
        const { filename: avatar } = req.file

        const { id } = req.session.user

        await Pet.create({ ...req.body, avatar, user_id: id, status: 0 })
        req.flash('success', 'Animal inserido com sucesso!');
        return res.redirect('/app/dashboard');
    }
    async profile(req, res) {
        const pet = await Pet.findByPk(req.params.id);
        var years = moment().diff(pet.data_nasc, 'years');
        return res.render('pet/profile', { pet, years })
    }
    async contact(req, res) {
        const pet = await Pet.findByPk(req.params.id);
        const user = await User.findByPk(pet.id)

        return res.render('pet/contato', { pet, user })
    }
    async sendmail(req, res) {
        const pet = await Pet.findByPk(req.params.id);
        const user = await User.findByPk(pet.user_id)

        const transport = nodemailer.createTransport(mailConfig)

        await transport.sendMail({
            from: `"${req.body.name}" <${req.body.email}>`,
            to: user.email,
            subject: `Animal encontrado: ${pet.name} id: #${pet.id}`,
            text: req.body.texto
        })
        req.flash('success', 'Contato enviado com sucesso, aguarde o retorno dos donos!');
        return res.redirect('/pet/profile/' + pet.id)
    }
    async edit(req, res) {
        const pet = await Pet.findByPk(req.params.id);
        if (pet && pet.user_id === req.session.user.id) {
            var fullUrl = req.protocol + '://' + req.get('host') + '/pet/profile/' + pet.id;
            const qr = await qrcode.toDataURL(fullUrl);


            return res.render('pet/edit', { pet, qr })
        } else {
            return res.redirect('/app/dashboard/');
        }
    }
    async update(req, res) {
        const desaparecido = (req.body.status === "check") ? 1 : 0;
        await Pet.update(
            {
                name: req.body.name,
                raca: req.body.raca,
                cor: req.body.cor,
                peso: req.body.peso,
                data_nasc: req.body.data_nasc,
                descricao: req.body.descricao,
                status: desaparecido,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )

        req.flash('success', 'Animal atualizado com sucesso!');
        return res.redirect('/app/dashboard/');
    }
    async destroy(req, res) {
        const pet = await Pet.findByPk(req.params.id);
        if (pet && pet.user_id === req.session.user.id) {
            await Pet.destroy({
                where: {
                    id: req.params.id
                }
            })
        }
        return res.redirect('/app/dashboard/');
    }

}
module.exports = new PetController();
