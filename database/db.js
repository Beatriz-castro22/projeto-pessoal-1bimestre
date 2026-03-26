const db = {
  items: [],

  create(item) {
    this.items.push(item);
    return item;
  },

  findAll() {
    return this.items;
  },

  findByName(name) {
    return this.items.find(i => i.name === name);
  },

  delete(name) {
    this.items = this.items.filter(i => i.name !== name);
  },

  clear() {
    this.items = [];
  }
};

module.exports = db;