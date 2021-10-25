export default (sequelize, Sequelize) => {
  const Todo = sequelize.define('todo', {
    todo_id: {
      type: Sequelize.UUID,
    },
    title: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM('pending', 'completed'),
    },
  });

  return Todo;
};
