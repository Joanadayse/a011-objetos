const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a)
const copiapokemon1 = {...pokemon1}
console.log(copiapokemon1)
pokemon1.nome="Squirtle"
pokemon1.tipo="Agua"

console.log(pokemon1)

//b)
pokemon1.ataques = [];
const ataque1 ={
     nome: 'Investida',
     dano: 40,
     tipo: 'Normal',
     precisao: 100,
 }
pokemon1.ataques.push(ataque1);
console.log(pokemon1)



//c
copiapokemon1.ataques = [...pokemon1.ataques];
console.log(copiapokemon1)

//d
pokemon1.ataques.push({
     nome: "Folha Navalha",
     dano: 45,
    tipo: 'Grama',
    precisao: 100,

})
console.log(pokemon1)

//e
copiapokemon1.ataques.push({
     nome: "Jato de Agua",
     dano: 40,
    tipo: 'Agua',
    precisao: 100,
     
})
console.log(copiapokemon1)

//f
console.log(pokemon1)
console.log(copiapokemon1)


