// importamos la coneccion a la base de datos
import db from "../database/db.js";
// impotamos sequelize
import {DataTypes} from 'sequelize';
// ***** M O D E L O ******* //
const Blogmodels = db.define('Tasks',{
  title:{type: DataTypes.STRING,
    allowNull: false},
  description:{type: DataTypes.STRING},
  // done:{type:DataTypes.BOOLEAN},
  // data:{type:DataTypes.STRING}
});


export default Blogmodels
