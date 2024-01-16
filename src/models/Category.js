module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
    'Category',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: DataTypes.STRING,
      },
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    },
  );

/*   User.associate = (models) => {
// define o tipo de relacionamento
Category.hasOne(models.,
    // define qual a foreign key a ser criada
      { foreignKey: '', as: '' });
  }; */
  
    return Category;
  };