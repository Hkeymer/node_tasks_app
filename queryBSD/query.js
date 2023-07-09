import conexion from "../database/db.js";
 
export const getAllTasks = (callback)=>{

      const query = `SELECT * FROM tasks ORDER BY date DESC`;

      conexion.query(query,(err,result)=>{
           if(err) throw err;
           callback(result);
      })
}

// Funcion para obtner por categotias, es decir las tareas pedientes o completadas;
export const getCategoryTask = (id,callback)=>{

     const query = `SELECT * FROM tasks WHERE done = ${id}`;

     conexion.query(query,(err,result)=>{
          if(err) throw err;
          callback(result)
     })
}

export const getCategoryTable = (callback)=>{
         const query  = `SELECT * FROM categories`
         conexion.query(query,(err,result)=>{
                    if(err) throw err;
                    callback(result)
         })
}        

export const getTaskDetail = (id,callback)=>{

     const query = `SELECT * FROM tasks WHERE id = ${id}`;

     conexion.query(query,(err,result)=>{
            if(err) throw err;
            callback(result)
     })
}

export const getTaskTags = (id,callback) =>{

     const query =`SELECT * FROM tasks WHERE CategoryID = ${id}`;

     conexion.query(query,(err,result)=>{
               if (err) throw err;
               callback(result)
     }) 
}

export const getcategoryName = (id,callback) =>{

     const query =`SELECT CategoryName FROM categories where id = ${id}`;
     conexion.query(query,(err,result)=>{
               if (err) throw err;
               callback(result)
     }) 
}

export const amountDone = (callback,id)=>{

     if(id){
      const query = `SELECT count(done) AS Amount FROM tasks WHERE done = ${id}`
      conexion.query(query,(err,result)=>{
               if(err) throw err;
               callback(result)});
     } 
    else{
      const query = `SELECT count(done) AS Amount FROM tasks`
      conexion.query(query,(err,result)=>{
          if(err) throw err;
          callback(result)
      })
     }
}

export const amountTags = (id,callback)=>{
      const query = `SELECT count(CategoryID) AS Amount FROM tasks WHERE CategoryID = ${id}`;
      conexion.query(query,(err,result)=>{
              if(err)throw err;
              callback(result)
      })
}


export const createTask = (title,description)=>{

     const query = `INSERT INTO tasks (title,description,date,CategoryID) VALUE 
     ("${title}","${description}",current_time(),6)`;

     conexion.query(query,(err)=>{
            if(err) throw err
     })
}
 
export const updateTask = (body,id)=>{
     const {title,description} = body;
     const query = `UPDATE tasks  SET title='${title}', description='${description}' WHERE id=${id}`;
     conexion.query(query,(err)=>{
           if(err) throw err;
     })
}

export const updateTaskdone = (id,value)=>{
     const query = `UPDATE tasks SET done = ${value}  WHERE id = ${id}`
     conexion.query(query,(err)=>{
            if(err) throw err;
     })
}

export const updateTaskTags  = (taksID,CategoryID)=> {

           const query = `UPDATE tasks SET CategoryID = ${CategoryID}  WHERE id = ${taksID}`;

           conexion.query(query,(err)=>{
                     if(err)throw err;
           })
}

export const deleteTask = (id)=>{
     const query = `DELETE FROM tasks WHERE id = ${id}`
     conexion.query(query,err=>{
            if(err) throw err;
     })
}


export const searchTasks = (title,callback)=>{

      const query = `SELECT * FROM tasks_x_category WHERE title LIKE "%${title}%" 
      ORDER BY done DESC`;

       conexion.query(query,(err,result)=>{
             if(err) throw err;
             callback(result)
       })

}
