// Instrucciones: 
// 1. Abstracción de clase: Crea una clase abstracta FiguraGeometrica que NO pueda ser instanciada directamente.
// 
// 2. Abstracción de métodos: Define un método abstracto calcularArea() que obligue a las clases hijas a implementarlo.
//    También incluye un método concreto descripcion() que retorne "Soy una figura geométrica".
//
// 3. Polimorfismo: Crea dos clases Circulo y Rectangulo que hereden de FiguraGeometrica.
//    Demuestra el polimorfismo implementando calcularArea() de manera específica para cada figura.
//    Además, procesa un array de figuras polimórficamente llamando al mismo método calcularArea()
//    en cada una y obteniendo resultados diferentes según el tipo de figura.