// ==========================================
// PERSONAGENS
// ==========================================

const personagens = {
    "Gorut": {
        imagem: "Gorut.jpg",
        tipo: "O mago sábio e criativo",
        categoria: "O conselheiro da equipe",
        descricao: "Você é muito inteligente, criativo e engraçado. Assim como Gorut, pode até parecer quieto à primeira vista, mas possui uma mente brilhante. Gosta de ajudar os outros, dar bons conselhos e encontrar soluções. Sua especialidade é criar poções de cura para ajudar os heróis.",
        caracteristicas: "Inteligência • Criatividade • Humor • Sabedoria",
        missao: "Sua missão é preparar poções especiais, encontrar soluções para os desafios e orientar sua equipe com sua sabedoria."
    },

    "héron": {
        imagem: "héron.jpg",
        tipo: "A sentinela de visão excepcional",
        categoria: "O observador da equipe",
        descricao: "Você é extremamente atento, falante e cheio de energia. Sua visão é extraordinária e você percebe coisas que quase ninguém consegue enxergar. Apesar de sua aparência delicada e indefesa, possui uma força surpreendente. Não para quieto e está sempre observando tudo ao seu redor.",
        caracteristicas: "Atenção • Agilidade • Visão • Força",
        missao: "Sua missão é vigiar os arredores, encontrar perigos escondidos e proteger a equipe usando sua visão e sua força."
    },

    "Kassara": {
        imagem: "Kassara.jpg",
        tipo: "A manipuladora das sombras",
        categoria: "A vilã enganadora",
        descricao: "Você é esperta, manipuladora e sabe muito bem como conseguir o que deseja. Não tem medo de mostrar sua maldade e até se orgulha dela. Sabe fingir ser bondosa, conquistar a confiança das pessoas e enganá-las quando isso pode trazer alguma vantagem.",
        caracteristicas: "Manipulação • Astúcia • Falsidade • Ambição",
        missao: "Sua missão é conquistar a confiança dos outros, descobrir seus segredos e usar essas informações para alcançar seus próprios objetivos."
    },

    "Kalya": {
        imagem: "Kalya.jpg",
        tipo: "A guerreira alegre e protetora",
        categoria: "A protetora da equipe",
        descricao: "Você é animada, criativa, divertida e muito forte. Adora aventuras, tem ideias incríveis e consegue transformar situações difíceis em momentos divertidos. Mas não se engane com seu jeito descontraído: você protege seus amigos e enfrenta qualquer perigo para defender quem ama.",
        caracteristicas: "Alegria • Criatividade • Força • Amizade • Proteção",
        missao: "Sua missão é proteger seus amigos, enfrentar os perigos do planeta e usar sua criatividade para encontrar soluções inesperadas."
    },

    "Luke Stan": {
        imagem: "Luke_Stan.png",
        tipo: "O viajante determinado",
        categoria: "O guerreiro da equipe",
        descricao: "Você é focado, forte e determinado. Assim como Luke Stan, sua jornada pode começar por acaso, mas você sabe encontrar seu caminho. Tem coragem para enfrentar desafios e um humor um tanto duvidoso, que pode surpreender quem está por perto.",
        caracteristicas: "Foco • Força • Determinação • Humor",
        missao: "Sua missão é explorar o planeta, enfrentar os desafios que aparecerem e usar sua força e determinação para completar a jornada."
    },

    "Vorkan": {
        imagem: "Vorkan.jpg",
        tipo: "O senhor das sombras",
        categoria: "O vilão individualista",
        descricao: "Você é frio, egoísta e não costuma se importar com o que os outros pensam. Gosta de fazer as coisas do seu próprio jeito e não aceita facilmente receber ordens. Sua personalidade difícil faz com que coloque seus próprios desejos acima de tudo.",
        caracteristicas: "Frieza • Individualismo • Teimosia • Poder",
        missao: "Sua missão é conquistar seus próprios objetivos, tomar suas decisões sem depender dos outros e impor sua vontade sobre os desafios."
    }
};


// ==========================================
// PERGUNTAS
// ==========================================

