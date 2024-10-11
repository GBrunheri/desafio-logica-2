

let nome = "Misterioso"
let saldo = saldoVitorias(45, 13)
console.log(`O herói ${nome} tem ${saldo} vitorias e esta no nivel ` + nivelRanking(saldo))



// Funções

function saldoVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo

}

function nivelRanking(saldo) {

    switch (true) {
        case saldo <= 10:
            nivel =  "Ferro"
            break

        case saldo <= 20:
            nivel = "Bronze"
            break

        case saldo <= 50:
            nivel = "Prata"
            break

        case saldo <= 80:
            nivel = "Ouro"
            break

        case saldo <= 90:
           nivel = "Diamante"
            break

        case saldo <= 100:
            nivel = "Lendário"
            break

        case saldo >= 100:
            nivel = "Imortal"
            break
    }

return nivel
}

    
