module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flavors', [
      {
        "name": "chocolate",
        "color": "brown",
        "on_sale": true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    {
        "name": "strawberry",
        "color": "pink",
        "on_sale": true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    {
        "name": "lemon",
        "color": "white",
        "on_sale": false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flavors', null, {});
  }
};
