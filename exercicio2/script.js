const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

console.log(filme.elenco[0]) 

console.log("\n Nome do último ator:",filme.elenco[(filme.elenco.length)-1])
// o primeiro é o array
// e o segundo é o array - 1 (posição que eu quero) 

console.log(filme.transmissoesHoje)

console.log(filme.transmissoesHoje[1])