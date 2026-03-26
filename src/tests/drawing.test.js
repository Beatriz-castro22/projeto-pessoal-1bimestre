const service = require('../services/DrawingService');

describe('DrawingService', () => {

  beforeEach(() => {
    service.reset();
  });

  test('1. Adicionar material', () => {
    const result = service.addMaterial('Lápis', 'Grafite');
    expect(result).toEqual({ name: 'Lápis', type: 'Grafite' });
  });

  test('2. Não permitir duplicado', () => {
    service.addMaterial('Lápis', 'Grafite');
    expect(() => service.addMaterial('Lápis', 'Grafite')).toThrow();
  });

  test('3. Listar materiais', () => {
    service.addMaterial('Lápis', 'Grafite');
    const list = service.listMaterials();
    expect(list.length).toBe(1);
  });

  test('4. Buscar material', () => {
    service.addMaterial('Lápis', 'Grafite');
    const item = service.getMaterial('Lápis');
    expect(item).toBeDefined();
  });

  test('5. Erro ao buscar inexistente', () => {
    expect(() => service.getMaterial('Caneta')).toThrow();
  });

  test('6. Remover material', () => {
    service.addMaterial('Lápis', 'Grafite');
    const result = service.removeMaterial('Lápis');
    expect(result).toBe(true);
  });
  test('7. Erro ao remover inexistente', () => {
    expect(() => service.removeMaterial('Lápis')).toThrow();
  });

  test('8. Não permitir nome vazio', () => {
    expect(() => service.addMaterial('', 'Grafite')).toThrow();
  });

  test('9. Não permitir tipo vazio', () => {
    expect(() => service.addMaterial('Borracha', '')).toThrow();
  });

  test('10. Adicionar múltiplos', () => {
    service.addMaterial('Caneta', 'Tinta');
    service.addMaterial('Papel', 'Folha');
    const list = service.listMaterials();
    expect(list.length).toBe(2);
  });

});