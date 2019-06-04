'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(123),
            },
            endereco: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            cidade: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            cpf: {
                allowNull: false,
                type: Sequelize.STRING(15),
            },
            estado: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            telefone: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            password_hash: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
