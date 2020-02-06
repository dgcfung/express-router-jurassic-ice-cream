module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dinosaurs', [
      {
        "name": "rex",
        "height": 10000,
        "period": "jurassic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      {
        "name": "stegosaurus",
        "height": 1000,
        "period": "cretaceous",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
      {
        "name": "barney",
        "height": 6,
        "period": "daycare",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dinosaurs', null, {});
  }
};