//1Ejercicios destructuring Dado el siguiente objeto:

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:
const [, ana] = empleados;  // Ana es el segundo elemento del array

console.log(ana);  // {"name":"Ana", "email":"Ana@gmail.com"}

// Extrae el email del empleado Luis --> Luis@gmail.com
const [{ email: emailLuis }] = empleados;

console.log(emailLuis);  //email de empleado luis


const pokemon = {
    nombre: "Bulbasaur", // Cambié "name" a "nombre"
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
};

// Extraer el nombre del Pokémon
const nombrePokemon = pokemon.nombre;

// Extraer el tipo de Pokémon
const tipoPokemon = pokemon.type;

// Extraer el movimiento "Tackle"
const movimientoTackle = pokemon.moves.includes("Tackle") ? "Tackle" : "No tiene Tackle";

console.log(`Nombre: ${nombrePokemon}`);
console.log(`Tipo: ${tipoPokemon}`);
console.log(`Movimiento Tackle: ${movimientoTackle}`);

//2.Ejercicios spread/rest
//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}


//ejercicio anterior:
const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

// Fusión de Pokémon
const mergedPokemon = {
    name: [pikachu.name, bulbasaur.name], // lista de nombres
    type: [pikachu.type, bulbasaur.type], // combinación de tipos
    ability: {
        primary: [pikachu.ability.primary, bulbasaur.ability.primary],
        hidden: [pikachu.ability.hidden, bulbasaur.ability.hidden]
    },
    stats: {
        hp: pikachu.stats.hp + bulbasaur.stats.hp, // suma de HP
        attack: pikachu.stats.attack + bulbasaur.stats.attack, // suma de ataque
        deffense: pikachu.stats.deffense + bulbasaur.stats.deffense, // suma de defensa
        speed: pikachu.stats.speed + bulbasaur.stats.speed // suma de velocidad
    },
    moves: [...new Set([...pikachu.moves, ...bulbasaur.moves])] // combinar movimientos sin duplicados
}

console.log(mergedPokemon);




//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther(...args) {
    // Usamos reduce para sumar todos los elementos del array args
    return args.reduce((acc, current) => acc + current, 0);
}

// Ejemplos de uso
console.log(sumEveryOther(6, 8, 2, 3, 1)); // 20
console.log(sumEveryOther(11, 3, 12)); // 26

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
function addOnlyNums(...args) {
    return args
        .filter(arg => typeof arg === 'number') // Filtra solo los números
        .reduce((acc, current) => acc + current, 0); // Suma los números filtrados
}

// Ejemplo de uso
console.log(addOnlyNums(1, 'perro', 2, 4)); // 7

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
function countTheArgs(...args) {
    return args.length; // Retorna el número de elementos recibidos
}

// Ejemplos de uso
console.log(countTheArgs('gato', 'perro')); // 2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); // 4


//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2]; // Combina ambos arrays con el operador spread
}

// Ejemplo de uso
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
