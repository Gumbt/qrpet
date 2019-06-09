module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
        name: DataTypes.STRING,
        user_id: DataTypes.STRING,
        raca: DataTypes.STRING,
        peso: DataTypes.STRING,
        cor: DataTypes.STRING,
        avatar: DataTypes.STRING,
        descricao: DataTypes.STRING,
        vacinas: DataTypes.STRING,
        data_nasc: DataTypes.DATE,
        status: DataTypes.BOOLEAN,
    });
    return Pet;
}