const perguntas = [
    {
        pergunta: "1. Qual característica mais combina com você?",
        alternativas: [
            ["Coragem e determinação", "Luke Stan"],
            ["Inteligência e criatividade", "Gorut"],
            ["Atenção e visão excepcional", "héron"],
            ["Astúcia e capacidade de enganar", "Kassara"],
            ["Alegria, força e proteção aos amigos", "Kalya"],
            ["Frieza e vontade de fazer tudo do meu jeito", "Vorkan"]
        ]
    },

    {
        pergunta: "2. Como você enfrentaria um grande desafio?",
        alternativas: [
            ["Enfrentaria com foco e determinação", "Luke Stan"],
            ["Pensaria em uma solução inteligente", "Gorut"],
            ["Observaria tudo antes de agir", "héron"],
            ["Manipularia a situação para conseguir o que quero", "Kassara"],
            ["Enfrentaria o desafio protegendo meus amigos", "Kalya"],
            ["Faria o que eu quisesse, sem aceitar ordens", "Vorkan"]
        ]
    },

    {
        pergunta: "3. Qual poder você escolheria?",
        alternativas: [
            ["Uma espada de energia luminosa", "Luke Stan"],
            ["A magia do conhecimento ancestral", "Gorut"],
            ["Enxergar tudo ao meu redor", "héron"],
            ["Controlar a mente das pessoas", "Kassara"],
            ["Uma força extraordinária para proteger quem amo", "Kalya"],
            ["Dominar a energia das sombras", "Vorkan"]
        ]
    },

    {
        pergunta: "4. O que você mais valoriza?",
        alternativas: [
            ["Liberdade e determinação", "Luke Stan"],
            ["Conhecimento e aprendizado", "Gorut"],
            ["Estar atento a tudo", "héron"],
            ["Conseguir o que quero, custe o que custar", "Kassara"],
            ["Amizade e proteção", "Kalya"],
            ["Meu próprio poder e meus desejos", "Vorkan"]
        ]
    },

    {
        pergunta: "5. Qual seria seu papel em uma equipe?",
        alternativas: [
            ["Enfrentar os perigos com coragem", "Luke Stan"],
            ["Aconselhar o grupo e preparar poções", "Gorut"],
            ["Identificar os perigos antes dos outros", "héron"],
            ["Manipular as situações a meu favor", "Kassara"],
            ["Proteger meus companheiros", "Kalya"],
            ["Fazer as coisas do meu jeito, sem depender de ninguém", "Vorkan"]
        ]
    },

    {
        pergunta: "6. Como seus amigos descreveriam você?",
        alternativas: [
            ["Focado, forte e com humor duvidoso", "Luke Stan"],
            ["Inteligente, engraçado e criativo", "Gorut"],
            ["Falante, agitado e muito atento", "héron"],
            ["Falsa, esperta e manipuladora", "Kassara"],
            ["Animada, divertida e protetora", "Kalya"],
            ["Frio, teimoso e individualista", "Vorkan"]
        ]
    },

    {
        pergunta: "7. Você encontra alguém precisando de ajuda. O que faz?",
        alternativas: [
            ["Ajudo e enfrento qualquer perigo", "Luke Stan"],
            ["Procuro uma maneira inteligente de ajudar", "Gorut"],
            ["Observo a situação para identificar o perigo", "héron"],
            ["Finjo ajudar se isso puder me trazer alguma vantagem", "Kassara"],
            ["Ajudo imediatamente e protejo essa pessoa", "Kalya"],
            ["Ignoro se não for algo que me interesse", "Vorkan"]
        ]
    },

    {
        pergunta: "8. Escolha o cenário da sua aventura.",
        alternativas: [
            ["Uma jornada por um planeta desconhecido", "Luke Stan"],
            ["Uma floresta mágica cheia de mistérios", "Gorut"],
            ["Uma montanha de onde posso observar tudo", "héron"],
            ["Um castelo onde posso manipular os outros", "Kassara"],
            ["Uma terra selvagem cheia de aventuras", "Kalya"],
            ["Uma fortaleza sombria onde mando em tudo", "Vorkan"]
        ]
    }
];


// ==========================================
// VARIÁVEIS DO QUESTIONÁRIO
// ==========================================

let perguntaAtual = 0;

let respostas = new Array(perguntas.length).fill(null);


// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const formulario = document.getElementById("form-identificacao");
const identificacao = document.getElementById("identificacao");
const areaQuiz = document.getElementById("area-quiz");

const campoNome = document.getElementById("nome");
const campoNascimento = document.getElementById("nascimento");

const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");

const numeroElemento = document.getElementById("numero-pergunta");
const porcentagemElemento = document.getElementById("porcentagem");
const barraElemento = document.getElementById("barra-progresso");

const areaPergunta = document.getElementById("area-pergunta");
const resultadoElemento = document.getElementById("resultado");
const controles = document.getElementById("controles");


