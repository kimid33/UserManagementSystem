const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'usermanagementsystem'
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Name is required'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Email must be unique'
    },
    validate: {
      isEmail: {
        msg: 'Email is not valid'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Password is required'
      },
      len: [6, 255], // minimum length 6, maximum length 255
      isComplex(value) {
        if (!/[A-Z]/.test(value)) {
          throw new Error('Password must contain at least one uppercase letter');
        }
        if (!/[a-z]/.test(value)) {
          throw new Error('Password must contain at least one lowercase letter');
        }
        if (!/[0-9]/.test(value)) {
          throw new Error('Password must contain at least one number');
        }
        if (!/[^A-Za-z0-9]/.test(value)) {
          throw new Error('Password must contain at least one special character');
        }
      }
    }
  }
}, {
  timestamps: false // Disable timestamps (createdAt and updatedAt)
});
User.prototype.comparePassword = async function(candidatePassword) {
  return this.password === candidatePassword;
};

const Worker = sequelize.define('Worker', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Email must be unique'
    },
    validate: {
      isEmail: {
        msg: 'Email is not valid'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Password is required'
      },
      len: [6, 255], // minimum length 6, maximum length 255
      isComplex(value) {
        if (!/[A-Z]/.test(value)) {
          throw new Error('Password must contain at least one uppercase letter');
        }
        if (!/[a-z]/.test(value)) {
          throw new Error('Password must contain at least one lowercase letter');
        }
        if (!/[0-9]/.test(value)) {
          throw new Error('Password must contain at least one number');
        }
        if (!/[^A-Za-z0-9]/.test(value)) {
          throw new Error('Password must contain at least one special character');
        }
      }
    }
  }
});

// Sync all defined models to the database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });

  const Supervisor = sequelize.define('Supervisor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email must be unique'
      },
      validate: {
        isEmail: {
          msg: 'Email is not valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        len: [6, 255], // minimum length 6, maximum length 255
        isComplex(value) {
          if (!/[A-Z]/.test(value)) {
            throw new Error('Password must contain at least one uppercase letter');
          }
          if (!/[a-z]/.test(value)) {
            throw new Error('Password must contain at least one lowercase letter');
          }
          if (!/[0-9]/.test(value)) {
            throw new Error('Password must contain at least one number');
          }
          if (!/[^A-Za-z0-9]/.test(value)) {
            throw new Error('Password must contain at least one special character');
          }
        }
      }
    }
  });
  
  // Sync all defined models to the database
  sequelize.sync()
    .then(() => {
      console.log('Database synced');
    })
    .catch((err) => {
      console.error('Unable to sync database:', err);
    });

module.exports = { User, Worker,Supervisor };
