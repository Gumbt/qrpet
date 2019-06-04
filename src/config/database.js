module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'qrpet',
    operatorAliase: false,
    define: {
        timestamps: true, //data de criação
        underscored: true, //snake case
        underscoredAll: true
    }
}