// ==========================================
// CALCULAR IDADE
// ==========================================

function calcularIdade(dataNascimento) {

    const hoje = new Date();

    const [ano, mes, dia] = dataNascimento.split("-").map(Number);

    let idade = hoje.getFullYear() - ano;

    const aniversarioAindaNaoChegou =
        hoje.getMonth() + 1 < mes ||
        (hoje.getMonth() + 1 === mes && hoje.getDate() < dia);

    if (aniversarioAindaNaoChegou) {
        idade--;
    }

    return idade;
}


// ==========================================
// IDENTIFICAÇÃO DO PARTICIPANTE
// ==========================================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();
console.log("teste");

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const nome = campoNome.value.trim();
    const nascimento = campoNascimento.value;

    if (!nome || !nascimento) {
        alert("Preencha seu nome e sua data de nascimento!");
        return;
    }

    const dataNascimento = new Date(nascimento + "T00:00:00");

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (
        Number.isNaN(dataNascimento.getTime()) ||
        dataNascimento > hoje
    ) {
        alert("Digite uma data de nascimento válida. Ela não pode ser futura.");
        return;
    }

    sessionStorage.setItem("nomeUsuario", nome);
    sessionStorage.setItem("nascimentoUsuario", nascimento);

    identificacao.hidden = true;
    areaQuiz.hidden = false;

    const mensagem = document.querySelector(".titulo-pagina p:last-child");

    if (mensagem) {
        mensagem.textContent =
            "Boa jornada, " + nome +
            "! Responda às perguntas e descubra seu personagem.";
    }

    ligarControles();
    mostrarPergunta();

});


// Impede a seleção de datas futuras
function atualizarDataMaxima() {

    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    campoNascimento.max = `${ano}-${mes}-${dia}`;
}

atualizarDataMaxima();


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function mostrarPergunta() {

    const atual = perguntas[perguntaAtual];

    const progresso = Math.round(
        ((perguntaAtual + 1) / perguntas.length) * 100
    );

    numeroElemento.textContent =
        `PERGUNTA ${perguntaAtual + 1} DE ${perguntas.length}`;

    porcentagemElemento.textContent = `${progresso}%`;

    barraElemento.style.width = `${progresso}%`;

    perguntaElemento.textContent = atual.pergunta;

    alternativasElemento.innerHTML = "";

    atual.alternativas.forEach(([texto, personagem], indice) => {

        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "alternativa";

        if (respostas[perguntaAtual] === personagem) {
            botao.classList.add("selecionada");
        }

        const letra = document.createElement("span");

        letra.className = "letra";
        letra.textContent = String.fromCharCode(65 + indice);

        const textoElemento = document.createElement("span");

        textoElemento.className = "texto-alternativa";
        textoElemento.textContent = texto;

        botao.append(letra, textoElemento);

        botao.addEventListener("click", () => {

            respostas[perguntaAtual] = personagem;

            mostrarPergunta();

        });

        alternativasElemento.appendChild(botao);

    });

    document.getElementById("voltar").disabled =
        perguntaAtual === 0;

    document.getElementById("proximo").disabled =
        respostas[perguntaAtual] === null;

    document.getElementById("proximo").textContent =
        perguntaAtual === perguntas.length - 1
            ? "Descobrir meu personagem ✦"
            : "Próxima →";
}


// ==========================================
// MOSTRAR RESULTADO
// ==========================================

