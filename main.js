//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Usa filter() para obtener los productos que cuesten menos de $100.
const productosMin100 = productos.filter((item) => item.precio < 100);
console.log(productosMin100);

//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
const productosOrdenados = productos.sort((a, b) => {
    const nombreA = a.nombre.toUpperCase(); // ignora mayúsculas y minúsculas
    const nombreB = b.nombre.toUpperCase(); // ignora mayúsculas y minúsculas

    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }
  
    // los nombres deben ser iguales
    return 0;
  });
console.log(productosOrdenados);

//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const productosNombres = productos.map((item) => item.nombre);
console.log(productosNombres);

