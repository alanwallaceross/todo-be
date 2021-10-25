export default (sequelize, Sequelize) => {
  const Subtask = sequelize.define('subtask', {
    subtask_id: {
      type: Sequelize.UUID,
    },
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

  return Subtask;
};
