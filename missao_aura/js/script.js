```javascript
const perfis = [
    {
        nome: "Engenheiro de Sistemas",
        categoria: "Construção",
        descricao: "Você gosta de encontrar soluções.",
        recomendacao: "Ajude a consertar os equipamentos.",
        imagem: "imagens/perfil-1.jpg"
    },
    {
        nome: "Cientista Explorador",
        categoria: "Investigação",
        descricao: "Você gosta de pesquisar e analisar.",
        recomendacao: "Investigue os mistérios do planeta.",
        imagem: "imagens/perfil-2.jpg"
    },
    {
        nome: "Explorador de Campo",
        categoria: "Exploração",
        descricao: "Você gosta de descobrir lugares novos.",
        recomendacao: "Explore o planeta desconhecido.",
        imagem: "imagens/perfil-3.jpg"
    },
    {
        nome: "Estrategista da Missão",
        categoria: "Planejamento",
        descricao: "Você gosta de organizar e planejar.",
        recomendacao: "Organize as etapas da missão.",
        imagem: "imagens/perfil-4.jpg"
    }
];

document.getElementById("form").onsubmit = function(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let data = document.getElementById("data").value;

    if (nome == "" || data == "") {
        alert("Preencha todos os campos!");
        return;
    }

    let nascimento = new Date(data + "T00:00:00");
    let hoje = new Date();

    if (isNaN(nascimento.getTime()) || nascimento > hoje) {
        alert("Digite uma data válida!");
        return;
    }

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    let aniversario = new Date(
        hoje.getFullYear(),
        nascimento.getMonth(),
        nascimento.getDate()
    );

    if (aniversario > hoje) {
        idade--;
    }

    let pontos = [0, 0, 0, 0];

    for (let i = 0; i != 4; i++) {
        let resposta = document.querySelector(
            'input[name="p' + (i + 1) + '"]:checked'
        );

        if (resposta == null) {
            alert("Responda todas as perguntas!");
            return;
        }

        pontos[Number(resposta.value)]++;
    }

    let maior = pontos[0];
    let perfil = 0;

    for (let i = 1; i != 4; i++) {
        if (pontos[i] > maior) {
            maior = pontos[i];
            perfil = i;
        }
    }

    let empates = 0;

    for (let i = 0; i != 4; i++) {
        if (pontos[i] == maior) {
            empates++;
        }
    }

    let mensagem = "";

    if (empates > 1) {
        mensagem = "<p>Deu empate! Escolhemos o primeiro perfil com mais pontos.</p>";
    }

    let resultado = perfis[perfil];

    document.getElementById("resultado").innerHTML =
        "<h2>Olá, " + nome + "!</h2>" +
        "<p>Idade: " + idade + " anos</p>" +
        "<h2>" + resultado.nome + "</h2>" +
        "<p>Categoria: " + resultado.categoria + "</p>" +
        "<p>" + resultado.descricao + "</p>" +
        "<p>Recomendação: " + resultado.recomendacao + "</p>" +
        mensagem +
        "<img src='" + resultado.imagem + "' alt='Imagem do perfil'>" +
        "<br><br>" +
        "<button type='button' onclick='refazerTeste()'>Refazer teste</button>";
};

function refazerTeste() {
    document.getElementById("form").reset();
    document.getElementById("resultado").innerHTML = "";
}
```