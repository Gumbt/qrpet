'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pets', {
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
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            },
            raca: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            peso: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            cor: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            avatar: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            descricao: {
                allowNull: false,
                type: Sequelize.STRING(500),
            },
            vacinas: {
                allowNull: false,
                type: Sequelize.STRING(400),
            },
            data_nasc: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
            status: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
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
        return queryInterface.dropTable('pets')
    }
};
