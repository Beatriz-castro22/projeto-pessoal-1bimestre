const dbService = require('../database/db');

const DrawingService = {
  addMaterial(name, type) {
    if (!name || !type) throw new Error('Dados inválidos');

    const exists = dbService.findByName(name);
    if (exists) throw new Error('Material já existe');

    return dbService.create({ name, type });
  },

  listMaterials() {
    return dbService.findAll();
  },

  getMaterial(name) {
    const material = dbService.findByName(name);
    if (!material) throw new Error('Material não encontrado');
    return material;
  },

  removeMaterial(name) {
    const material = dbService.findByName(name);
    if (!material) throw new Error('Material não existe');

    dbService.delete(name);
    return true;
  },

  reset() {
    dbService.clear();
  }
};

module.exports = DrawingService;