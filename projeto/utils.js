const frasesMotivacionais = [
    "O sucesso é a soma de pequenos esforços repetidos dia a dia.",
    "Acredite em si mesmo e você estará no caminho certo.",
    "A única pessoa que você precisa superar é a pessoa que você era ontem.",
    "O medo de falhar nunca deve ser maior que a vontade de tentar.",
    "Atitude positiva gera resultados positivos.",
    "A maior glória não é nunca cair, mas sim levantar-se sempre.",
    "Se você quer algo que nunca teve, você precisa fazer algo que nunca fez.",
    "O sucesso não é a chave da felicidade. A felicidade é a chave do sucesso.",
    "Se você não pode voar, então corra. Se você não pode correr, então ande. Se você não pode andar, então rasteje, mas continue em frente de qualquer maneira.",
    "A única pessoa que pode te limitar é você mesmo.",
    "A vida é 10% o que acontece conosco e 90% como reagimos a isso.",
    "Não tenha medo de ser grande.",
    "O sucesso é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.",
    "A verdadeira medida de um homem não é o número de vezes que ele cai, mas quantas vezes ele se levanta.",
    "A única pessoa que pode te fazer sentir inferior é você mesmo.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "Se você quer voar, você tem que abrir mão de tudo o que te pesa.",
    "A vida é curta demais para se preocupar com o que os outros pensam.",
    "A felicidade não é um destino, mas uma jornada."
]

function fotoGenerateHTML(person, pathImagem){
    const htmlResponse = `
        <div id="primeira-rota">
            <button 
                type="button" 
                hx-get="/primeira-rota/${person}" 
                hx-target="#primeira-rota" 
                hx-swap="outerHTML"
                hx-trigger="click from:#button-trigger"
            >
                Alterar Foto
            </button>
            <br>
            <img 
                src="${pathImagem}" alt="" width="400" 
                alt="" 
                width="400"
            >
            <br>
        </div>
    `
    return htmlResponse
}


function gerarFraseAleatoria(frases) {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

export {frasesMotivacionais, gerarFraseAleatoria, fotoGenerateHTML}