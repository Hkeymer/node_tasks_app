// import {Sequelize} from 'sequelize';
import mysql from 'mysql2';
// *****DEMO USANDO SEQUELIZE*****

// const db = new Sequelize('tasks_app','root','serna123',{
//     host:'localhost',
//     dialect:'mysql'
// })

// export default db;

// ######################;

// conexion en la nube;
const conexion = mysql.createConnection({
    host:'containers-us-west-154.railway.app',
    user:'root',
    password:'wLYsT4t2yCeBSwqSKvxY',
    database:'railway',
    port:7751
});


// // conexion en local;
// const conexion = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'serna123',
//     database:'tasks_app',
//     port:3306
// });



export default conexion








