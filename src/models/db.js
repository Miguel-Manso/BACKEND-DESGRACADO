const sequelize = require('sequelize');
const Sequelize = require('sequelize');

const Conexao = new Sequelize("teste","root", "", {
    host: "localhost",
    dialect: "mysql"
});

Conexao.authenticate()
.then(function(){
    console.log("conexão dahora")
}).catch(function(){
    console.log("Erro conexão zoada")
})

module.exports = Conexao