const express = require('express');
const { registerController, loginController, listWorkers, listSupervisor, updateSupervisor, deleteSupervisor, deleteWorker, updateWorker } = require('../controller/authController');

const router = express.Router();

//routes
//REGISTER || POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login' ,loginController)


//list of worker and supervisor
router.get('/getWorker',listWorkers)
router.get('/getSupervisor',listSupervisor)

// Supervisor routes
router.delete('/supervisor/:id', deleteSupervisor);
router.put('/supervisor/:id', updateSupervisor);

// Worker routes
router.delete('/worker/:id', deleteWorker);
router.put('/worker/:id', updateWorker);



module.exports = router;