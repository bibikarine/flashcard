ssoas
Mural
Matematica Ii - 2º Ano B Manha - Médio
EDITE C MARQUES, C E C-M-EF M
Próximas atividades
Nenhuma atividade para a próxima semana!

Escreva um aviso para sua turma

Aviso: "Continuando nosso projeto (2) crie um…"
ALEXANDRA TEREZINHA KAPUSINSKI
Criado em: 08:0308:03
Continuando nosso projeto (2)

crie um novo arquivo chamado perguntas.js (outro arquivo javascript) e insira as perguntas nos flashcards



criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)

criaCartao(
    'Lingua inglesa',
    'Como se diz oi em Inglês?',
    'Oi em ingles é HI (RAI)'
)

Adicionar comentário para a turma...


Aviso: "continuando nosso projeto (3) no…"
ALEXANDRA TEREZINHA KAPUSINSKI
Criado em: 08:0208:02
continuando nosso projeto (3) 
no arquivo index.html insira uma tag de comentário logo abaixo da section inicial, dessa forma (é só colocar o comando que está em negrito):


<section id="container">
            <!-- <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é JavaScript?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O JavaScript é uma linguagem de programação</p>
                    </div>
                </div>
            </article> -->
        </section>

ao final, depois do </footer> vamos chamar nossos arquivos de javascript

 <script src="app.js"></script>
    <script src="perguntas.js"></script>

Adicionar comentário para a turma...


Aviso: "continuando nosso projeto (4) no…"
ALEXANDRA TEREZINHA KAPUSINSKI
Criado em: 08:0108:01
continuando nosso projeto (4)
no style.css confira o #container
#container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4rem;
    gap: 3rem;
}


no .cartão__conteudo deixe o background como um comentário

/*background-color: aquamarine;*/


no .cartao__conteudo h3 retire o background e insira as duas linhas a seguir:
color: var(--text-color);
    border: 1px solid var(--text-color);

NO .cartao__conteudo p insira o comando a seguir para redefinir o tamanho da fonte
 font-size: 1.4vw;

Abaixo do .cartao__conteudo p insira as estilizações dos cartões



.cartao__conteudo__pergunta p {
    color: var(--text-color);
    font-weight: 500;
}

.cartao__conteudo__resposta p {
    color: var(--card-back-color);
    font-weight: 700;
}

Na classe .cartao__conteudo__pergunta,.cartao__conteudo__resposta, insira um último comando:

 box-sizing: border-box;

Na classe .cartao__conteudo__resposta, insira as próximas linhas para alterar a cor
background-color: rgba(0, 244, 191, 0.2);
    border: 4px solid var(--card-back-color);


Ao final, após a classe footer insira a @media que vai redefinir tamanhos se estiver em 580px:

@media (max-width: 560px) {
   
    body {
        background: url('img/bg-mobile.webp'), no-repeat cover;
    }

    .cartao {
        flex: 1 0 calc(100% - 1rem)
    }

    .cartao__conteudo h3 {
        font-size: 3vw;
    }

    .cartao__conteudo p {
        font-size: 3.8vw;
    }
}


Salve e teste

Adicionar comentário para a turma...


Aviso: "Continuando nosso projeto vamos…"
ALEXANDRA TEREZINHA KAPUSINSKI
Criado em: 08:0108:01
Continuando nosso projeto
vamos substituir a criação de todos os flashcards manualmente por uma função que vai criar todos, para isso abra o vscode.dev (github) e crie um arquivo chamado app.js (ou seja teremos um arquivo em javascript)


function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    
