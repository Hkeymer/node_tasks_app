// importando express
import express from 'express';
// import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/Blogcontrollers.js';
import {
     getAllTasks,
     createTask,
     deleteTask, 
     getCategoryTask,
     getCategoryTable,
     updateTaskTags,
     updateTaskdone,
     updateTask,
     getTaskTags,
     getTaskDetail,
     amountDone,
     amountTags,
     searchTasks,
     getcategoryName}
 from '../queryBSD/query.js';
// Enrutador de express
const router = express.Router();

// ** CRAENDO R U T A S ** //

router.get('/allTasks',(req,res)=>{
    getAllTasks(result=>res.send(result))
});

router.get('/detail/:id',(req,res)=>{
     getTaskDetail(req.params.id,(result)=>{res.send(result)})   
});

router.get('/category/:id',(req,res)=>{
    getCategoryTask(req.params.id,(result)=>{res.send(result)})   
});

router.get('/categoryTable',(req,res)=>{
        getCategoryTable((result)=>res.send(result))
})

router.get('/count/done',(req,res)=>{
    amountDone((result)=>res.send(result))   
});

router.get('/count/done/:id',(req,res)=>{
    amountDone((result)=>{res.send(result)},req.params.id)   
});

router.get('/count/tags/:id',(req,res)=>{
    amountTags(req.params.id,(result)=>{res.send(result)})   
});

router.get('/tags/:id',(req,res)=>{
    const id = req.params.id;
       getTaskTags(id,result=>res.send(result))
})

router.get('/category/name/:id',(req,res)=>{
    getcategoryName(req.params.id,result=>res.send(result))
})

router.post('/create/:title/:description',(req,res)=>{
    const {title,description} = req.params;
     try {
        createTask(title,description)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
     } catch (error) {
        res.json({massage:error.massage})
     }
})

router.put('/update/:id',(req,res)=>{
   try {
    updateTask(req.body,req.params.id);
    res.json({"message":"¡Registro actualizado correctamente!"})
   } catch (error) {
     res.json({message:error.massage})
   }
})

router.put('/:value/:id',(req,res)=>{
      const {id,value} = req.params;
       try {
           updateTaskdone(id,value)
           res.json({
            "message":"¡Task completed successfully!"
           })
       } catch (error) {
              res.json({message:error.massage})
       }
})

router.put('/update/:taskID/:CategoryID',(req,res)=>{
           const {taskID,CategoryID} = req.params;
        try{
            updateTaskTags(taskID,CategoryID)
            res.json({
                "message":"¡Registro actualizado correctamente!"
            })
        }  catch (error){
            res.json({message:error.message})
         }
})

router.delete('/delete/:id',(req,res)=>{
      try {
          deleteTask(req.params.id);
          res.json({
            "message":"¡Registro eliminado correctamente!"
        })
      } catch (error) {
        res.json({massage:error.massage})
      }
})

router.get('/search/:title',(req,res)=>{
        searchTasks(req.params.title,(r)=>res.send(r))
})

export default router;