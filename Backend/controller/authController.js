const { User, Worker, Supervisor } = require('../models/userModel');

const registerController = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    //validate
    if (!name || !email || !password || !role) {
      return res.status(400).send({ success: false, message: 'Please provide all required fields' });
    }

    let user;
    if (role === 'worker') {
      user = await Worker.create({ name, email, password, role });
    } else if (role === 'supervisor') {
      user = await Supervisor.create({ name, email, password, role });
    } else {
      return res.status(400).send({ success: false, message: 'Invalid role' });
    }

    res.status(201).send({
      success: true,
      message: "User created successfully",
      user
    });
  } catch (error) {
    next(error);
  }
};
const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }
    //find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: false, message: 'Invalid username or password' });
    }
    //compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user,
    });
  };
  

const listWorkers = async (req, res, next) => {
  try {
    const workers = await Worker.findAll();
    // const supervisors = await Supervisor.findAll();
    res.status(200).json({ workers });
  } catch (error) {
    next(error);
  }
};
const listSupervisor = async (req, res, next) => {
    try {
      const supervisors = await Supervisor.findAll();
      res.status(200).json({ supervisors });
    } catch (error) {
      next(error);
    }
  };


// Delete Supervisor by ID
const deleteSupervisor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const supervisor = await Supervisor.findByPk(id);

        if (!supervisor) {
            return res.status(404).json({ success: false, message: 'Supervisor not found' });
        }

        await supervisor.destroy();
        res.status(200).json({ success: true, message: 'Supervisor deleted successfully' });
    } catch (error) {
        next(error);
    }
};

// Update Supervisor by ID
const updateSupervisor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, role } = req.body;

        const supervisor = await Supervisor.findByPk(id);

        if (!supervisor) {
            return res.status(404).json({ success: false, message: 'Supervisor not found' });
        }

        await supervisor.update({ name, email, role });
        res.status(200).json({ success: true, message: 'Supervisor updated successfully' });
    } catch (error) {
        next(error);
    }
};


// Delete Worker by ID
const deleteWorker = async (req, res, next) => {
    try {
        const { id } = req.params;
        const worker = await Worker.findByPk(id);

        if (!worker) {
            return res.status(404).json({ success: false, message: 'Worker not found' });
        }

        await worker.destroy();
        res.status(200).json({ success: true, message: 'Worker deleted successfully' });
    } catch (error) {
        next(error);
    }
};

// Update Worker by ID
const updateWorker = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, role } = req.body;

        const worker = await Worker.findByPk(id);

        if (!worker) {
            return res.status(404).json({ success: false, message: 'Worker not found' });
        }

        await worker.update({ name, email, role });
        res.status(200).json({ success: true, message: 'Worker updated successfully' });
    } catch (error) {
        next(error);
    }
};



module.exports = { registerController, 
   loginController,
   listWorkers, 
   listSupervisor ,
   updateSupervisor ,
   deleteSupervisor,
   updateWorker,
   deleteWorker
  };
