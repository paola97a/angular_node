const mysql= require('mysql');

//console.log('base conectada');
module.exports = () => {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria_inicial'
    });  
  }
