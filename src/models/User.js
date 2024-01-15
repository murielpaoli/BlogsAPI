module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
    'User',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        displayName: DataTypes.STRING,
        image: DataTypes.STRING,
      },
    {
      timestamps: false,
      tableName: 'Users',
      underscored: true,
    },
  );

/*   User.associate = (models) => {
// define o tipo de relacionamento
User.hasOne(models.Plan,
    // define qual a foreign key a ser criada
      { foreignKey: '', as: '' });
  }; */
  
    return User;
  };