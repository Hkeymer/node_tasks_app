import express from 'express';
import cors from 'cors'
import conexion from './database/db.js';
import router from './routers/routers.js';
// import db from './database/db.js'
const app = express();
// **configuracion** //
app.use(cors());
app.use(express.json())
app.use('/api/tasks',router)


conexion.connect(err=>{
      if(err) throw err;
      console.log('Conexion exitosa a la BSD')
})

// try {
// //     await db.authenticate()
//     console.log('Conexion exitosa a la DB')
// } catch (error) {
//       console.log(`El error de conexion es: ${error}`)
// }

app.get('/',(req,res)=>{
      res.send('¡Bienvenido a mi servidor!')
})


app.listen(8000,()=>{
      console.log(`El servidor esta corriendo en el puerto http://localhost:8000/`)
})   