const pizzas = [
    {
        nombre: 'Muzzarella',
        id: 1,
        precio: 1700,
        ingredientes: ['salsa de tomate', 'muzzarella', 'aceitunas'],
    },
    {
        nombre: 'Fugazza con queso',
        id: 2,
        precio: 1800,
        ingredientes: ['muzzarella', 'cebolla', 'aceitunas'],
    },
    {
        nombre: 'Especial',
        id: 3,
        precio: 1900,
        ingredientes: ['salsa de tomate', 'muzzarella', 'jamon cocido', 'aceitunas'],
    },
    {
        nombre: 'Calabresa',
        id: 4,
        precio: 2000,
        ingredientes: ['salsa de tomate', 'muzzarella', 'longaniza'],
    },
    {
        nombre: 'Provolone',
        id: 5,
        precio: 2100,
        ingredientes: ['muzzarella', 'provolone', 'aceitunas'],
    },
    {
        nombre: 'Americana',
        id: 6,
        precio: 2200,
        ingredientes: ['salsa de tomate', 'muzzarella', 'cheddar', 'panceta', 'huevo frito'],
    },   
    
];

// a)  Imprimir en consola las pizzas que tengan un id impar.

const idImpares = pizzas.filter( (pizza) => {
     return pizza.id % 2 == !0; 

});

idImpares.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene id impar`);
});


// b) ¿Hay alguna pizza que valga menos de $600?

const precioMenor600 = (precio) => {
    return pizzas.some ( (pizza) => {
        return pizza.precio < precio;
    })
        ? console.log(`¡Hay pizzas con precio mayor a $${precio}!`)
        : console.log(`¡Ups! No contamos con pizzas con precio menor a $${precio}`);
};

precioMenor600(600);


// c) El nombre de cada pizza con su respectivo precio.

const pizzasConPrecio = pizzas.forEach((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} tiene un precio de $${pizzas.precio}`);
});


//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

pizzas.forEach( (pizzas) => {
    console.log(`La pizza ${pizzas.nombre} tiene los ingredientes: `);
    pizzas.ingredientes.forEach( (ingredientes) => {
        console.log(`- ${ingredientes}`);
    })
});








    





