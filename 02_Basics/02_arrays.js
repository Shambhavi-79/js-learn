const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const allNewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 7, 6], 9, [5, 6, [8, 9]]]

const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);


console.log(Array.isArray("shambhavi"));
console.log(Array.from("shambhavi")); //forms an array with given value

console.log(Array.from({name: "shambhavi"}));
// gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
