module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
    'BlogPost',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
      },
    {
      timestamps: false,
      tableName: 'BlogPosts',
      underscored: true,
    },
  );

  BlogPost.associate = (models) => {
// define o tipo de relacionamento
BlogPost.belongsTo(models.User,
    // define qual a foreign key a ser criada
      { foreignKey: 'user_id', as: 'users' });
  };
  
    return BlogPost;
  };