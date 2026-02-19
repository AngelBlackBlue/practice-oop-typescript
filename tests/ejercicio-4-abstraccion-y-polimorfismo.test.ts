// @ts-ignore
import { Circulo, Rectangulo, FiguraGeometrica } from '../src/ejercicio-4-abstraccion';

describe('Ejercicio 4 - Abstracción y Polimorfismo', () => {
  
  // Test 1: Abstracción de clase
  test('No se debe poder instanciar la clase abstracta FiguraGeometrica', () => {
    expect(() => {
      // @ts-ignore - Probamos que no se pueda instanciar la clase abstracta
      new FiguraGeometrica();
    }).toThrow();
  });

  // Test 2: Abstracción de métodos y herencia
  test('Circulo debe implementar el método abstracto calcularArea() correctamente', () => {
    const circulo = new Circulo(5);
    expect(circulo.calcularArea()).toBeCloseTo(78.54, 2);
    expect(circulo.descripcion()).toBe('Soy una figura geométrica');
    expect(circulo instanceof FiguraGeometrica).toBe(true);
  });

  // Test 3: Abstracción de métodos y herencia
  test('Rectangulo debe implementar el método abstracto calcularArea() correctamente', () => {
    const rectangulo = new Rectangulo(4, 6);
    expect(rectangulo.calcularArea()).toBe(24);
    expect(rectangulo.descripcion()).toBe('Soy una figura geométrica');
    expect(rectangulo instanceof FiguraGeometrica).toBe(true);
  });

  // Test 4: Polimorfismo - Misma interfaz, diferentes implementaciones
  test('Polimorfismo: Mismo método calcularArea() se comporta diferente según la figura', () => {
    const circulo = new Circulo(5);
    const rectangulo = new Rectangulo(4, 6);
    
    // Misma firma de método, diferentes implementaciones
    expect(typeof circulo.calcularArea).toBe('function');
    expect(typeof rectangulo.calcularArea).toBe('function');
    expect(circulo.calcularArea()).not.toBe(rectangulo.calcularArea());
  });

  // Test 5: Polimorfismo - Procesamiento polimórfico en array
  test('Polimorfismo: Array de figuras procesadas polimórficamente', () => {
    const figuras: FiguraGeometrica[] = [
      new Circulo(5),
      new Rectangulo(4, 6),
      new Circulo(3)
    ];

    const areas = figuras.map(figura => figura.calcularArea());
    
    expect(areas[0]).toBeCloseTo(78.54, 2); // Círculo
    expect(areas[1]).toBe(24);               // Rectángulo
    expect(areas[2]).toBeCloseTo(28.27, 2); // Otro círculo
    
    // Verificamos que todas son figuras geométricas pero cada una calcula su área específica
    figuras.forEach(figura => {
      expect(figura.descripcion()).toBe('Soy una figura geométrica');
    });
  });

  // Test 6: Verificación de tipos (polimorfismo)
  test('Polimorfismo: Las figuras mantienen su tipo específico', () => {
    const circulo: FiguraGeometrica = new Circulo(5);
    const rectangulo: FiguraGeometrica = new Rectangulo(4, 6);

    // Aunque las tratamos como FiguraGeometrica, mantienen su comportamiento específico
    expect(circulo instanceof Circulo).toBe(true);
    expect(rectangulo instanceof Rectangulo).toBe(true);
    
    // Y responden polimórficamente
    expect(circulo.calcularArea()).toBeCloseTo(78.54, 2);
    expect(rectangulo.calcularArea()).toBe(24);
  });
});