function mostrarResultado() {

    const pontuacao = {};

    Object.keys(personagens).forEach(nome => {
        pontuacao[nome] = 0;
    });

    respostas.forEach(personagem => {

        if (personagem && pontuacao[personagem] !== undefined) {
            pontuacao[personagem]++;
        }

    });

    const maiorPontuacao = Math.max(
        ...Object.values(pontuacao)
    );

    const vencedores = Object.keys(pontuacao).filter(
        nome => pontuacao[nome] === maiorPontuacao
    );

    const vencedor = vencedores[
        Math.floor(Math.random() * vencedores.length)
    ];

    const personagem = personagens[vencedor];

    const nomeUsuario =
        sessionStorage.getItem("nomeUsuario") || "Explorador";

    const nascimentoUsuario =
        sessionStorage.getItem("nascimentoUsuario");

    const idade = nascimentoUsuario
        ? calcularIdade(nascimentoUsuario)
        : null;

    areaPergunta.hidden = true;

    resultadoElemento.hidden = false;

    numeroElemento.textContent = "SEU DESTINO FOI REVELADO";

    porcentagemElemento.textContent = "100%";

    barraElemento.style.width = "100%";

    resultadoElemento.innerHTML = "";

    // Imagem do personagem

    const imagem = document.createElement("img");

    imagem.src = `imagens/${personagem.imagem}`;
    imagem.alt = `Imagem de ${vencedor}`;
    imagem.className = "imagem-resultado";

    imagem.onerror = () => {
        imagem.style.display = "none";
    };

    // Identificação do participante

    const identificacaoResultado = document.createElement("p");

    identificacaoResultado.className = "subtitulo";

    identificacaoResultado.textContent =
        `RESULTADO DE ${nomeUsuario.toUpperCase()}`;

    // Idade

    const idadeElemento = document.createElement("p");

    idadeElemento.textContent = idade !== null
        ? `Idade: ${idade} anos`
        : "";

    // Título

    const titulo = document.createElement("p");

    titulo.className = "subtitulo";
    titulo.textContent = "SEU PERSONAGEM É";

    // Nome do personagem

    const nome = document.createElement("h2");

    nome.textContent = vencedor;

    // Tipo

    const tipo = document.createElement("h3");

    tipo.textContent = personagem.tipo;

    // Categoria

    const categoria = document.createElement("p");

    categoria.textContent = personagem.categoria;

    // Descrição

    const descricao = document.createElement("p");

    descricao.textContent = personagem.descricao;

    // Características

    const caracteristicas = document.createElement("p");

    caracteristicas.className = "caracteristicas";

    caracteristicas.textContent = personagem.caracteristicas;

    // Missão

    const tituloMissao = document.createElement("h3");

    tituloMissao.textContent = "Sua missão na galáxia";

    const missao = document.createElement("p");

    missao.textContent = personagem.missao;

    // Adiciona tudo ao resultado

    resultadoElemento.append(
        imagem,
        identificacaoResultado,
        idadeElemento,
        titulo,
        nome,
        tipo,
        categoria,
        descricao,
        caracteristicas,
        tituloMissao,
        missao
    );


    // ======================================
    // OUTRAS OPÇÕES DE PERSONAGENS
    // ======================================

    const outrasOpcoes = document.createElement("div");

    outrasOpcoes.className = "outras-opcoes";

    const tituloOpcoes = document.createElement("h3");

    tituloOpcoes.textContent =
        "✨ Conheça os outros personagens desta galáxia!";

    const textoOpcoes = document.createElement("p");

    textoOpcoes.textContent =
        "Explore a galeria e descubra mais sobre os habitantes deste planeta.";

    const linkGaleria = document.createElement("a");

    linkGaleria.href = "personagens.html";
    linkGaleria.className = "botao";
    linkGaleria.textContent = "Ver galeria de personagens →";

    outrasOpcoes.append(
        tituloOpcoes,
        textoOpcoes,
        linkGaleria
    );

    resultadoElemento.appendChild(outrasOpcoes);


    // ======================================
    // BOTÕES DEPOIS DO RESULTADO
    // ======================================

    controles.innerHTML = `
        <button id="refazer" class="botao secundario" type="button">
            ↻ Refazer questionário
        </button>

        <a href="personagens.html" class="botao">
            Ver todos os personagens →
        </a>
    `;

    document.getElementById("refazer").addEventListener(
        "click",
        reiniciarQuiz
    );

}


// ==========================================
// LIGAR BOTÕES DE VOLTAR E PRÓXIMA
// ==========================================

function ligarControles() {

    document.getElementById("proximo").onclick = () => {

        if (respostas[perguntaAtual] === null) {
            return;
        }

        if (perguntaAtual < perguntas.length - 1) {

            perguntaAtual++;

            mostrarPergunta();

        } else {

            mostrarResultado();

        }

    };

    document.getElementById("voltar").onclick = () => {

        if (perguntaAtual > 0) {

            perguntaAtual--;

            mostrarPergunta();

        }

    };

}


// ==========================================
// REINICIAR QUESTIONÁRIO
// ==========================================

function reiniciarQuiz() {

    perguntaAtual = 0;

    respostas = new Array(perguntas.length).fill(null);

    areaPergunta.hidden = false;

    resultadoElemento.hidden = true;

    controles.innerHTML = `
        <button id="voltar" class="botao secundario" type="button" disabled>
            ← Voltar
        </button>

        <button id="proximo" class="botao" type="button" disabled>
            Próxima →
        </button>
    `;

    ligarControles();

    mostrarPergunta();

}
