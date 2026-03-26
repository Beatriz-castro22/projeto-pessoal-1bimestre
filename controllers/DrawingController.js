const service = require('../services/DrawingService');

const DrawingController = {
  create(req) {
    return service.addMaterial(req.name, req.type);
  },

  list() {
    return service.listMaterials();
  },

  show(req) {
    return service.getMaterial(req.name);
  },

  delete(req) {
    return service.removeMaterial(req.name);
  }
};

module.exports = DrawingController;