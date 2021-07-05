const popup = document.querySelector(".popup");

const conteudoColuna = document.querySelector('.conteudoColuna');

const inputDescricao = document.querySelector('#inputDescription');
const selectTipo = document.querySelector('#selectType');
const selectResponsavel = document.querySelector('#selectResponsible');

const coluna = document.querySelector('.coluna');


var tarefas = [];

function abrirPopup() {
    popup.style.display = "flex";
};  

function fecharPopup() {
    inputDescricao.value = '';
    selectTipo.selectedIndex = '';
    selectResponsavel.selectedIndex = '';
    popup.style.display = "none";
};


function mostrarTickets() {
    conteudoColuna.innerHTML = '';

    for (tarefa of tarefas) {

        const descricao = document.createTextNode(tarefa.descricao);
        const tipo = document.createTextNode(tarefa.tipo);
        const responsavel = document.createTextNode(tarefa.responsavel);
        const id = document.createTextNode(tarefa.id);


        const novoTicket = document.createElement('div');
        novoTicket.classList.add('ticket');

        const novoProcedimento = document.createElement('div');
        novoProcedimento.classList.add('tipoTicket');
        
        const novaDescricao = document.createElement('div');
        novaDescricao.classList.add('descricao');

        const negrito = document.createElement('b');

        const novoCodigo = document.createElement('div');
        novoCodigo.classList.add('codigo');

        const novoResponsavel = document.createElement('div');
        novoResponsavel.classList.add('nomeResponsavel');

        const novoRodape = document.createElement('div');
        novoRodape.classList.add('rodape');

        const novoBotao = document.createElement('button');
        novoBotao.setAttribute('onclick', 'removerTicket('+ tarefa.id +')');

        const imagemBotao = document.createElement('img');
        imagemBotao.src = "imagens/ret.png";


        novaDescricao.appendChild(descricao);
        novoProcedimento.appendChild(tipo);
        novoResponsavel.appendChild(responsavel);
        negrito.appendChild(id);
        novoCodigo.appendChild(negrito);
        
        novoTicket.appendChild(novoResponsavel);    
        novoTicket.appendChild(novoProcedimento);
        novoTicket.appendChild(novoCodigo);
        novoTicket.appendChild(novaDescricao);
        novoTicket.appendChild(novoRodape);

        novoRodape.appendChild(novoResponsavel);
        novoRodape.appendChild(novoBotao);
        novoRodape.appendChild(imagemBotao);
        
        novoBotao.appendChild(imagemBotao);

        conteudoColuna.appendChild(novoTicket);
    };
};

mostrarTickets();

function addTicket(){
    const valorInputDescricao = inputDescricao.value;
    const valorSelectTipo = selectTipo.value;
    const valorSelectResponsavel = selectResponsavel.value;

    const novoTicket = {
        id: Math.floor(1000 + Math.random() * 9000),
        descricao: valorInputDescricao,
        tipo: valorSelectTipo,
        responsavel: valorSelectResponsavel
    };


    if (valorInputDescricao == '' || valorSelectTipo == '' || valorSelectResponsavel == '') { 
        alert("Preencha o formulário");
    }else {
        tarefas.push(novoTicket);
    
        mostrarTickets();
        fecharPopup();
    };
     
};


function removerTicket(id) {
    tarefas = tarefas.filter(function(tarefa){
        return tarefa.id != id;
    });
    mostrarTickets();
};
